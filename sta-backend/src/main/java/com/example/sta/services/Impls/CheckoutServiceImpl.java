package com.example.sta.services.Impls;

import com.example.sta.models.Checkout;
import com.example.sta.repositories.CheckoutRepository;
import com.example.sta.services.CheckoutService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckoutServiceImpl implements CheckoutService {
    private final CheckoutRepository repository;

    public CheckoutServiceImpl(CheckoutRepository repository) {
        this.repository = repository;
    }

    @Override
    public void add(Checkout checkout) {
        repository.save(checkout);
    }
    @Override
    public List<Checkout> findAll() {
        return repository.findAll().stream().toList();
    }
}
