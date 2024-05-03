package com.example.sta.controllers;

import com.example.sta.dtos.AdminDto;
import com.example.sta.services.AdminService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/check-admin")
@CrossOrigin(origins = "http://localhost:5500", methods = {RequestMethod.POST}, allowedHeaders = "*")
public class AdminController {
    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }


    @PostMapping
    public boolean checkEntity(@RequestBody AdminDto adminDto){
        System.out.println("Received request: " + adminDto.toString());
        return adminService.checkEntity(adminDto);
    }

}
