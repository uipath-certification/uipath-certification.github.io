package com.stock;

import java.util.Scanner;

public class StockTracker {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		System.out.println("This program will help you track information");
		System.out.println("about your investments.");
		System.out.println();
		
		Scanner input = new Scanner(System.in);
		StockAccount account = new StockAccount();
		
		System.out.println("Please enter your name and hit <ENTER>");
		account.name = input.nextLine();
		
		System.out.println("Please enter your initial account balance and hit <ENTER>");
		account.balance = input.nextDouble();
		
		if (account.balance < 0) {
			account.balance = 1000;
			System.out.println("Negative balances are not allowed.");
			System.out.println("An account has been opened with $" + account.balance);
		}
		
		System.out.println();
		System.out.println("Your account details:");
		System.out.println("Name: " + account.name);
		System.out.println("Account Balance: " + account.balance);
		
		input.close();

	}

}
