// Copyright (c) Eric
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import _ from 'underscore';

import { MODULE_NAME, MODULE_VERSION } from '../version';

// Import the CSS
import '../../css/stock_lookup_widget.css';

export class StockLookupModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: StockLookupModel.model_name,
      _model_module: StockLookupModel.model_module,
      _model_module_version: StockLookupModel.model_module_version,
      _view_name: StockLookupModel.view_name,
      _view_module: StockLookupModel.view_module,
      _view_module_version: StockLookupModel.view_module_version,

      input_label: 'Stock Symbol',
      button_text: 'Get Price',
      stock_symbol: '',
      stock_price: 0,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'StockLookupModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'StockLookupView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

export class StockLookupView extends DOMWidgetView {

  template = _.template(`
    <form>
      <label>
        <%= input_label %>
        <input type="text" name="stock_symbol" value="<%= stock_symbol %>">
      </label>
      <button type="button" class="get-price-button"><%= button_text %></button>
    </form>
    <div class="results">
      <span class="results_symbol"><%= stock_symbol %></span>
      <span class="results_price"><%= stock_price %></span>
    </div>
  `);

  render() {
    this.el.classList.add('stock-lookup-widget');

    this.$el.html(this.template(this.model.attributes));

    // handle the button click
    
    // combinator selector, combines two selectors, and selects an
    // element based upon the relationship between the selected elements
    // 
    // select any element with a class name of get-price-button that
    // is a descendant of any element with the class name of stock-lookup-widget
    this.$el.find('.stock-lookup-widget .get-price-button').on('click', () => {
      console.log('I was clicked!');
    });

    // retrieve the value from the input field
    // show/hide the results
    // populate the results

    return this;
  }

}
