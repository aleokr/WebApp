package com.webApp.webApp.service;

import com.webApp.webApp.dto.UserDTO;
import com.webApp.webApp.model.Device;
import com.webApp.webApp.model.User;
import com.webApp.webApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserInfoById(Integer id) {
        return userRepository.findById(id).get();
    }

    public void updateUser(UserDTO dto){
        User user = userRepository.getOne(dto.getId());
        user.setLogin(dto.getLogin());
        user.setName(dto.getName());
        user.setSurname(dto.getSurname());
        user.setPassword(dto.getPassword());

        userRepository.save(user);
    }

    public User authenticate(String login, String password){
        return userRepository.findById(userRepository.authenticate(login, password)).get();
    }
}
