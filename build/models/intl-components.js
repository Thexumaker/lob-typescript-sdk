"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntlComponents = void 0;
/**
 * A nested object containing a breakdown of each component of an address.
 * @export
 * @class IntlComponents
 */
var IntlComponents = /** @class */ (function () {
  function IntlComponents(input) {
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.primary_number) !== "undefined"
    ) {
      this.primary_number = input.primary_number;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.street_name) !== "undefined"
    ) {
      this.street_name = input.street_name;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.city) !==
      "undefined"
    ) {
      this.city = input.city;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.state) !==
      "undefined"
    ) {
      this.state = input.state;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.postal_code) !== "undefined"
    ) {
      this.postal_code = input.postal_code;
    }
  }
  return IntlComponents;
})();
exports.IntlComponents = IntlComponents;
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
