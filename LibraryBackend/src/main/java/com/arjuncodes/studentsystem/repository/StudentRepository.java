package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Student;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student,Long> {
	List<Student> findByName(String name);
	List<Student> findByMssv(String name);
	List<Student> findByUsername(String name);
	List<Student> findByEmail(String name);
}
