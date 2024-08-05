import {PayloadDto} from "./payloadDto";

export interface PropertyResponseDto {
    success: boolean
    message: string
    payload: PayloadDto
}