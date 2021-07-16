package com.stock;

public class StockAccount {
	private String name;
	private double balance;

	public StockAccount(String name, double balance) {
		super();
		this.name = name;
		this.balance = balance;
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
}
