package com.example.integratedchatgpt_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductSellTotalDTO {
    private Object product_id;
    private Object product_code;
    private Object product_name;
    private Object sell_total;
}
