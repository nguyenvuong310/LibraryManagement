package com.arjuncodes.studentsystem.controller;



import com.arjuncodes.studentsystem.model.Issue;
import com.arjuncodes.studentsystem.repository.IssueRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IssueController {

    @Autowired
    private IssueRepository IssueRepository;

    @PostMapping("/request")
    Issue newBook(@RequestBody Issue newIssue) {
        return IssueRepository.save(newIssue);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/issue")
    List<Issue> getAllBook() {
    	System.out.print(IssueRepository);
        return IssueRepository.findAll();
    }
    @DeleteMapping("/del-issue/{id}")
    String deleteUser(@PathVariable Long id){
 
    	IssueRepository.deleteById(id);
        return  "Issue with id "+id+" has been deleted success.";
    }
    
}

