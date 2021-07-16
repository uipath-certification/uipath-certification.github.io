package com.stock;

public class StockAccount {
	public static final int DEFAULT_BALANCE = 1000;
	private String name;
	private double balance;

	public StockAccount(String name, double balance) {
		super();
		this.name = name;
		this.balance = balance;
	}

	public StockAccount(String name) {
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
}
