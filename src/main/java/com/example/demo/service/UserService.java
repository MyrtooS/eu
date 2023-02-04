package com.example.demo.service;

import com.example.demo.entity.User;
//import com.example.demo.entity.UserId;

import java.util.List;

public interface UserService {

    public List<User> returnUsers();


    public void saveUser(User user);


    public void DeleteUser(int id);

}
