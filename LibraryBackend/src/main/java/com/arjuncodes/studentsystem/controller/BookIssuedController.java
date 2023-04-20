package com.arjuncodes.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.arjuncodes.studentsystem.model.BookIssued;
import com.arjuncodes.studentsystem.model.Student;
import com.arjuncodes.studentsystem.repository.BookIssuedRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookIssuedController {
	   @Autowired
	    private BookIssuedRepository BookIssuedRepository;

	    @PostMapping("/accept-issue")
	    BookIssued newBook(@RequestBody BookIssued newIssue) {
	        return BookIssuedRepository.save(newIssue);
	    }
	    @GetMapping("/all-issued")
	    List<BookIssued> getAllBook() {
	    	System.out.print(BookIssuedRepository);
	        return BookIssuedRepository.findAll();
	    }
	    @DeleteMapping("/del-issued/{id}")
	    String deleteUser(@PathVariable Long id){
	 
	    	BookIssuedRepository.deleteById(id);
	        return  "Issue with id "+id+" has been deleted success.";
	    }
		@GetMapping("/issue-mssv")
		public ResponseEntity<List<BookIssued>> getBookIssuedsByMSSV(@RequestParam String mssv) {
			return new ResponseEntity<List<BookIssued>>(BookIssuedRepository.findByMssv(mssv), HttpStatus.OK);
		}
}
