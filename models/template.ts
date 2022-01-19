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


import { TemplateVersion } from './template-version';

/**
 * 
 * @export
 * @interface Template
 */
export class Template {
    constructor(input?: any) {
        if (input) {
            if (typeof input.description !== "undefined") {
                this.description = input.description;
            }
            if (typeof input.id !== "undefined") {
                this.id = input.id;
            }
            if (typeof input.versions !== "undefined") {
                this.versions = input.versions;
            }
            if (typeof input.published_version !== "undefined") {
                this.published_version = input.published_version;
            }
            if (typeof input.object !== "undefined") {
                this.object = input.object;
            }
            if (typeof input.metadata !== "undefined") {
                this.metadata = input.metadata;
            }
            if (typeof input.date_created !== "undefined") {
                this.date_created = input.date_created;
            }
            if (typeof input.date_modified !== "undefined") {
                this.date_modified = input.date_modified;
            }
            if (typeof input.deleted !== "undefined") {
                this.deleted = input.deleted;
            }
        }
    }

    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof Template
     */
    'description'?: string | null;
    
    /**
     * Unique identifier prefixed with `tmpl_`. ID of a saved [HTML template](#section/HTML-Templates).
     * @type {string}
     * @memberof Template
     */
    private '_id'?: string;
    public get id() { return (this._id || undefined) as string; }
    public set id(newValue: string) {
        if(newValue && !/^tmpl_[a-zA-Z0-9]+$/.test(newValue)) {
            throw new Error("Invalid id provided");
        }
        this._id = newValue;
    }
    
    /**
     * An array of all non-deleted [version objects](#tag/Template-Versions) associated with the template.
     * @type {Array<TemplateVersion>}
     * @memberof Template
     */
    'versions'?: Array<TemplateVersion>;
    
    /**
     * 
     * @type {TemplateVersion}
     * @memberof Template
     */
    'published_version'?: TemplateVersion;
    
    /**
     * Value is resource type.
     * @type {string}
     * @memberof Template
     */
    'object'?: TemplateObjectEnum;
    
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof Template
     */
    'metadata'?: { [key: string]: string; };
    
    /**
     * A timestamp in ISO 8601 format of the date the resource was created.
     * @type {string}
     * @memberof Template
     */
    'date_created'?: string;
    
    /**
     * A timestamp in ISO 8601 format of the date the resource was last modified.
     * @type {string}
     * @memberof Template
     */
    'date_modified'?: string;
    
    /**
     * Only returned if the resource has been successfully deleted.
     * @type {boolean}
     * @memberof Template
     */
    'deleted'?: boolean;
    
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateObjectEnum {
    Template = 'template'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

