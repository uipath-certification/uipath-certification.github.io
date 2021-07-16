package com.stock;

import java.io.Serializable;

public class DividendStock extends Stock implements Serializable {
	private static final long serialVersionUID = 1L;
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

	@Override
	public String toString() {
		return super.toString() + ", dividend of $" + dividend;
	}

}
