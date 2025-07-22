Autonomous AI Prompt Engineering & Project Outliner

Goal:
Build a fully automated system that ingests a raw, possibly unstructured project idea from any source, corrects and refines the intent, and autonomously generates a comprehensive set of step-by-step, context-rich prompts to guide an LLM (or another agent) in building a software project from start to finish—no manual oversight or decision points required.
System Pipeline
1. Idea Ingestion

    Accepts raw input: misspelled, vague, or incomplete project ideas (typed, pasted, or even speech-to-text).

    Example:

        “i want site for order food delive and make pay online”

2. Intent Clarification & Correction (LLM #1)

    AI auto-corrects, rewrites, and clarifies the input.

    Asks only necessary follow-up questions if absolutely required for disambiguation—otherwise proceeds.

    Outputs a precise, unambiguous project goal.

    Example:

        “Build a web application for online food ordering and payment processing.”

3. Project Outline Generation (LLM #2)

    AI generates a high-level outline of all major features, modules, and project phases required for the goal.

    Output is structured and ready for breakdown.

    Example outline:

        User Registration & Login

        Restaurant Menu Browsing

        Order Cart Management

        Payment Integration

        Order Tracking

4. Stepwise Prompt Breakdown

    For each item in the outline:

        AI recursively decomposes the task into smaller, concrete steps/prompts (as many levels deep as necessary).

        Each prompt is self-contained: it has enough detail that any competent LLM, given just that prompt, could execute it with no additional context or project history.

    Example prompt:

        “Write a backend REST API in Python (FastAPI) for adding, updating, and deleting menu items for a restaurant food ordering web app. Include request/response schema and data validation.”

5. Project Memory & Autonomy

    AI keeps a persistent, context-aware “memory” of the project outline, all sub-steps, and every generated prompt.

    This memory allows the AI to:

        Track progress,

        Regenerate any prompt on demand,

        Re-enter at any point and continue breakdown,

        Allow parallel, modular, or iterative development—all without relying on a specific user or human in the loop.

6. Output

    Final output: A complete, ordered list of actionable prompts, ready for feeding to any LLM to actually build the code, write documentation, generate configs, etc.

    Optionally, can auto-feed these prompts into downstream agents or codegen systems.

Key Points (AI-First, No Human Gating)

    No “user must review/approve” steps.

    No manual selection, gating, or rewording.

    All logic, breakdown, and refinement is handled by one or more cooperating LLMs.

    Safety and refusals are handled by the LLM API’s built-in guardrails.

    System can be used by anyone, regardless of technical background.

    Can be run locally or via cloud; can use any LLM backend (GPT-4, GPT4All, etc).

In short:
This is an autonomous prompt-generation and project-outlining agent, designed to bridge raw human intent to precise, actionable AI instructions for any kind of software project—without requiring a human to “babysit” the process at any point.

