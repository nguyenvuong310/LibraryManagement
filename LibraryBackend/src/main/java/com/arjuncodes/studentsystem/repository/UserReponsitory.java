package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserReponsitory extends JpaRepository<User,Long> {
}