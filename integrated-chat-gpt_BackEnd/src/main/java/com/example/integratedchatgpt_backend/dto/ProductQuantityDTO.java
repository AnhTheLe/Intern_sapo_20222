package com.example.integratedchatgpt_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductQuantityDTO {
    private Object category_id;
    private Object category_code;
    private Object category_name;
    private Object quantity_product;
}
