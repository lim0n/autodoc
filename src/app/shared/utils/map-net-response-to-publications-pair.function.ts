import { IPublication, IPublicationsResponse, PublicationsPair } from "@shared/interfaces";

export function mapNetResponseToPublicationsPair(response: IPublicationsResponse, offsetAndCount: string): PublicationsPair {
    return [
        offsetAndCount as string,
        response
    ] as PublicationsPair;
}