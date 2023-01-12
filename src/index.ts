import express from "express";
import statusRoute from "./routes/status.route";
import usersRouter from "./routes/users.route";

const app = express();

//configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuração de rotas
app.use(usersRouter);
app.use(statusRoute);

//subindo no servido atraves da porta 3000
//inicialização do serviço
app.listen(3000, () => {
  console.log("Aplicação executando na porta 3000");
});
