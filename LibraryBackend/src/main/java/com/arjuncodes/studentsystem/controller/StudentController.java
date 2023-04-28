package com.arjuncodes.studentsystem.controller;

import com.arjuncodes.studentsystem.model.Student;

import com.arjuncodes.studentsystem.service.StudentService;
import com.arjuncodes.studentsystem.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;
    @Autowired
    StudentRepository Srepo;
	@GetMapping("/name")
	public ResponseEntity<List<Student>> getStudentsByName(@RequestParam String name) {
		return new ResponseEntity<List<Student>>(Srepo.findByName(name), HttpStatus.OK);
	}
	@GetMapping("/mssv")
	public ResponseEntity<List<Student>> getStudentsByMSSV(@RequestParam String mssv) {
		return new ResponseEntity<List<Student>>(Srepo.findByMssv(mssv), HttpStatus.OK);
	}
	@GetMapping("/username")
	public ResponseEntity<List<Student>> getStudentsByUserName(@RequestParam String username) {
		return new ResponseEntity<List<Student>>(Srepo.findByUsername(username), HttpStatus.OK);
	}
	@GetMapping("/email")
	public ResponseEntity<List<Student>> getStudentsByEmail(@RequestParam String email) {
		return new ResponseEntity<List<Student>>(Srepo.findByEmail(email), HttpStatus.OK);
	}
    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> list(){
        return studentService.getAllStudents();
    }
    @DeleteMapping("/del-student/{id}")
    String deleteUser(@PathVariable Long id){
 
    	Srepo.deleteById(id);
        return  "Student with id "+id+" has been deleted success.";
    }
    
}
