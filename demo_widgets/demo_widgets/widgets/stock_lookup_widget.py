#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Eric.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget
from traitlets import Unicode, Float
from .._frontend import module_name, module_version


class StockLookupWidget(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('StockLookupModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('StockLookupView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    
    input_label = Unicode('Stock Symbol').tag(sync=True)
    button_text = Unicode('Get Price').tag(sync=True)
    stock_symbol = Unicode('').tag(sync=True)
    stock_price = Float(0).tag(sync=True)


    def __init__(self, **kwargs):
        super().__init__(**kwargs)
