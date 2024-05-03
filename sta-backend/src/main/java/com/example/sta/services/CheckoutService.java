package com.example.sta.services;

import com.example.sta.dtos.ProductDto;
import com.example.sta.models.Checkout;

import java.util.List;

public interface CheckoutService {
    void add(Checkout checkout);

    List<Checkout> findAll();
}
