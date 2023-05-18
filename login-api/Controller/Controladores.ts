import { Request, Response } from 'express';
import { UserModel, IUser } from '../Model/modeloCadastro';
import { generateHash, comparePassword } from '../utils/utils';

export const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const todos: IUser[] = await UserModel.find();
    res.json(todos);
  } catch (error: any) {
    res.status(500).send(`Algo deu errado! \n ${error.message}`);
  }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      login: req.body.login,
      password: generateHash(req.body.password)
    });

    await user.save();
    res.status(201).send('Cadastro com Sucesso');
  } catch (error: any) {
    res.status(500).send(`Algo deu errado! \n ${error.message}`);
  }
};

export const postLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser | null = await UserModel.findOne({ login: req.body.login }).lean();

    if (!user) {
      res.status(404).send('Não foi possível encontrar o usuário');
      return
    }

    const isValidPassword: boolean = comparePassword(req.body.password, user.password);

    if (!isValidPassword) {
      res.status(401).send('Senha incorreta');
      return
    }

    res.send('Você logou com sucesso!');
  } catch (error: any) {
    res.status(500).send(`Algo deu mt errado carinha, \n ${error.message}`);
  }
};

export const deleteLogin = async (req: Request, res: Response): Promise<void> => {
  try {
    await UserModel.deleteOne({ _id: req.params.CadastroID });
    res.status(204).send('Cadastro Deletado com sucesso');
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
