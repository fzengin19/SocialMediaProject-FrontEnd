import { Byte } from "@angular/compiler/src/util";
import { ResponseModel } from "./responseModel";

export interface User extends ResponseModel{
         userId :number;
         firstName:string;
         lastName:string;
         phoneNumber:string;
         email:string;
         passwordSalt:Byte[];
         passwordHash:Byte[];
         status:boolean
         joinDate:Date;
         updateDate:Date;
         lastSeen:Date;
         deleteDate:Date;
}