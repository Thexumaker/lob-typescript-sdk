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

/**
 *
 * @export
 * @class CardUpdatable
 */
export class CardUpdatable {
  constructor(input?: any) {
    if (typeof input?.description !== "undefined") {
      this.description = input.description;
    }
    if (typeof input?.auto_reorder !== "undefined") {
      this.auto_reorder = input.auto_reorder;
    }
    if (typeof input?.reorder_quantity !== "undefined") {
      this.reorder_quantity = input.reorder_quantity;
    }
  }

  /**
   * Description of the card.
   * @type {string}
   * @memberof CardUpdatable
   */
  "description"?: string | null;

  /**
   * Allows for auto reordering
   * @type {boolean}
   * @memberof CardUpdatable
   */
  "auto_reorder"?: boolean;

  /**
   * The quantity of items to be reordered (only required when auto_reorder is true).
   * @type {number}
   * @memberof CardUpdatable
   */
  "reorder_quantity"?: number;

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
