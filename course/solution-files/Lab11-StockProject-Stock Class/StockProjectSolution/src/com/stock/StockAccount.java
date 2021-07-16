package com.stock;

public class StockAccount {
	private String name;
	private double balance;
	private Stock heldStock;

	public static final double DEFAULT_BALANCE = 1000;

	public StockAccount(String name, double balance) {
		this.name = name;
		this.balance = balance;
	}

	public StockAccount(String name) {
		// uses the constant defined for the default balance
		// as the balance to the other constructor
		this(name, DEFAULT_BALANCE);
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

	public Stock getStock() {
		return heldStock;
	}
}
