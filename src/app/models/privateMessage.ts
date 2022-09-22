export interface PrivateMessage {
    messageId:number;
    senderId:number;
    senderName:string;
    chatRoomId:number;
    recipientId:number;
    sendDate:Date;
    deleteDate:Date;
    forwardDate:Date;
    forwarded:boolean;
    message:string;
}