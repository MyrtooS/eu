package com.example.demo.controllers;


import com.example.demo.entity.Address;
import com.example.demo.entity.User;
import com.example.demo.service.AddressServiceImpl;
import com.example.demo.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UsersController {

    private List<User> users;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private AddressServiceImpl addressService;

    private Address address;

    @GetMapping("/user")
    public List<User> index(){

        return userService.returnUsers();
    }


    @PostMapping("/create")
    public void newUser(@RequestBody User newUser){
        userService.saveUser(newUser);
        address = newUser.getAddress();
        addressService.SaveAddresses(address);
    }
    @PostMapping("/delete/{id}")
    public void Delete(@PathVariable("id") int id){
        userService.DeleteUser(id);
        addressService.DeleteAddress(id);
    }

}
