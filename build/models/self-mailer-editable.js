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
exports.SelfMailerEditable = void 0;
/**
 *
 * @export
 * @class SelfMailerEditable
 */
var SelfMailerEditable = /** @class */ (function () {
  function SelfMailerEditable(input) {
    if (
      typeof (input === null || input === void 0 ? void 0 : input.to) !==
      "undefined"
    ) {
      this.to = input.to;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.from) !==
      "undefined"
    ) {
      this.from = input.from;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.size) !==
      "undefined"
    ) {
      this.size = input.size;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.description) !== "undefined"
    ) {
      this.description = input.description;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.metadata) !==
      "undefined"
    ) {
      this.metadata = input.metadata;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.mail_type) !==
      "undefined"
    ) {
      this.mail_type = input.mail_type;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.merge_variables) !== "undefined"
    ) {
      this.merge_variables = input.merge_variables;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.send_date) !==
      "undefined"
    ) {
      this.send_date = input.send_date;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.inside) !==
      "undefined"
    ) {
      this.inside = input.inside;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.outside) !==
      "undefined"
    ) {
      this.outside = input.outside;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.billing_group_id) !== "undefined"
    ) {
      this.billing_group_id = input.billing_group_id;
    }
  }
  return SelfMailerEditable;
})();
exports.SelfMailerEditable = SelfMailerEditable;
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
