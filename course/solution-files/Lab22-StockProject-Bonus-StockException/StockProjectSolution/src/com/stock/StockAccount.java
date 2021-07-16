package com.stock;

public class StockAccount {
	private String name;
	private double balance;
	private Stock heldStock;

	public StockAccount(String name, double balance) {
		super();
		this.name = name;
		this.balance = balance;
	}

	public StockAccount(String name) {
		this(name, 1000);
	}

	public void buyStock(Stock toBuy) throws StockException {
		if (heldStock != null
				&& !toBuy.getSymbol().equalsIgnoreCase(heldStock.getSymbol())) {
			// Account owns stock and trys to buy another stock
			throw new StockException(
					"You can only own shares of one stock at a time");
		}
		double totalCost = toBuy.getShares() * toBuy.getPrice();
		if (totalCost > balance) {
			throw new StockException("You can't buy that much stock.");
		} else {
			balance -= totalCost;
			int newShares = toBuy.getShares();
			if (heldStock != null) {
				newShares += heldStock.getShares();
			}
			heldStock = toBuy;
			heldStock.setShares(newShares);
		}
	}

	public void sellStock(Stock toSell) throws StockException {
		if (heldStock == null) {
			throw new StockException("You don't have any stock to sell");
		}
		boolean sameSymbol = toSell.getSymbol().equalsIgnoreCase(
				heldStock.getSymbol());
		if (sameSymbol) {
			int sharesHeld = heldStock.getShares();
			int sharesSold = toSell.getShares();
			if (sharesHeld < sharesSold) {
				throw new StockException("You can't sell that much stock");
			} else {
				balance += sharesSold * toSell.getPrice();
				if (sharesHeld == sharesSold) {
					// Setting heldStock to null means the
					// account no longer refers to any Stock object
					heldStock = null;
				} else {
					int newShares = heldStock.getShares() - sharesSold;
					heldStock = toSell;
					heldStock.setShares(newShares);
				}
			}
		} else {
			throw new StockException("You don't own that stock to sell");
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

	public Stock getHeldStock() {
		return heldStock;
	}
}
