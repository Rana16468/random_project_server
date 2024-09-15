import donenv from 'dotenv';
import path from 'path';
donenv.config({ path: path.join(process.cwd(), '.env') });
export default {
  NODE_ENV:process.env.NODE_ENV,
  port: process.env.PORT,
  
};