package com.example.student_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.student_management.model.Student;

import java.util.List;
import java.util.Optional;
@Repository
public interface studentRepository extends JpaRepository<Student, Integer> {
    Optional<Student> findByRoll(String roll);

    @Query("""
            SELECT s FROM Student s WHERE Lower(s.name) LIKE Lower(concat('%', :keyword, '%')) or
             Lower(s.roll) LIKE Lower(concat('%', :keyword, '%'))or
             Lower(s.course) LIKE Lower(concat('%', :keyword, '%')) or
             Lower(s.email) LIKE Lower(concat('%', :keyword, '%'))
            """)
    List<Student> searchStudents(@Param("keyword") String keyword);

}