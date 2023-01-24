# Exercise 3

1. Within the `widgets_demo` project, create a new widget named `StockListWidget`.

2. The widget should have a form with a text box and a button. The text box will collect a stock symbol from the user. Be sure to properly label the text box. The text content of button should be "Add Stock to List".

3. Below the form display a list of stock symbols.

4. When adding a stock symbol to the list look up the price using the `yfinance` package. Each stock list item should display the symbol and the current price.

5. Update the `StockListWidget` by adding a button to each list item with the text content set to "X". When the button is clicked, remove the stock from the list.

6. Bonus: Every minute, automatically update the price of each stock. Hint: to trigger the update, use the `setTimeout` JavaScript function. To optimize the update, either pass multiple stocks to `yfinance` or use a `ThreadPool` and call `yfinance` with one stock at a time.

7. Ensure it works!