package com.stock;

public class Stock {
	private String symbol;
	private int shares;
	private double price;

	public Stock(String symbol, int shares, double price) {
		super();
		this.symbol = symbol;
		this.shares = shares;
		this.price = price;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}

	public int getShares() {
		return shares;
	}

	public void setShares(int shares) {
		this.shares = shares;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

}
