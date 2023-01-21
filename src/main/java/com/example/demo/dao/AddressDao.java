package com.example.demo.dao;

import com.example.demo.entity.Address;

import java.util.List;

public interface AddressDao {

    public List<Address> getAddresses();

    public String insertAddress();

    public String deleteAddress();
}
