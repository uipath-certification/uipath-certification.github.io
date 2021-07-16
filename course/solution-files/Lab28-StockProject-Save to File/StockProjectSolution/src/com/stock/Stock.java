package com.stock;

import java.io.Serializable;

public class Stock implements Serializable {
	private static final long serialVersionUID = 1L;
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

	@Override
	public String toString() {
		return shares + " shares of " + symbol + " at $" + price + " per share";
	}

}
