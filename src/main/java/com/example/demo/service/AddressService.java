package com.example.demo.service;

import com.example.demo.entity.Address;
import com.example.demo.repository.AddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepo addressRepo;
    public List<Address> returnAddresses(){

        return addressRepo.findAll();
    }

}
