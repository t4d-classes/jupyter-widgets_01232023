import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import { PersonModel } from '../models/PersonModel';

export class PersonView extends Backbone.View<PersonModel> {

  template = _.template(`
    <style>
      label { display: block; }
    </style>
    <form>
      <label>
        First Name:
        <input type="text" name="firstName" value="<%= first_name %>">
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value="<%= last_name %>">
      </label>
      <!--<button type="button">Save Person</button>-->
    </form>
  `)

  render() {

    this.$el.html(this.template(this.model.attributes));

    this.$el.find("input[name=firstName]").on("blur", (evt) => {
      this.model.set('first_name', (evt.currentTarget as HTMLInputElement).value);
    });

    this.$el.find("input[name=lastName]").on("blur", (evt) => {
      this.model.set('last_name', (evt.currentTarget as HTMLInputElement).value);
    });

    // this.$el.find("button").on("click", () => {

    //   const firstName = String(this.$el.find("input[name=firstName]").val());
    //   const lastName = String(this.$el.find("input[name=lastName]").val());

    //   this.model.set('first_name', firstName);
    //   this.model.set('last_name', lastName);

    // });

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