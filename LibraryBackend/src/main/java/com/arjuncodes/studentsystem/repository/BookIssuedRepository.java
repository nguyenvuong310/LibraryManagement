package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.BookIssued;
import com.arjuncodes.studentsystem.model.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookIssuedRepository extends JpaRepository<BookIssued,Long> {
	List<BookIssued> findByMssv(String name);
}