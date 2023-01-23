import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import { PersonModel } from '../models/PersonModel';

export class PersonView extends Backbone.View<PersonModel> {

  render() {

    console.log(this.el);
    console.log(this.$el);

    return this;
  }

}