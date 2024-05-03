package com.example.sta.controllers;

import com.example.sta.models.Checkout;
import com.example.sta.services.CheckoutService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-checkout")
@CrossOrigin(origins = "*")
public class CheckoutController {
    private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }
    @GetMapping
    public List<Checkout> findAll(){
        return checkoutService.findAll();
    }
    @PostMapping
    public void addCheckout(@RequestBody Checkout checkout){
        checkoutService.add(checkout);
    }
}
