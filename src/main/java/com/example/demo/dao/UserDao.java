package com.example.demo.dao;

import com.example.demo.entity.User;

import java.util.List;

public interface UserDao {

    public List<User> getUsers();

    public String insertUsers();

    public String deleteUsers();
}
