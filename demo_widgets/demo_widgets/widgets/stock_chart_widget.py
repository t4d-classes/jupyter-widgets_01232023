#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Eric.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from datetime import datetime, timedelta
from ipywidgets import DOMWidget
from traitlets import Unicode, List
from .._frontend import module_name, module_version
import yfinance as yf


class StockChartWidget(DOMWidget):
    """TODO: Add docstring here
    """
    _model_name = Unicode('StockChartModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('StockChartView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    
    stock_symbol = Unicode('AAPL').tag(sync=True)
    stock_data = List([[],[]]).tag(sync=True)


    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        end_date = datetime.now()
        start_date = end_date - timedelta(days=90)

        data = yf.download(
            self.stock_symbol,
            progress=False,
            start=start_date.strftime("%Y-%m-%d"),
            end=end_date.strftime("%Y-%m-%d"),
        )

        self.stock_data = [
            [ d.strftime("%Y-%m-%d") for d in data.index.tolist() ],
            [ round(price, 2) for price in data["Close"].tolist() ]
        ]





    
