import type { RequestBody } from "../../utils/interfaces";
import { analyzeAgent } from "../../services/agent-service";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const { modelSettings, goal, task } = (await request.body) as RequestBody;
    if (task === undefined) {
      return;
    }

    const res = await analyzeAgent(modelSettings, goal, task);
    console.log(res);

    return response.status(200).json({ response: res });
  } catch (e) {
    console.log(e);
  }

  return response.status(400).json({ error: "fail" });
};

export default handler;
