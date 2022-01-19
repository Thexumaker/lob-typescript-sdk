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
 * @interface CardEditable
 */
export class CardEditable {
    constructor(input?: any) {
        if (input) {
            if (typeof input.front !== "undefined") {
                this.front = input.front;
            }
            if (typeof input.back !== "undefined") {
                this.back = input.back;
            }
            if (typeof input.size !== "undefined") {
                this.size = input.size;
            }
            if (typeof input.description !== "undefined") {
                this.description = input.description;
            }
        }
    }

    /**
     * A PDF template for the front of the card
     * @type {string}
     * @memberof CardEditable
     */
    'front'?: string;
    
    /**
     * A PDF template for the back of the card
     * @type {string}
     * @memberof CardEditable
     */
    'back'?: string;
    
    /**
     * The size of the card
     * @type {string}
     * @memberof CardEditable
     */
    'size'?: CardEditableSizeEnum;
    
    /**
     * Description of the card.
     * @type {string}
     * @memberof CardEditable
     */
    'description'?: string | null;
    
}

/**
    * @export
    * @enum {string}
    */
export enum CardEditableSizeEnum {
    _3375x2125 = '3.375x2.125',
    _2125x3375 = '2.125x3.375'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

