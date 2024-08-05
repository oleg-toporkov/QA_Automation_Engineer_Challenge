import {SpaceDto} from "./spaceDto";
import {AmenityDto} from "./amenityDto";
import {ImageDto} from "./imageDto";

export interface UnitGroupDto {
    id: number
    title: string
    description: string
    custom_title: string
    external_id: string
    name: string
    max_guests: number
    rental_type: string
    bedroom_count: number
    lowest_price_per_night: any
    lowest_price_per_month: any
    spaces: SpaceDto[]
    amenities: AmenityDto[]
    images: ImageDto[]
}
