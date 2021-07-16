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
		
		System.out.println("Please enter your name and hit <ENTER>");
		String name = input.nextLine();
		
		System.out.println("Please enter your initial account balance and hit <ENTER>");
		double balance = input.nextDouble();
		
		if (balance < 0) {
			balance = 1000;
			System.out.println("Negative balances are not allowed.");
			System.out.println("An account has been opened with $" + balance);
		}
		
		System.out.println();
		System.out.println("Your account details:");
		System.out.println("Name: " + name);
		System.out.println("Account Balance: " + balance);
		
		input.close();
		
	}

}
