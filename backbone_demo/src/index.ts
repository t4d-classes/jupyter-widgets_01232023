import Backbone from "backbone";

interface IPerson {
  first_name: string;
  last_name: string
}

class Person extends Backbone.Model<IPerson> {
  defaults() {
    // these properties will be sync with python object attributes,
    // the python naming style will be used
    return {
      first_name: '',
      last_name: '',
    };
  }
}

const p = new Person({ first_name: "Bob", last_name: "Smith" })

console.log(p.get("first_name"));
