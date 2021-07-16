package com.stock;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class StockFileManager {
	public static final String FILE_NAME = "C:/temp/stocks.dat";

	public static void storeAccountInfo(StockAccount toStore)
			throws StockException {
		File toWrite = new File(FILE_NAME);
		if (toWrite.exists()) {
			toWrite.delete();
		}
		try (ObjectOutputStream output = new ObjectOutputStream(
					new FileOutputStream(toWrite))) {
			output.writeObject(toStore);
		} catch (FileNotFoundException e) {
			throw new StockException("Stock file not found", e);
		} catch (IOException e) {
			throw new StockException("Problems writing to file", e);
		}
	}

	public static StockAccount getStoredAccount() throws StockException {
		File storedFile = new File(FILE_NAME);
		if (storedFile.exists()) {
			Object read = null;
			try (ObjectInputStream input = new ObjectInputStream(
						new FileInputStream(storedFile))) {
				read = input.readObject();
			} catch (FileNotFoundException e) {
				throw new StockException("Unable to open file", e);
			} catch (IOException e) {
				throw new StockException("Problem reading data", e);
			} catch (ClassNotFoundException e) {
				throw new StockException("File data may be outdated", e);
			}
			if (read instanceof StockAccount) {
				return (StockAccount) read;
			} else {
				return null;
			}
		} else {
			// no stored stock account info
			return null;
		}

	}
}
