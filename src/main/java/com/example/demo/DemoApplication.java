package com.example.demo;

import com.example.demo.dao.UserDao;
import com.example.demo.dao.UserDaoImpl;
import com.example.demo.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.util.List;

@SpringBootApplication
public class DemoApplication {
//
////	@Autowired
////	private UserDaoImpl userDaoImpl;
//
//	public List<User> users;



	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}


}
