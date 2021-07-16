package com.stock;

public class DividendStock extends Stock {
	private double dividend;

	public DividendStock(String symbol, int shares, double price,
			double dividend) {
		super(symbol, shares, price);
		this.dividend = dividend;
	}

	public double getDividend() {
		return dividend;
	}

	public void setDividend(double dividend) {
		this.dividend = dividend;
	}

}
