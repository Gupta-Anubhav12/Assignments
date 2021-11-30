 import java.sql.*;
 public class DatabaseConnection {
     static final String JDBC_DRIVER = "com.mysql.jdbc.Driver";
     static final String DB_URL = "jdbc:mysql://localhost:3036/project";
     static final String USER = "root";
     static final String PASS = "aryaman1";
     static final String QUERY = "SELECT id, name, dept_name, tot_credits FROM
     student ";
     public static void main(String[] args) {
         // Open a connection
         try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(QUERY);) {
             // Extract data from result set
             while (rs.next()) {
                 // Retrieve by column name
                 System.out.print("ID: " + rs.getInt("id"));
                 System.out.print(", Name Of Student: " +
                     rs.getInt("name"));
                 System.out.print(", DeptName: " +
                     rs.getString("dept_name"));
                 System.out.println(", Total credits: " +
                     rs.getString("tot_credits"));
             }
         } catch (SQLException e) {
             e.printStackTrace();
         }
     }
 }