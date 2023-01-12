import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

//Operações que será realizadas
// get /user
// get /user/:uuid
// post /user
// put /user/:uuid
// delete /user/:uuid

const usersRouter = Router();

usersRouter.get("/users", (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: "Mylena" }];
  res.status(StatusCodes.OK).send({ users });
});
//pegar o id da requisição
usersRouter.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;

    res.status(StatusCodes.OK).send({ uuid });
  }
);

usersRouter.post("/user", (req: Request, res: Response, next: NextFunction) => {
  const newusers = req.body;
  console.log(req.body);
  res.status(StatusCodes.CREATED).send(newusers);
});

usersRouter.put(
  "/user/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);

usersRouter.delete(
  "/user/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.sendStatus(StatusCodes.OK);
  }
);

export default usersRouter;
