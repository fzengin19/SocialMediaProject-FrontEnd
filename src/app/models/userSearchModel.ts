import { Byte } from "@angular/compiler/src/util";

export interface UserSearchModel{
         userId :number;
         profilePicturesPath:string;
         biography:string;  
         fullName:string;
         status:boolean
         joinDate:Date;
         lastSeen:Date;
}