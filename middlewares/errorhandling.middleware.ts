import { Request,Response,NextFunction } from 'express';
import { ZodError } from 'zod';
import { CustomError } from '../errors/customError';

export function otherError(err : Error ,req : Request,res : Response, _next : NextFunction) : Response { // eslint-disable-line @typescript-eslint/no-unused-vars
    console.log(err);

    if (err instanceof CustomError) {
        return res
            .status(err.statusCode)
            .json({
                success : false,
                message : err.message,
                data : null
            });
    }
    
    if (err instanceof ZodError) {
        return res
            .status(400)
            .json({
                success : false,
                message : err.issues,
                data : null
            });
    }

    return res
        .status(500)
        .json({
            success : false,
            message : err.message,
            data : null
        });
}

export function notFoundError(req : Request,res : Response, next : NextFunction) : Response { // eslint-disable-line @typescript-eslint/no-unused-vars

    return res
        .status(404)
        .json({
            success : false,
            message : 'not found',
            data : null
        });
}