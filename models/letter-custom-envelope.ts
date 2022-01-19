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
 * A nested custom envelope object containing more information about the custom envelope used or `null` if a custom envelope was not used.  Accepts an envelope ID for any customized envelope with available inventory. If no inventory is available for the specified ID, the letter will not be sent, and an error will be returned. If the letter has more than 6 sheets, it will be sent in a blank flat envelope. Custom envelopes may be created and ordered from the dashboard. This feature is exclusive to certain customers. Upgrade to the appropriate [Print & Mail Edition](https://dashboard.lob.com/#/settings/editions) to gain access.
 * @export
 * @interface LetterCustomEnvelope
 */
export class LetterCustomEnvelope {
    constructor(input?: any) {
        if (input) {
            if (input.id) {
                this.id = input.id;
            }
            if (input.url) {
                this.url = input.url;
            }
            if (input.object) {
                this.object = input.object;
            }
        }
    }

    /**
     * The unique identifier of the custom envelope used.
     * @type {string}
     * @memberof LetterCustomEnvelope
     */
    'id'?: string;
    
    /**
     * The url of the envelope asset used.
     * @type {string}
     * @memberof LetterCustomEnvelope
     */
    'url'?: string;
    
    /**
     * 
     * @type {string}
     * @memberof LetterCustomEnvelope
     */
    'object'?: LetterCustomEnvelopeObjectEnum;
    
}

/**
    * @export
    * @enum {string}
    */
export enum LetterCustomEnvelopeObjectEnum {
    Envelope = 'envelope'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

