import { ResponseModel } from "./responseModel";

export interface UserContact extends ResponseModel{
    contactId:number;
    userId:number;
    userContactId:number;
    contactName:string;
}