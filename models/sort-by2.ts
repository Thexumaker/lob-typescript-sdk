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
 * @interface SortBy2
 */
export class SortBy2 {
    constructor(input?: any) {
        if (input) {
            if (input.date_created) {
                this.date_created = input.date_created;
            }
            if (input.send_date) {
                this.send_date = input.send_date;
            }
        }
    }

    /**
     * 
     * @type {string}
     * @memberof SortBy2
     */
    'date_created'?: SortBy2DateCreatedEnum;
    
    /**
     * 
     * @type {string}
     * @memberof SortBy2
     */
    'send_date'?: SortBy2SendDateEnum;
    
}

/**
    * @export
    * @enum {string}
    */
export enum SortBy2DateCreatedEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
    * @export
    * @enum {string}
    */
export enum SortBy2SendDateEnum {
    Asc = 'asc',
    Desc = 'desc'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

