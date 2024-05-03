package com.example.sta.controllers;

import com.example.sta.dtos.ProductDto;
import com.example.sta.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api-product")
@CrossOrigin(origins = "*")
public class ProductController {
    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/tshirts")
    public List<ProductDto> getAllTshirts() {
        return productService.findAllTshirts();
    }
    @GetMapping("/hoodies")
    public List<ProductDto> getAllHoodies() {
        return productService.findAllHoodies();
    }
    @GetMapping("/fleeces")
    public List<ProductDto> getAllFleeces() {
        return productService.findAllFleeces();
    }

    @GetMapping("/caps")
    public List<ProductDto> getAllCaps() {
        return productService.findAllCaps();
    }


    @PostMapping()
    public void addProduct(@RequestBody ProductDto productDto) {
        productService.add(productDto);
    }

    @PutMapping("/{id}")
    public void modifyProduct(@PathVariable long id, @RequestBody ProductDto productDto) {
        productService.modify(id, productDto);
    }

    @DeleteMapping("/delete/shirt/{id}")
    public ResponseEntity deleteShirt(@PathVariable long id) {
        productService.removeShirtById(id);
        return ResponseEntity.ok("Product has been deleted!");
    }
    @DeleteMapping("/delete/hoodie/{id}")
    public ResponseEntity deleteHoodie(@PathVariable long id) {
        productService.removeHoodieById(id);
        return ResponseEntity.ok("Product has been deleted!");
    }
    @DeleteMapping("/delete/fleece/{id}")
    public ResponseEntity deleteFleece(@PathVariable long id) {
        productService.removeFleeceById(id);
        return ResponseEntity.ok("Product has been deleted!");
    }
    @DeleteMapping("/delete/cap/{id}")
    public ResponseEntity deleteCap(@PathVariable long id) {
        productService.removeCapById(id);
        return ResponseEntity.ok("Product has been deleted!");
    }

    @GetMapping("/find/shirt/{id}")
    public ProductDto findShirtById(@PathVariable long id) {
        return productService.findShirtById(id);
    }
    @GetMapping("/find/hoodie/{id}")
    public ProductDto findHoodieById(@PathVariable long id) {
        return productService.findHoodieById(id);
    }
    @GetMapping("/find/fleece/{id}")
    public ProductDto findFleeceById(@PathVariable long id) {
        return productService.findFleeceById(id);
    }
    @GetMapping("/find/cap/{id}")
    public ProductDto findCapById(@PathVariable long id) {
        return productService.findCapById(id);
    }

}
