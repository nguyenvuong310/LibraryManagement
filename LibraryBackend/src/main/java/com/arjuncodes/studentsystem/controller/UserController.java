package com.arjuncodes.studentsystem.controller;


import com.arjuncodes.studentsystem.model.User;
import com.arjuncodes.studentsystem.repository.UserReponsitory;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserReponsitory userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }
    @PutMapping("/put-user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable("id") Long id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setName(newUser.getName());
                    user.setEmail(newUser.getEmail());
                    return userRepository.save(user);
                }).orElseThrow();
    }
    @GetMapping("/user/{id}")
    Optional<User> getUserById(@PathVariable("id") Long id) {
        return userRepository.findById(id);
    }
    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
 
        userRepository.deleteById(id);
        return  "User with id "+id+" has been deleted success.";
    }

}

