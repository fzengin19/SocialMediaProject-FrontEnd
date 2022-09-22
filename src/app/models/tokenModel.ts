import { User } from "./user";

export interface TokenModel{
    user:User;
    token:string;
    expiration:string;
}