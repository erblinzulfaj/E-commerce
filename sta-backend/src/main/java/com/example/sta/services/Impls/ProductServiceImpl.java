package com.example.sta.services.Impls;

import com.example.sta.dtos.ProductDto;
import com.example.sta.mappers.ProductMapper;
import com.example.sta.repositories.CapRepository;
import com.example.sta.repositories.FleecesRepository;
import com.example.sta.repositories.HoodieRepository;
import com.example.sta.repositories.ShirtRepository;
import com.example.sta.services.ProductService;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    private final ShirtRepository shirtRepository;
    private final HoodieRepository hoodieRepository;
    private final CapRepository capRepository;
    private final FleecesRepository fleecesRepository;
    private final ProductMapper productMapper;

    public ProductServiceImpl(ShirtRepository repository, HoodieRepository hoodieRepository, CapRepository capRepository, FleecesRepository fleecesRepository, ProductMapper productMapper) {
        this.shirtRepository = repository;
        this.hoodieRepository = hoodieRepository;
        this.capRepository = capRepository;
        this.fleecesRepository = fleecesRepository;
        this.productMapper = productMapper;
    }

    //Add
    @Override
    public void add(ProductDto productDto) {
        String name = productDto.getName();
        if (name.equals("maic") || name.equals("shirt") || name.equals("Maic") || name.equals("Shirt")) {
            var product = productMapper.toShirt(productDto);
            shirtRepository.save(product);
        } else if (name.equals("duks") || name.equals("hoodie") || name.equals("Duks") || name.equals("Hoodie")) {
            var product = productMapper.toHoodie(productDto);
            hoodieRepository.save(product);
        } else if (name.equals("fleece") || name.equals("trenerk") || name.equals("Trenerk") || name.equals("Fleece")) {
            var product = productMapper.toFleeces(productDto);
            fleecesRepository.save(product);
        } else if (name.equals("cap") || name.equals("kapuq") || name.equals("Cap") || name.equals("Kapuq")) {
            var product = productMapper.toCap(productDto);
            capRepository.save(product);
        }
    }

    @Override
    public void modify(long id, ProductDto updatedProduct) {
        String name = updatedProduct.getName();
        if (name.equals("maic") || name.equals("shirt") || name.equals("Maic") || name.equals("Shirt")) {
            var optionalProduct = shirtRepository.findById(id);
            var product = optionalProduct.get();
            product.setUrl(updatedProduct.getUrl());
            product.setCode(updatedProduct.getCode());
            product.setName(updatedProduct.getName());
            product.setDescription(updatedProduct.getDescription());
            product.setSize(updatedProduct.getSize());
            product.setPrice(updatedProduct.getPrice());
            shirtRepository.save(product);
        } else if (name.equals("duks") || name.equals("hoodie") || name.equals("Duks") || name.equals("Hoodie")) {
            var optionalProduct = hoodieRepository.findById(id);
            var product = optionalProduct.get();
            product.setUrl(updatedProduct.getUrl());
            product.setCode(updatedProduct.getCode());
            product.setName(updatedProduct.getName());
            product.setDescription(updatedProduct.getDescription());
            product.setSize(updatedProduct.getSize());
            product.setPrice(updatedProduct.getPrice());
            hoodieRepository.save(product);
        } else if (name.equals("fleece") || name.equals("trenerk") || name.equals("Trenerk") || name.equals("Fleece")) {
            var optionalProduct = fleecesRepository.findById(id);
            var product = optionalProduct.get();
            product.setUrl(updatedProduct.getUrl());
            product.setCode(updatedProduct.getCode());
            product.setName(updatedProduct.getName());
            product.setDescription(updatedProduct.getDescription());
            product.setSize(updatedProduct.getSize());
            product.setPrice(updatedProduct.getPrice());
            fleecesRepository.save(product);
        } else if (name.equals("cap") || name.equals("kapuq") || name.equals("Cap") || name.equals("Kapuq")) {
            var optionalProduct = capRepository.findById(id);
            var product = optionalProduct.get();
            product.setUrl(updatedProduct.getUrl());
            product.setCode(updatedProduct.getCode());
            product.setName(updatedProduct.getName());
            product.setDescription(updatedProduct.getDescription());
            product.setSize(updatedProduct.getSize());
            product.setPrice(updatedProduct.getPrice());
            capRepository.save(product);
        } else
            throw new RuntimeException("Produkti nuk u gjet!");
    }

    //Delete
    @Override
    public void removeShirtById(long id) {
        shirtRepository.deleteById(id);
    }

    @Override
    public void removeHoodieById(long id) {
        hoodieRepository.deleteById(id);
    }

    @Override
    public void removeFleeceById(long id) {
        fleecesRepository.deleteById(id);
    }

    @Override
    public void removeCapById(long id) {
        capRepository.deleteById(id);
    }

    // find by id
    @Override
    public ProductDto findShirtById(long id) {
        var optionalProduct = shirtRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("Product not found!");
        }
        var product = productMapper.shirtToDto(optionalProduct.get());
        return product;
    }
    @Override
    public ProductDto findHoodieById(long id) {
        var optionalProduct = hoodieRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("Product not found!");
        }
        var product = productMapper.hoodieToDto(optionalProduct.get());
        return product;
    }
    @Override
    public ProductDto findFleeceById(long id) {
        var optionalProduct = fleecesRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("Product not found!");
        }
        var product = productMapper.fleecesToDto(optionalProduct.get());
        return product;
    }
    @Override
    public ProductDto findCapById(long id) {
        var optionalProduct = capRepository.findById(id);
        if (optionalProduct.isEmpty()) {
            throw new RuntimeException("Product not found!");
        }
        var product = productMapper.capToDto(optionalProduct.get());
        return product;
    }

    //FindAll
    @Override
    public List<ProductDto> findAllTshirts() {
        return shirtRepository.findAll().stream().map(productMapper::shirtToDto).toList();
    }

    @Override
    public List<ProductDto> findAllHoodies() {
        return hoodieRepository.findAll().stream().map(productMapper::hoodieToDto).toList();
    }

    @Override
    public List<ProductDto> findAllFleeces() {
        return fleecesRepository.findAll().stream().map(productMapper::fleecesToDto).toList();
    }

    @Override
    public List<ProductDto> findAllCaps() {
        return capRepository.findAll().stream().map(productMapper::capToDto).toList();
    }
}
