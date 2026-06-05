import asyncio
from google.antigravity import Agent, LocalAgentConfig

async def run_agent():
    # Configure the agent with system instructions and settings
    config = LocalAgentConfig(
        system_instructions="You are a specialist agent named {name}.\n\nDescription: {description}",
        temperature=0.2
    )
    
    async with Agent(config) as agent:
        # Send a chat message to the agent
        response = await agent.chat("Inicia las tareas asignadas.")
        print(await response.text())

if __name__ == "__main__":
    asyncio.run(run_agent())
