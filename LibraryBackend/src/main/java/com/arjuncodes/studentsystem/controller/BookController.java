package com.arjuncodes.studentsystem.controller;



import com.arjuncodes.studentsystem.model.Book;
import com.arjuncodes.studentsystem.model.User;
import com.arjuncodes.studentsystem.repository.BookRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {

    @Autowired
    private BookRepository BookRepository;

    @PostMapping("/addbook")
    Book newBook(@RequestBody Book newBook) {
        return BookRepository.save(newBook);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    List<Book> getAllBook() {
    	System.out.print(BookRepository);
        return BookRepository.findAll();
    }
    @DeleteMapping("/del-books/{id}")
    String deleteUser(@PathVariable Long id){
 
    	BookRepository.deleteById(id);
        return  "Book with id "+id+" has been deleted success.";
    }
    @PutMapping("/put-book/{id}")
    Book updateUser(@RequestBody Book newBook, @PathVariable("id") Long id) {
        return BookRepository.findById(id)
                .map(book -> {
                	book.setAuthor(newBook.getAuthor());
                	book.setTitle(newBook.getTitle());
                	book.setPublisher(newBook.getPublisher());
                	book.setYear(newBook.getYear());
                	book.setCopies(newBook.getCopies());
                    return BookRepository.save(book);
                }).orElseThrow();
    }
    
}

