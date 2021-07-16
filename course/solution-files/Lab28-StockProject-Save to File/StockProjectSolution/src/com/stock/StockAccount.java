package com.stock;

import java.io.Serializable;
import java.util.Collection;
import java.util.SortedMap;
import java.util.TreeMap;

public class StockAccount implements Serializable {
	private static final long serialVersionUID = 1L;
	private String name;
	private double balance;
	private SortedMap<String, Stock> heldStocks;

	public StockAccount(String name, double balance) {
		super();
		this.name = name;
		this.balance = balance;
		heldStocks = new TreeMap<>();
	}

	public StockAccount(String name) {
		this(name, 1000);
	}

	public void buyStock(Stock toBuy) throws StockException {
		double totalCost = toBuy.getShares() * toBuy.getPrice();
		if (totalCost > balance) {
			throw new StockException("You can't buy that much stock.");
		} else {
			balance -= totalCost;

			// returns null if the stock symbol is not owned
			Stock current = heldStocks.remove(toBuy.getSymbol());
			if (current != null) {
				int newShares = toBuy.getShares();
				newShares += current.getShares();
				toBuy.setShares(newShares);
			}
			heldStocks.put(toBuy.getSymbol(), toBuy);
		}
	}

	public void sellStock(Stock toSell) throws StockException {
		if (heldStocks.isEmpty()) {
			throw new StockException("You don't have any stock to sell");
		}
		// returns null if the stock symbol is not owned
		// or the current Stock object if it is
		Stock current = heldStocks.remove(toSell.getSymbol());
		if (current == null) {
			throw new StockException("You don't own that stock to sell");
		} else {
			// stock is owned but no longer in the collection of stocks
			int sharesHeld = current.getShares();
			int sharesSold = toSell.getShares();
			if (sharesHeld < sharesSold) {
				// Put the current stock back in the collection of stocks.  This
				// wouldn't be required if we had not already called the 'remove' method
				heldStocks.put(current.getSymbol(), current);
				throw new StockException("You can't sell that much stock");
			} else {
				balance += sharesSold * toSell.getPrice();
				if (sharesHeld != sharesSold) {
					// figure new shares amount
					int newShares = sharesHeld - sharesSold;
					toSell.setShares(newShares);
					// put the adjusted new Stock object in the collection
					heldStocks.put(toSell.getSymbol(), toSell);
				}
			}
		}
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public Collection<Stock> getHeldStocks() {
		return heldStocks.values();
	}
}
