package com.webApp.webApp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DeviceDTO {
    private Integer id;
    private String address;
    private Boolean isActive;
    private Integer maxCapacity;
    private Integer capacity;
    private Integer userId;
}
