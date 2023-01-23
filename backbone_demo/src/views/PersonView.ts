import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import { PersonModel } from '../models/PersonModel';

export class PersonView extends Backbone.View<PersonModel> {

  template = _.template(`
    <form>
      <label>
        First Name: <input type="text" value="<%= first_name %>">
      </label>
      <label>
        Last Name: <input type="text" value="<%= last_name %>">
      </label>
    </form>
  `)

  render() {

    this.$el.html(this.template(this.model.attributes));

    // using the built-in DOM API

    // const firstNameDiv = document.createElement('div');
    // firstNameDiv.append(
    //   document.createTextNode("First Name: "),
    //   document.createTextNode(this.model.get('first_name')),
    // );

    // const lastNameDiv = document.createElement('div');
    // lastNameDiv.append(
    //   document.createTextNode("Last Name: "),
    //   document.createTextNode(this.model.get('last_name')),
    // );

    // this.el.append(firstNameDiv, lastNameDiv);

    // jQuery approach

    // const firstNameDiv = $("<div>");
    // firstNameDiv.append("First Name: " + this.model.get("first_name"));

    // const lastNameDiv = $("<div>");
    // lastNameDiv.append("Last Name: " + this.model.get("last_name"));

    // this.$el.append(firstNameDiv, lastNameDiv);


    return this;
  }

}