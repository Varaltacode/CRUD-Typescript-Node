import { Request, Response } from "express";
import { User } from "../db/models/User";

class UserController{
  async showUsers(req: Request, res: Response){
    const users = await User.findAll()
    return res.status(200).json(users)
  }

  async showOneUser(req: Request, res:Response){
    const {id} = req.params
    const user = await User.findOne({where: {id: id}})
    return res.status(200).json(user)
  }

  async createUser(req: Request, res: Response){
    const {email, name, age} = req.body
    const user = await User.create({email, name, age})
    return res.status(201).json(user)
  }

  async updateUser(req: Request, res: Response){
    const {id} = req.params
    const {email, name, age} = req.body
    const newUser = {email, name, age} 
    await User.update(newUser, {where: {id}})
    return res.status(200).send({msg: 'atualizou!'})
  }

  async deleteUser(req: Request, res: Response){
    const {id} = req.params
    await User.destroy({where: {id: id}})
    return res.status(200).json({msg: 'deu certo'})
  }
}
export default new UserController()