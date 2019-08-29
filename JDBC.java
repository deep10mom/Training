package com.sj.jdbc;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBC {

	public static void main(String[] args) throws ClassNotFoundException {
		// TODO Auto-generated method stub
try {
	Class.forName("org.mariadb.jdbc.Driver");
	Connection con=DriverManager.getConnection("jdbc:mariadb://localhost:3306/dbs","root","password");
	Statement st=con.createStatement();	
	ResultSet user=st.executeQuery("select * from products");
	while(user.next()) {
		System.out.println(user.getString(1)+user.getString(2));
	}
	}
catch(Exception e) {
	System.out.println(e);
	
}

}
}
