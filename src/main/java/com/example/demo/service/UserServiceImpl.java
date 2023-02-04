package com.example.demo.service;

import com.example.demo.entity.Address;
import com.example.demo.entity.User;
import com.example.demo.repository.AddressRepo;
import com.example.demo.repository.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AddressRepo addressRepo;
    private List<User> users;

    private Address address;

    @Override
    @Transactional
    public List<User> returnUsers(){

        users = userRepo.findAll();
        for (User u : users){
            u.setAddress(addressRepo.getReferenceById(u.getId()));
        }
        return users;
    }

    @Override
    @Transactional
    public void saveUser(User user){

        userRepo.save(user);
        address = user.getAddress();
        addressRepo.save(address);



    }

    @Override
    public void DeleteUser(int id) {
        userRepo.deleteById(id);
    }
}
