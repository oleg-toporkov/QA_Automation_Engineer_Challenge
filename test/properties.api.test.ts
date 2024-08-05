import locationData from "./testData/propertyLocation.json";
import {PropertiesService} from "../api/service/propertiesService";
import {PropertyResponseDto} from "../api/dto/property/propertyResponseDto";

describe('Properties service', () => {
    const successfulRequestMessage = 'Successfully fetched property.'

    it('should return property data by id', async () => {
        const propertyId = 129;

        const propertyResponse = await PropertiesService.getProperty(propertyId)
        // status code can be also moved to the service level, if considering no negative tests
        expect(propertyResponse.status).toBe(200)

        const propertyData = propertyResponse.body as PropertyResponseDto

        // checking only needed fields
        expect(propertyData.message).toBe(successfulRequestMessage)
        expect(propertyData.success).toBeTruthy()
        expect(propertyData.payload).toBeDefined()
        expect(propertyData.payload.id).toBe(propertyId)
        expect(propertyData.payload.name).toBe('aachen vereinsstraße')

        //or whole JSON piece if we know exact data which all time is the same
        expect(propertyData.payload.location).toStrictEqual(locationData)
    });

    it('should handle non-existing property', async () => {
        const propertyId = 1;

        const propertyResponse = await PropertiesService.getProperty(propertyId)
        expect(propertyResponse.status).toBe(404)

        // using here non-typed response body
        expect(propertyResponse.body.success).toBeFalsy()
        expect(propertyResponse.body.message).toBe('No property with such internal or external id.')
    })
});