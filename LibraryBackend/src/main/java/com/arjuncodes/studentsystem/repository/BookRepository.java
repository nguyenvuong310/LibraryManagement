package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Book;
import com.arjuncodes.studentsystem.model.Student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book,Long> {
	List<Book> findByTitle(String name);
}