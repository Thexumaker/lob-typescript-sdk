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
 * 
 * @export
 * @interface SingleLineAddress
 */
export class SingleLineAddress {
    constructor(input?: any) {
        if (input) {
            if (typeof input.address !== "undefined") {
                this.address = input.address;
            }
        }
    }

    /**
     * The entire address in one string (e.g., \"210 King Street 94107\"). _Does not support a recipient and will error when other payload parameters are provided._ 
     * @type {string}
     * @memberof SingleLineAddress
     */
    'address'?: string;
    
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

