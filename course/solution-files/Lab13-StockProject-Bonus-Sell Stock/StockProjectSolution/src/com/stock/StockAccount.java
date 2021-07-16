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

	public void buyStock(Stock toBuy) {
		double totalCost = toBuy.getShares() * toBuy.getPrice();
		if (totalCost > balance) {
			System.out.println("You can't buy that much stock.");
		} else {
			balance -= totalCost;
			heldStock = toBuy;
			System.out.println("You have bought " + toBuy.getShares()
					+ " shares of " + toBuy.getSymbol() + " at $"
					+ toBuy.getPrice() + " per share");
		}
	}

	public void sellStock(Stock toSell) {
		if (heldStock == null) {
			// No stock to sell
			return;
		}
		boolean sameSymbol = toSell.getSymbol().equalsIgnoreCase(
				heldStock.getSymbol());
		if (sameSymbol) {
			int sharesHeld = heldStock.getShares();
			int sharesSold = toSell.getShares();
			if (sharesHeld < sharesSold) {
				System.out.println("You can't sell that much stock");
				System.out.println("We will sell all shares you own");
				sharesSold = sharesHeld;
			}
			balance += sharesSold * toSell.getPrice();
			if (sharesHeld == sharesSold) {
				// Setting the heldStock field to null means the 
				// account doesn't refer to any Stock object
				heldStock = null;
			} else {
				int newShares = heldStock.getShares() - sharesSold;
				heldStock = toSell;
				heldStock.setShares(newShares);
			}
		} else {
			System.out.println("You don't own that stock to sell");
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
