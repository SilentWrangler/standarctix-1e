import Standarctix1EDataModel from "./base-model.mjs";

export default class Standarctix1EItemBase extends Standarctix1EDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = {};

    schema.description = new fields.StringField({ required: true, blank: true });

    return schema;
  }

}