---
name: skill-factory
description: Creates and scaffolds new skills, custom agents, and tools (MCP or custom scripts) for both Google Antigravity 2.0 and OpenCode environments. Use when asked to generate, configure, or create a new skill, agent, or tool.
---

# Skill & Agent Factory

This skill provides instructions and a CLI script to automate the creation and configuration of new Skills, custom Agents, and Tools (MCP servers or Python scripts) under both the Google Antigravity 2.0 protocol and the local OpenCode environment.

## When to use this skill

- Use this when the user or agent needs to create a new agent skill.
- Use this when generating a custom agent configuration (OpenCode markdown or Antigravity python script).
- Use this when setting up a new tool or configuring an MCP server (e.g. updating `mcp_config.json`).

## How to use it

To run the factory utility, execute the python script located at:
`[factory.py](scripts/factory.py)`

### 1. Creating a Skill
By default, this creates an Antigravity 2.0 folder structure (`SKILL.md`, `scripts/`, `examples/`, `resources/`).

*   **Workspace Scope (Default):**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py skill -n "my-new-skill" -d "Helps with a specific task."
    ```
*   **Global Scope:**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py skill -n "my-new-skill" -d "Helps with a specific task." -s global
    ```
*   **OpenCode Environment Format:**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py skill -n "my-new-skill" -d "Helps with a specific task." -e opencode
    ```

### 2. Creating an Agent
*   **OpenCode Agent (Markdown file in `.opencode/agents/`):**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py agent -n "my-agent" -d "Specialist for database tasks." -e opencode
    ```
*   **Antigravity Python SDK Agent:**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py agent -n "my-agent" -d "Specialist for database tasks." -e antigravity
    ```

### 3. Creating a Tool
*   **Custom Python Tool:**
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py tool -n "my-tool" -d "Calculates tax percentages." -t python
    ```
*   **MCP Server Configuration:**
    This appends/registers the server configuration directly inside `.agents/mcp_config.json` or `~/.gemini/config/mcp_config.json`.
    ```bash
    python .agents/skills/skill-factory/scripts/factory.py tool -n "my-mcp" -d "Integrates database tool" -t mcp -c "node" -a "path/to/server.js"
    ```

## Guidelines & Best Practices

1.  **Keep descriptions clear and in third person.** This helps other agents recognize when a skill or agent is relevant to a user task.
2.  **Use Scripts as Black Boxes.** Encourage execution of script files with `--help` to check parameters rather than reading raw code.
3.  **Modular design.** Create small, focused skills and agents that do one task well instead of combining multiple unrelated roles.
