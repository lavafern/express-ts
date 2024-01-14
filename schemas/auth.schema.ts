import { z } from 'zod';

const registerSchema = z
    .object({
        email : z.string({
            required_error: 'Email is required',
            invalid_type_error: 'Email must be a string',
        }),
        name : z.string({
            required_error: 'Name is required',
            invalid_type_error: 'Name must be a string',
        })
            .min(1,{message: 'Name cannot be empty'}),
        password : z.string({
            required_error: 'Password is required',
            invalid_type_error: 'Password must be a string',
        })
            .max(14,{ message: 'Must be 14 or less characters long' })
            .min(8,{ message: 'Must be 8 or more characters long' })
            .trim()
    })
    .strict()
    .required();

export default registerSchema;