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
		if (heldStock != null
				&& !toBuy.getSymbol().equalsIgnoreCase(heldStock.getSymbol())) {
			// Account owns stock and trys to buy another stock
			System.out
					.println("You can only own shares of one stock at a time");
			return;
		}
		double totalCost = toBuy.getShares() * toBuy.getPrice();
		if (totalCost > balance) {
			System.out.println("You can't buy that much stock.");
		} else {
			System.out.println("You have bought " + toBuy.getShares()
					+ " shares of " + toBuy.getSymbol() + " at $"
					+ toBuy.getPrice() + " per share");
			balance -= totalCost;
			int newShares = toBuy.getShares();
			if (heldStock != null) {
				newShares += heldStock.getShares();
			}
			heldStock = toBuy;
			heldStock.setShares(newShares);
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
				return;
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
			System.out.println("You don't own that stock to sell");
		}
	}

	public void withdraw(double amount) {
		if (amount <= balance) {
			balance -= amount;
		} else {
			System.out.println("You can't withdraw that much money");
		}
	}

	public void deposit(double amount) {
		balance += amount;
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
