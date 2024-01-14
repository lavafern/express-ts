import { z } from 'zod';
import registerSchema from '../schemas/auth.schema';

export type tregister = z.infer<typeof registerSchema>