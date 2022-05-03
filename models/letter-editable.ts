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

import { LetterCustomEnvelope } from "./letter-custom-envelope";
import { MailType } from "./mail-type";

/**
 *
 * @export
 * @class LetterEditable
 */
export class LetterEditable {
  constructor(input?: any) {
    if (typeof input?.mail_type !== "undefined") {
      this.mail_type = input.mail_type;
    }
    if (typeof input?.color !== "undefined") {
      this.color = input.color;
    }
    if (typeof input?.double_sided !== "undefined") {
      this.double_sided = input.double_sided;
    }
    if (typeof input?.address_placement !== "undefined") {
      this.address_placement = input.address_placement;
    }
    if (typeof input?.return_envelope !== "undefined") {
      this.return_envelope = input.return_envelope;
    }
    if (typeof input?.perforated_page !== "undefined") {
      this.perforated_page = input.perforated_page;
    }
    if (typeof input?.custom_envelope !== "undefined") {
      this.custom_envelope = input.custom_envelope;
    }
    if (typeof input?.to !== "undefined") {
      this.to = input.to;
    }
    if (typeof input?.from !== "undefined") {
      this.from = input.from;
    }
    if (typeof input?.file !== "undefined") {
      this.file = input.file;
    }
    if (typeof input?.extra_service !== "undefined") {
      this.extra_service = input.extra_service;
    }
    if (typeof input?.cards !== "undefined") {
      this.cards = input.cards;
    }
    if (typeof input?.billing_group_id !== "undefined") {
      this.billing_group_id = input.billing_group_id;
    }
  }

  /**
   *
   * @type {MailType}
   * @memberof LetterEditable
   */
  "mail_type"?: MailType;

  /**
   * Set this key to `true` if you would like to print in color. Set to `false` if you would like to print in black and white.
   * @type {boolean}
   * @memberof LetterEditable
   */
  "color"?: boolean;

  /**
   * Set this attribute to `true` for double sided printing, or `false` for for single sided printing. Defaults to `true`.
   * @type {boolean}
   * @memberof LetterEditable
   */
  "double_sided"?: boolean;

  /**
   * Specifies the location of the address information that will show through the double-window envelope. To see how this will impact your letter design, view our letter template.   * `top_first_page` - (default) print address information at the top of your provided first page   * `insert_blank_page` - insert a blank address page at the beginning of your file (you will be charged for the extra page)   * `bottom_first_page_center` - **(deprecation planned within a few months)** print address information at the bottom center of your provided first page   * `bottom_first_page` - print address information at the bottom of your provided first page
   * @type {string}
   * @memberof LetterEditable
   */
  "address_placement"?: LetterEditableAddressPlacementEnum;

  /**
   * indicates if a return envelope is requested for the letter. The value corresponding to this field is by default a boolean. But if the account is signed up for custom return envelopes, the value is of type string and is `no_9_single_window` for a standard return envelope and a custom `return_envelope_id` for non-standard return envelopes.  To include a return envelope with your letter, set to `true` and specify the `perforated_page`. See [pricing](https://www.lob.com/pricing/print-mail#compare) for extra costs incurred.
   * @type {any}
   * @memberof LetterEditable
   */

  "return_envelope"?: string | boolean | null;

  /**
   * Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our [perforation guide](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf).
   * @type {number}
   * @memberof LetterEditable
   */
  "perforated_page"?: number | null;

  /**
   *
   * @type {LetterCustomEnvelope}
   * @memberof LetterEditable
   */
  "custom_envelope"?: LetterCustomEnvelope | null;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof LetterEditable
   */

  "to"?: string | Models.AddressEditable;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof LetterEditable
   */

  "from"?: string | Models.AddressEditable;

  /**
   * PDF file containing the letter\'s formatting.
   * @type {string}
   * @memberof LetterEditable
   */
  "file"?: string;

  /**
   * Add an extra service to your letter:   * `certified` - track and confirm delivery for domestic destinations. An extra sheet (1 PDF page single-sided or 2 PDF pages double-sided) is added to the beginning of your letter for address and barcode information. See here for templates: [#10 envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_template.pdf) and [flat envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_flat_template.pdf) (used for letters over 6 pages single-sided or 12 pages double-sided). You will not be charged for this extra sheet.   * `certified_return_receipt` - request an electronic copy of the recipient\'s signature to prove delivery of your certified letter   * `registered` - provides tracking and confirmation for international addresses
   * @type {string}
   * @memberof LetterEditable
   */
  "extra_service"?: LetterEditableExtraServiceEnum;

  /**
   * A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.
   * @type {Array<string>}
   * @memberof LetterEditable
   */
  "cards"?: Array<string> | null;

  /**
   * An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See [Billing Group API](https://lob.github.io/lob-openapi/#tag/Billing-Groups) for more information.
   * @type {string}
   * @memberof LetterEditable
   */
  "billing_group_id"?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum LetterEditableAddressPlacementEnum {
  TopFirstPage = "top_first_page",
  InsertBlankPage = "insert_blank_page",
  BottomFirstPageCenter = "bottom_first_page_center",
  BottomFirstPage = "bottom_first_page",
}
/**
 * @export
 * @enum {string}
 */
export enum LetterEditableExtraServiceEnum {
  Certified = "certified",
  CertifiedReturnReceipt = "certified_return_receipt",
  Registered = "registered",
  Null = "null",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
