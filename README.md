# Docs Chatbot Example

A Next.js application that demonstrates a documentation chatbot using Mastra and CopilotKit. This project provides a customizable AI assistant that can help users navigate documentation and answer questions.

## Features

- AI-powered documentation assistant
- Interactive chat widget
- Integration with Mastra agent
- Modern UI with Tailwind CSS
- Next.js App Router

## Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

## Environment Setup

Create a `.env.local` file in the root directory with the following variables:

The `MASTRA_AGENT_URL` is the deployment URL of the Mastra agent.

```bash
MASTRA_AGENT_URL=your_mastra_agent_url
```

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/app`: Next.js App Router pages and layouts
- `src/components`: React components including the chat widget
- `src/lib`: Core functionality including the Mastra agent
- `src/app/api`: API routes including CopilotKit endpoints

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Mastra Documentation](https://docs.mastra.ai)
- [CopilotKit Documentation](https://docs.copilotkit.ai)

## Deployment

Deploy the project using [Vercel](https://vercel.com) for the best experience:

```bash
vercel
```

Or use the [Vercel Platform](https://vercel.com/new) from their website.
