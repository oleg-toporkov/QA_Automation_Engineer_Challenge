import {ImageDto} from "./imageDto";
import {UnitGroupDto} from "./unitGroupDto";
import {LocationDto} from "./locationDto";

export interface PayloadDto {
    id: number
    external_id: string
    review_widget_id: string
    name: string
    city: string
    city_id: number
    street: string
    location: LocationDto
    timezone: string
    distance: number
    description: string
    additional_services: string
    parking: string
    things_to_know: string
    house_rules: string
    images: ImageDto[]
    lowest_price_per_night: any
    lowest_price_per_month: any
    default_check_in_time: string
    default_check_out_time: string
    unit_groups: UnitGroupDto[]
}
