package com.example.sta.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Checkout {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String email;
    private String number;
    private String address;
    private String city;
    private String shirtCode;
    private String hoodieCode;
    private String fleeceCode;
    private String capCode;
    private String price;

}
