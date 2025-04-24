import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

import { MastraDocsAgent } from "@/app/_lib/mastra-agent";
import { NextRequest } from "next/server";

const docsAgent = new MastraDocsAgent({
  agentId: "docsAgent",
});

const runtime = new CopilotRuntime({
  agents: {
    // @ts-expect-error - Lib types mismatch
    docsAgent,
  },
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter: new ExperimentalEmptyAdapter(),
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
