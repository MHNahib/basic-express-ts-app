import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import response from "../utils/response";

const homecontroller = (req: Request, res: Response) => {
  response(res, StatusCodes.ACCEPTED, true, { say: "hello world" }, "Accepted");
};

export default homecontroller;
