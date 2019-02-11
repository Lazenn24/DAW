package com.mycompany.IMC.servlet;

import java.io.IOException;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.mysql.jdbc.Connection;
import com.mysql.jdbc.Driver;

/**
 * Servlet implementation class RegisterIMC
 */
@WebServlet("/RegisterIMC")
public class RegisterIMC extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final Logger loger = (Logger) Logger.getLogger(RegisterIMC.class.getName());	
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public double RegisterIMC(double altura, double peso) {
        double imc = peso/Math.pow(altura, 2);
        return imc;
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		double altura = Double.parseDouble(request.getParameter("altura"));
		double peso = Double.parseDouble(request.getParameter("peso"));
		
		double imc = RegisterIMC(altura, peso);
		
		if(request.getSession().getAttribute("user") == null) {
			
		}
		
		try {
			Connection conn = (Connection) DriverManager.getConnection ("jdbc:mysql://localhost:3306/IMC","imc", "imc");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		double alt = Double.parseDouble(altura);
	}

}
