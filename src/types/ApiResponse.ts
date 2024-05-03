import { Message } from "@/model/User";

export interface ApiResponse {
    successful: boolean;
    message: string;
    isAcceptingMessages?: boolean;
    messages?: Array<Message>;
}