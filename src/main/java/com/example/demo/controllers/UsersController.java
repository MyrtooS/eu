package com.example.demo.controllers;

import com.example.demo.dao.UserDaoImpl;
//import com.example.demo.dao.testDAOImpl;
import com.example.demo.entity.Address;
import com.example.demo.entity.User;
import com.example.demo.service.AddressService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
//import com.example.demo.entity.test;

import java.util.List;

@RestController
public class UsersController {
    @Autowired
    private UserDaoImpl userDaoImpl;

    private List<User> users;

    @Autowired
    private UserService userService;

    @Autowired
    private AddressService addressService;


    @GetMapping("/user")
    public List<User> index(){
        return userService.returnUsers();
    }

    @GetMapping("/address")
    public List<Address> homepage(){
        return addressService.returnAddresses();
    }



}
