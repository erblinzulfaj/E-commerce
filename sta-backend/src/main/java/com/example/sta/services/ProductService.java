package com.example.sta.services;

import com.example.sta.dtos.ProductDto;

import java.util.List;

public interface ProductService {

    void add(ProductDto productDto);

    void modify(long id, ProductDto productDto);

    void removeShirtById(long id);
    void removeHoodieById(long id);
    void removeFleeceById(long id);
    void removeCapById(long id);

    ProductDto findShirtById(long id);
    ProductDto findHoodieById(long id);
    ProductDto findFleeceById(long id);
    ProductDto findCapById(long id);

    List<ProductDto> findAllTshirts();
    List<ProductDto> findAllHoodies();
    List<ProductDto> findAllFleeces();
    List<ProductDto> findAllCaps();

}
