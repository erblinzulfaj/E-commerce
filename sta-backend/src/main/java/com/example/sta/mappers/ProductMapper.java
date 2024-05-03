package com.example.sta.mappers;
import com.example.sta.dtos.ProductDto;
import com.example.sta.models.Cap;
import com.example.sta.models.Fleeces;
import com.example.sta.models.Hoodie;
import com.example.sta.models.Tshirt;
import org.springframework.stereotype.Component;
@Component
public class ProductMapper {
    public Tshirt toShirt(ProductDto dto) {
        Tshirt tshirt = new Tshirt();
        tshirt.setUrl(dto.getUrl());
        tshirt.setCode(dto.getCode());
        tshirt.setName(dto.getName());
        tshirt.setDescription(dto.getDescription());
        tshirt.setSize(dto.getSize());
        tshirt.setPrice(dto.getPrice());
        return tshirt;
    }
    public Hoodie toHoodie(ProductDto dto) {
        Hoodie hooide = new Hoodie();
        hooide.setUrl(dto.getUrl());
        hooide.setCode(dto.getCode());
        hooide.setName(dto.getName());
        hooide.setDescription(dto.getDescription());
        hooide.setSize(dto.getSize());
        hooide.setPrice(dto.getPrice());
        return hooide;
    }

    public ProductDto shirtToDto(Tshirt product) {
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setUrl(product.getUrl());
        dto.setCode(product.getCode());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setSize(product.getSize());
        dto.setPrice(product.getPrice());
        return dto;
    }
    public ProductDto hoodieToDto(Hoodie product) {
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setUrl(product.getUrl());
        dto.setCode(product.getCode());
        dto.setName(product.getName());
        dto.setDescription(product.getDescription());
        dto.setSize(product.getSize());
        dto.setPrice(product.getPrice());
        return dto;
    }

    public ProductDto fleecesToDto(Fleeces fleeces) {
        ProductDto dto = new ProductDto();
        dto.setId(fleeces.getId());
        dto.setUrl(fleeces.getUrl());
        dto.setCode(fleeces.getCode());
        dto.setName(fleeces.getName());
        dto.setDescription(fleeces.getDescription());
        dto.setSize(fleeces.getSize());
        dto.setPrice(fleeces.getPrice());
        return dto;
    }
    public Fleeces toFleeces(ProductDto dto) {
        Fleeces fleeces = new Fleeces();
        fleeces.setUrl(dto.getUrl());
        fleeces.setCode(dto.getCode());
        fleeces.setName(dto.getName());
        fleeces.setDescription(dto.getDescription());
        fleeces.setSize(dto.getSize());
        fleeces.setPrice(dto.getPrice());
        return fleeces;
    }
    public ProductDto capToDto(Cap cap) {
        ProductDto dto = new ProductDto();
        dto.setId(cap.getId());
        dto.setUrl(cap.getUrl());
        dto.setCode(cap.getCode());
        dto.setName(cap.getName());
        dto.setDescription(cap.getDescription());
        dto.setSize(cap.getSize());
        dto.setPrice(cap.getPrice());
        return dto;
    }
    public Cap toCap(ProductDto dto) {
        Cap cap = new Cap();
        cap.setUrl(dto.getUrl());
        cap.setCode(dto.getCode());
        cap.setName(dto.getName());
        cap.setDescription(dto.getDescription());
        cap.setSize(dto.getSize());
        cap.setPrice(dto.getPrice());
        return cap;
    }
}