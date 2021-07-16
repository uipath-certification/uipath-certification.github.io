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
		StockAccount account = new StockAccount();
		
		System.out.println("Please enter your name and hit <ENTER>");
		account.setName(input.nextLine());
		
		System.out.println("Please enter your initial account balance and hit <ENTER>");
		account.setBalance(input.nextDouble());
		
		if (account.getBalance() < 0) {
			account.setBalance(1000);
			System.out.println("Negative balances are not allowed.");
			System.out.println("An account has been opened with $" + account.getBalance());
		}
		
		input.close();
		
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
