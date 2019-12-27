package com.revature.util;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import org.apache.log4j.Logger;

public class ConnectionUtil {
	private static Logger logger = Logger.getLogger(ConnectionUtil.class);

	public static Connection getConnection() {
		
		String url = "jdbc:postgresql://localhost:8080/postgres?currentschema=project1";
		String username = "postgres";
		String password = "megadeth6";
		
		try {
			Class.forName("org.postgresql.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		Properties props = new Properties();
		
		ClassLoader loader = Thread.currentThread().getContextClassLoader();
		Connection conn = null;
		try {
			props.load(loader.getResourceAsStream("connection.properties"));
			String url1 = props.getProperty("url");
			String username1 = props.getProperty("username");
			String password1 = props.getProperty("password");
			try {
				conn = DriverManager.getConnection(url1, username1, password1);
			} catch (SQLException e) {
				logger.warn("Unable to obtain connection to database", e);
			}
		} catch (IOException e1) {
		}
		
		return conn;
	}
}
