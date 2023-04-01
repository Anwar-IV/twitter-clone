import { NextApiRequest, NextApiResponse } from "next";

type Data = {};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(405).end();
  try {
    const { firstName, lastName, username, password, confirmPassword } =
      req.body;
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
