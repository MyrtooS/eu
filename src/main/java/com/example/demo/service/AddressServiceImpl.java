package com.example.demo.service;

import com.example.demo.entity.Address;
import com.example.demo.repository.AddressRepo;
import com.example.demo.repository.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddressServiceImpl implements AddressService {
    @Autowired
    private AddressRepo addressRepo;

    @Autowired
    private UserRepo userRepo;
    @Override
    @Transactional
    public List<Address> returnAddresses(){

        return addressRepo.findAll();
    }

    @Override
    @Transactional
    public void SaveAddresses(Address address) {

        addressRepo.save(address);
    }

    @Override
    public void DeleteAddress(int id) {
        addressRepo.deleteById(id);
    }
}
