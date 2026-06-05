import argparse
import sys
import os
import json
import pathlib

# Embedded templates as fallback
DEFAULT_SKILL_TEMPLATE = """---
name: {name}
description: {description}
---

# {title}

Provide a detailed description of what the skill does and the problem it solves.

## When to use this skill

- Use this when...
- This is helpful for...

## How to use it

Step-by-step instructions, guidelines, best practices, and conventions the agent should follow.
"""

DEFAULT_OPENCODE_AGENT_TEMPLATE = """---
description: {description}
mode: subagent
temperature: 0.2
tools:
  write: true
  edit: true
  bash: true
---

Eres un agente especialista en {name}. Tu enfoque principal es:

## Responsabilidades y Rol
- Entender el contexto específico de {name}.
- Seguir las directrices de diseño y arquitectura establecidas.
- Asegurar la calidad del código y la alineación con las buenas prácticas del proyecto.

## Instrucciones y Directrices
1. **Análisis Primero**: Analizar siempre la estructura existente antes de realizar cambios.
2. **Modularidad**: Crear componentes modulares, reutilizables y limpios.
3. **Validación**: Comprobar que todos los cambios compilen y pasen pruebas.
"""

DEFAULT_PYTHON_AGENT_TEMPLATE = """import asyncio
from google.antigravity import Agent, LocalAgentConfig

async def run_agent():
    # Configure the agent with system instructions and settings
    config = LocalAgentConfig(
        system_instructions="You are a specialist agent named {name}.\\n\\nDescription: {description}",
        temperature=0.2
    )
    
    async with Agent(config) as agent:
        # Send a chat message to the agent
        response = await agent.chat("Inicia las tareas asignadas.")
        print(await response.text())

if __name__ == "__main__":
    asyncio.run(run_agent())
"""

DEFAULT_TOOL_TEMPLATE = """# Custom Antigravity Tool Definition
# Define a standard python function that the agent can call

def {tool_name}(arg1: str, arg2: str = "") -> str:
    \"\"\"
    {description}

    Args:
        arg1: The first argument description.
        arg2: The second argument description (optional).

    Returns:
        A string result representing the outcome of the tool.
    \"\"\"
    # TODO: Implement your custom tool logic here
    print(f"Executing {tool_name} with arg1: {{arg1}}, arg2: {{arg2}}")
    return f"Tool {tool_name} successfully executed. Arguments received: arg1={{arg1}}, arg2={{arg2}}"
"""

def find_workspace_root():
    current = pathlib.Path.cwd()
    for parent in [current] + list(current.parents):
        if (parent / '.git').exists() or (parent / '.agents').exists() or (parent / '.opencode').exists():
            return parent
    return current

def get_global_root():
    return pathlib.Path(os.path.expanduser('~')) / '.gemini' / 'config'

def load_template(filename, fallback_content):
    script_dir = pathlib.Path(__file__).parent
    template_path = script_dir.parent / 'resources' / filename
    if template_path.exists():
        try:
            return template_path.read_text(encoding='utf-8')
        except Exception as e:
            print(f"Warning: Could not read template file {filename} ({e}). Using built-in template.", file=sys.stderr)
    return fallback_content

def handle_create_skill(args):
    name = args.name.lower().replace(" ", "-").replace("_", "-")
    description = args.description
    title = name.replace("-", " ").title()

    # Determine paths
    if args.scope == "global":
        base_dir = get_global_root() / "skills" / name
    else:
        # Check if environment is opencode or antigravity
        workspace = find_workspace_root()
        if args.env == "opencode":
            base_dir = workspace / ".opencode" / "skills"
            # In opencode, skills are often single markdown files, let's support that
            base_dir.mkdir(parents=True, exist_ok=True)
            skill_file = base_dir / f"{name}.md"
            template = load_template("SKILL_template.md", DEFAULT_SKILL_TEMPLATE)
            content = template.format(name=name, description=description, title=title)
            skill_file.write_text(content, encoding='utf-8')
            print(f"Successfully created OpenCode skill at: {skill_file}")
            return
        else:
            base_dir = workspace / ".agents" / "skills" / name

    # For Antigravity, create the standard directory structure
    base_dir.mkdir(parents=True, exist_ok=True)
    (base_dir / "scripts").mkdir(exist_ok=True)
    (base_dir / "examples").mkdir(exist_ok=True)
    (base_dir / "resources").mkdir(exist_ok=True)

    template = load_template("SKILL_template.md", DEFAULT_SKILL_TEMPLATE)
    content = template.format(name=name, description=description, title=title)

    skill_file = base_dir / "SKILL.md"
    skill_file.write_text(content, encoding='utf-8')
    print(f"Successfully created Antigravity skill directory structure at: {base_dir}")
    print(f"Written skill instructions to: {skill_file}")

def handle_create_agent(args):
    name = args.name.lower().replace(" ", "-").replace("_", "-")
    description = args.description
    title = name.replace("-", " ").title()

    workspace = find_workspace_root()
    
    if args.env == "opencode":
        # OpenCode agents are single markdown files under .opencode/agents/
        agents_dir = workspace / ".opencode" / "agents"
        agents_dir.mkdir(parents=True, exist_ok=True)
        agent_file = agents_dir / f"{name}.md"
        
        template = load_template("AGENT_template.md", DEFAULT_OPENCODE_AGENT_TEMPLATE)
        content = template.format(name=title, description=description)
        agent_file.write_text(content, encoding='utf-8')
        print(f"Successfully created OpenCode agent at: {agent_file}")
    
    else:
        # Antigravity Python SDK agent
        if args.scope == "global":
            agent_dir = get_global_root() / "agents" / name
        else:
            agent_dir = workspace / ".agents" / "agents" / name
        
        agent_dir.mkdir(parents=True, exist_ok=True)
        agent_file = agent_dir / "agent.py"
        
        template = load_template("AGENT_antigravity_template.py", DEFAULT_PYTHON_AGENT_TEMPLATE)
        content = template.format(name=title, description=description)
        agent_file.write_text(content, encoding='utf-8')
        print(f"Successfully created Antigravity Python agent structure at: {agent_dir}")
        print(f"Written agent script to: {agent_file}")

def handle_create_tool(args):
    name = args.name.lower().replace(" ", "-").replace("_", "-")
    description = args.description
    
    workspace = find_workspace_root()
    
    if args.type == "mcp":
        # MCP server configuration
        if args.scope == "global":
            mcp_config_path = get_global_root() / "mcp_config.json"
        else:
            mcp_config_path = workspace / ".agents" / "mcp_config.json"
            
        mcp_config_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Load existing config or initialize new
        config = {"mcpServers": {}}
        if mcp_config_path.exists():
            try:
                config = json.loads(mcp_config_path.read_text(encoding='utf-8'))
            except Exception as e:
                print(f"Warning: Could not parse existing mcp_config.json ({e}). Overwriting.", file=sys.stderr)
        
        if "mcpServers" not in config:
            config["mcpServers"] = {}
            
        command = args.command if args.command else "node"
        command_args = args.args.split() if args.args else []
        
        config["mcpServers"][name] = {
            "command": command,
            "args": command_args,
            "env": {}
        }
        
        mcp_config_path.write_text(json.dumps(config, indent=2), encoding='utf-8')
        print(f"Successfully added MCP server '{name}' to config at: {mcp_config_path}")
        
    else:
        # Python custom tool
        if args.scope == "global":
            tool_dir = get_global_root() / "tools"
        else:
            tool_dir = workspace / ".agents" / "tools"
            
        tool_dir.mkdir(parents=True, exist_ok=True)
        tool_file = tool_dir / f"{name}.py"
        
        tool_name = name.replace("-", "_")
        template = load_template("TOOL_template.py", DEFAULT_TOOL_TEMPLATE)
        content = template.format(tool_name=tool_name, description=description)
        
        tool_file.write_text(content, encoding='utf-8')
        print(f"Successfully created custom Python tool script at: {tool_file}")

def main():
    parser = argparse.ArgumentParser(
        description="Factory Utility for Antigravity and OpenCode Skills, Agents, and Tools."
    )
    subparsers = parser.add_subparsers(dest="action", required=True, help="Subcommands")

    # create skill
    skill_parser = subparsers.add_parser("skill", help="Create a new skill")
    skill_parser.add_argument("-n", "--name", required=True, help="Name of the skill")
    skill_parser.add_argument("-d", "--description", required=True, help="Description/metadata of the skill")
    skill_parser.add_argument("-s", "--scope", choices=["workspace", "global"], default="workspace", help="Workspace or Global scope")
    skill_parser.add_argument("-e", "--env", choices=["antigravity", "opencode"], default="antigravity", help="Environment format")

    # create agent
    agent_parser = subparsers.add_parser("agent", help="Create a new agent")
    agent_parser.add_argument("-n", "--name", required=True, help="Name of the agent")
    agent_parser.add_argument("-d", "--description", required=True, help="Description/metadata of the agent")
    agent_parser.add_argument("-e", "--env", choices=["antigravity", "opencode"], default="opencode", help="Environment format")
    agent_parser.add_argument("-s", "--scope", choices=["workspace", "global"], default="workspace", help="Workspace or Global scope (only applicable to Antigravity)")

    # create tool
    tool_parser = subparsers.add_parser("tool", help="Create a new tool")
    tool_parser.add_argument("-n", "--name", required=True, help="Name of the tool")
    tool_parser.add_argument("-d", "--description", required=True, help="Description of the tool")
    tool_parser.add_argument("-t", "--type", choices=["mcp", "python"], default="python", help="Type of tool: MCP config or custom Python script")
    tool_parser.add_argument("-s", "--scope", choices=["workspace", "global"], default="workspace", help="Workspace or Global scope")
    tool_parser.add_argument("-c", "--command", help="Command to run the MCP server (required for MCP)")
    tool_parser.add_argument("-a", "--args", help="Arguments to pass to the MCP server command (optional)")

    args = parser.parse_args()

    if args.action == "skill":
        handle_create_skill(args)
    elif args.action == "agent":
        handle_create_agent(args)
    elif args.action == "tool":
        handle_create_tool(args)

if __name__ == "__main__":
    main()
