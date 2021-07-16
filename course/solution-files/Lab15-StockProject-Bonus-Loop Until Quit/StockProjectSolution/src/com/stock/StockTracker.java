package com.stock;

import java.util.Scanner;

public class StockTracker {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		printIntro();

		StockAccount account = collectAccountInfo();

		boolean keepGoing = true;

		do {
			printAccountSummary(account);

			char choice = getUserAction();
			switch (choice) {
			case 'q':
			case 'Q':
				keepGoing = false;
				break;

			case 'b':
			case 'B':
				System.out.println("You will now buy stock for your account");
				Stock toBuy = collectStockInfo();
				account.buyStock(toBuy);
				break;

			case 's':
			case 'S':
				System.out.println("You will now sell stock from your account");
				Stock toSell = collectStockInfo();
				account.sellStock(toSell);
				break;

			case 'w':
			case 'W':
				doWithdrawl(account);
				break;

			case 'd':
			case 'D':
				doDeposit(account);
				break;

			default:
				System.out.println("You have entered an incorrect option");
				break;
			}
		} while (keepGoing);

		printAccountSummary(account);
	}

	private static char getUserAction() {
		System.out
				.println("You can (b)uy stock, (s)ell stock, (w)ithdraw, (d)eposit, or (q)uit");
		System.out
				.println("Enter the first letter of your choice above and hit <ENTER>");

		Scanner input = new Scanner(System.in);
		char choice = input.nextLine().charAt(0);
		input.close();
		return choice;
	}

	private static void doWithdrawl(StockAccount account) {
		System.out.println("Enter the amount to withdraw");
		Scanner input = new Scanner(System.in);
		double amount = input.nextDouble();
		input.close();
		account.withdraw(amount);
	}

	private static void doDeposit(StockAccount account) {
		System.out.println("Enter the amount to deposit");
		Scanner input = new Scanner(System.in);
		double amount = input.nextDouble();
		input.close();
		account.deposit(amount);
	}

	private static Stock collectStockInfo() {
		Scanner input = new Scanner(System.in);

		System.out.println("Please enter the stock symbol and hit <ENTER>");
		String symbol = input.nextLine();

		System.out
				.println("Please enter the number of (whole) shares and hit <ENTER>");
		int shares = input.nextInt();

		System.out
				.println("Please enter the price of the stock and hit <ENTER>");
		double price = input.nextDouble();
		
		input.close();

		return new Stock(symbol, shares, price);
	}

	private static StockAccount collectAccountInfo() {
		Scanner input = new Scanner(System.in);

		System.out.println("Please enter your name and hit <ENTER>");
		String name = input.nextLine();

		System.out
				.println("Please enter your initial account balance and hit <ENTER>");
		double balance = input.nextDouble();
		
		input.close();

		if (balance < 0) {
			System.out.println("Negative balances are not allowed.");
			StockAccount account = new StockAccount(name);
			System.out.println("An account has been opened with $"
					+ account.getBalance());
			return account;
		} else {
			return new StockAccount(name, balance);
		}
	}

	private static void printAccountSummary(StockAccount account) {
		System.out.println();
		System.out.println("Your account details:");
		System.out.println("Name: " + account.getName());
		System.out.println("Account Balance: " + account.getBalance());
		Stock heldStock = account.getHeldStock();
		if (heldStock == null) {
			System.out.println("You do not own any stock.");
		} else {
			double totalValue = account.getBalance() + heldStock.getShares()
					* heldStock.getPrice();
			System.out.println("Total value: " + totalValue);
			System.out.println("You own " + heldStock.getShares()
					+ " shares of " + heldStock.getSymbol());
		}
		System.out.println();
	}

	private static void printIntro() {
		System.out.println("This program will help you track information");
		System.out.println("about your investments.");
		System.out.println();
	}

}
