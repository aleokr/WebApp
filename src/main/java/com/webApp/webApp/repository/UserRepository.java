package com.webApp.webApp.repository;

import com.webApp.webApp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query(value = "select count(*) from users where login = ? and password = ?", nativeQuery = true)
    int authenticate(String login, String password);

}
