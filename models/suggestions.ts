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
 * @interface Suggestions
 */
export class Suggestions {
    /**
     * The primary delivery line (usually the street address) of the address. Combination of the following applicable `components` (primary number & secondary information may be missing or inaccurate): * `primary_number` * `street_predirection` * `street_name` * `street_suffix` * `street_postdirection` * `secondary_designator` * `secondary_number` * `pmb_designator` * `pmb_number` 
     * @type {string}
     * @memberof Suggestions
     */
    'primary_line'?: string;
    /**
     * 
     * @type {string}
     * @memberof Suggestions
     */
    'city'?: string;
    /**
     * The [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) two letter code for the state. 
     * @type {string}
     * @memberof Suggestions
     */
    'state'?: string;
    /**
     * Required if `city` and `state` are not passed in. If included, must be formatted as a US ZIP or ZIP+4 (e.g. `94107`, `941072282`, `94107-2282`).
     * @type {string}
     * @memberof Suggestions
     */
    private '_zip_code'?: string;
    public get zip_code() { return (this._zip_code || undefined) as string; }
    public set zip_code(newValue: string) {
        if(newValue && !/^\d{5}((-)?\d{4})?$/.test(newValue)) {
            throw new Error("Invalid zip_code provided");
        }
        this._zip_code = newValue;
    }
    /**
     * Value is resource type.
     * @type {string}
     * @memberof Suggestions
     */
    'object'?: SuggestionsObjectEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SuggestionsObjectEnum {
    UsAutocompletion = 'us_autocompletion'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

