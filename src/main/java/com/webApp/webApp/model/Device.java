package com.webApp.webApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity(name = "device")
@Table(name = "devices")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Device {

    @Id
    @Column(name = "id")
    private Integer id;

    @Column(name = "address")
    private String address;

    @Column(name = "is_active")
    private Boolean isActive;

    @Column(name = "max_capcity")
    private Integer maxCapacity;

    @Column(name = "capcity")
    private Integer capacity;

    @Column(name = "user_id")
    private Integer userId;
//
//    @OneToMany(fetch = FetchType.LAZY, mappedBy = "device")
//    private List<Product> products;
}
