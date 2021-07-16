package com.stock;

import java.util.Scanner;

public class StockTracker {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		printIntro();
		
		StockAccount account = collectAccountInfo();
		
		printAccountSummary(account);

	}

	private static StockAccount collectAccountInfo() {
		Scanner input = new Scanner(System.in);
		
		System.out.println("Please enter your name and hit <ENTER>");
		String name = input.nextLine();
		
		System.out.println("Please enter your initial account balance and hit <ENTER>");
		double balance = input.nextDouble();
		
		input.close();
		
		StockAccount account;
		
		if (balance < 0) {
			// notice this code no longer sets the default balance directly
			account = new StockAccount(name);
			System.out.println("Negative balances are not allowed.");
			System.out.println("An account has been opened with $" + account.getBalance());
		} else {
			account = new StockAccount(name, balance);
		}
		return account;
	}

	private static void printAccountSummary(StockAccount account) {
		System.out.println();
		System.out.println("Your account details:");
		System.out.println("Name: " + account.getName());
		System.out.println("Account Balance: " + account.getBalance());
	}

	private static void printIntro() {
		System.out.println("This program will help you track information");
		System.out.println("about your investments.");
		System.out.println();
	}

}
