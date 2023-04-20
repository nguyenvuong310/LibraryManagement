
package com.arjuncodes.studentsystem.repository;

import com.arjuncodes.studentsystem.model.Issue;


import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends JpaRepository<Issue,Long> {

}