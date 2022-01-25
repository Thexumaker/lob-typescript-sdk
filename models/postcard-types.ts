/* tslint:disable */
/* eslint-disable */
/**
 * Lob
 * The Lob API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and uses HTTP response codes to indicate any API errors. <p> Looking for our [previous documentation](https://lob.github.io/legacy-docs/)? 
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: lob-openapi@lob.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Unique identifier referring to status of postcard
 * @export
 * @enum {string}
 */

export enum PostcardTypes {
    Created = 'postcard.created',
    RenderedPdf = 'postcard.rendered_pdf',
    RenderedThumbnails = 'postcard.rendered_thumbnails',
    Deleted = 'postcard.deleted',
    Mailed = 'postcard.mailed',
    InTransit = 'postcard.in_transit',
    InLocalArea = 'postcard.in_local_area',
    ProcessedForDelivery = 'postcard.processed_for_delivery',
    ReRouted = 'postcard.re-routed',
    ReturnedToSender = 'postcard.returned_to_sender'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

