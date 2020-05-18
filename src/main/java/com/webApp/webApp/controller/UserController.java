package com.webApp.webApp.controller;

import com.webApp.webApp.dto.UserDTO;
import com.webApp.webApp.model.User;
import com.webApp.webApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/getUser/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserInfoById(id);
    }

    @PutMapping(path = "/updateUser")
    public void updateUser(@RequestBody UserDTO dto) {
        userService.updateUser(dto);
    }

    @GetMapping(path = "/authenticate/{login}/{password}")
    public ResponseEntity authenticateUser(@PathVariable String login, @PathVariable  String password) {
        int value = userService.authenticate(login, password);
        if(value == 1){
            return ResponseEntity.status(200).build();
        }else{
            return ResponseEntity.status(404).build();
        }
    }
}
