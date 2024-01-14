import { Request,Response,NextFunction } from 'express';
import registerSchema from '../schemas/auth.schema';
import { tregister } from '../types/auth';
import { prisma } from '../libs/prismaClient';
import { UserAlreadyExistError } from '../errors/customError';


export async function register(req : Request,res : Response,next : NextFunction) : Promise<Response|void> {
    try {
        const registerData : tregister = await registerSchema.parseAsync(req.body);

        const checkUser = await prisma.user.findUnique({
            where : {
                email : registerData.email
            }
        });

        if (checkUser) throw new UserAlreadyExistError();
        
        const newUser = await prisma.user.create({
            data : registerData,
            select : {
                name : true,
                email : true
            }
        });

        return res.json({
            success : true,
            message : 'Succesfully create new User',
            data : newUser
        });
    } catch (err) {
        next(err);
    }
}