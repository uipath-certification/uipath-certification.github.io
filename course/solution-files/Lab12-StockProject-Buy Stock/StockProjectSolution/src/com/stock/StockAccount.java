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

	public StockAccount(String name) {
		this(name, 1000);
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
