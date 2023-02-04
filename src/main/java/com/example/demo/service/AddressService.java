package com.example.demo.service;

import com.example.demo.entity.Address;

import java.util.List;


public interface AddressService {

    public List<Address> returnAddresses();

    public void SaveAddresses(Address address);

    public void DeleteAddress(int id);
}
