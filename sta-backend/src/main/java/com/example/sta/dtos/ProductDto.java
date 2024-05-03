package com.example.sta.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private long id;
    private String url;
    private String code;
    private String name;
    private String description;
    private String size;
    private double price;
}
