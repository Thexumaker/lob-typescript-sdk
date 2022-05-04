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

import * as Models from "./index";

import { Template } from "./template";

/**
 *
 * @export
 * @class TemplateList
 */
export class TemplateList {
  constructor(input?: any) {
    if (typeof input?.data !== "undefined") {
      this.data = input.data;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
    if (typeof input?.next_url !== "undefined") {
      this.next_url = input.next_url;
    }
    if (typeof input?.previous_url !== "undefined") {
      this.previous_url = input.previous_url;
    }
    if (typeof input?.count !== "undefined") {
      this.count = input.count;
    }
    if (typeof input?.total_count !== "undefined") {
      this.total_count = input.total_count;
    }
  }

  /**
   * list of templates
   * @type {Array<Template>}
   * @memberof TemplateList
   */
  "data"?: Array<Template>;

  /**
   * Value is type of resource.
   * @type {string}
   * @memberof TemplateList
   */
  "object"?: string;

  /**
   * url of next page of items in list.
   * @type {string}
   * @memberof TemplateList
   */
  "next_url"?: string | null;

  public get nextPageToken(): string | undefined {
    if (!this.next_url) {
      return undefined;
    }
    return this.next_url
      .split("?")[1]
      .split("&")
      .find((raw) => raw.includes("after="))
      ?.split("=")[1];
  }
  /**
   * url of previous page of items in list.
   * @type {string}
   * @memberof TemplateList
   */
  "previous_url"?: string | null;

  public get previousPageToken(): string | undefined {
    if (!this.previous_url) {
      return undefined;
    }
    return this.previous_url
      .split("?")[1]
      .split("&")
      .find((raw) => raw.includes("before="))
      ?.split("=")[1];
  }
  /**
   * number of resources in a set
   * @type {number}
   * @memberof TemplateList
   */
  "count"?: number;

  /**
   * indicates the total number of records. Provided when the request specifies an \"include\" query parameter
   * @type {number}
   * @memberof TemplateList
   */
  "total_count"?: number;

  public toJSON() {
    let out = {};
    for (const [key, value] of Object.entries(this)) {
      out = Object.assign({}, out, {
        [key[0] === "_" ? key.substr(1, key.length) : key]: value,
      });
    }
    return out;
  }
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
