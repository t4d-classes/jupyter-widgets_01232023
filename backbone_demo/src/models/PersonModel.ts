import Backbone from "backbone";

interface IPersonModel {
  first_name: string;
  last_name: string;
  favorite_foods?: string[];
}

export class PersonModel extends Backbone.Model<IPersonModel> {

  defaults() {
    // these properties will be sync with python object attributes,
    // the python naming style will be used
    return {
      ...super.defaults(),
      first_name: '',
      last_name: '',
      favorite_foods: PersonModel.favorite_foods,
    };
  }

  static favorite_foods = [] as string[];
}