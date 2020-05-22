package com.webApp.webApp.controller;

import com.webApp.webApp.dto.UserDTO;
import com.webApp.webApp.model.User;
import com.webApp.webApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/getUser/{id}")
    public User getUserById(@PathVariable Integer id) {
        return userService.getUserInfoById(id);
    }

    @PostMapping(path = "/updateUser")
    public void updateUser(@RequestBody UserDTO dto) {
        userService.updateUser(dto);
    }

    @GetMapping(path = "/authenticate/{login}/{password}")
    public User authenticateUser(@PathVariable String login, @PathVariable String password) {
        try {
            return userService.authenticate(login, password);
        } catch (Exception e) {
            return null;
        }
    }
}
