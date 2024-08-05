import {attachment} from "allure-js-commons";
import {config} from "../../config/config";
import {PropertiesEndpoints} from "../constants/propertiesEndpoints";
import {agent, Response} from "supertest";


export class PropertiesService {
    private static readonly HOST = config.api.properties.host;

    static async getProperty(propertyId: number): Promise<Response> {
        return await agent(this.HOST)
            .get(`${PropertiesEndpoints.GET_PROPERTY_DATA}/${propertyId}`)
            // extract reporting hook somewhere
            .on('response', (response) => attachment('GET Property Response',
                JSON.stringify(response, null, 2), 'application/json'))
            .on('response', (response) => attachment('GET Property Response Body',
                JSON.stringify(response.body, null, 2), 'application/json'))
    }
}