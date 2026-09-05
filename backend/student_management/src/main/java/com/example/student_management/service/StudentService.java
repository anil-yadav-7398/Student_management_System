package com.example.student_management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.student_management.model.Student;
import com.example.student_management.repository.studentRepository;

@Service
public class StudentService {

    @Autowired
    private studentRepository repository;

    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> searchStudents(String keyword) {
        return repository.searchStudents(keyword);
    }

    public List<Student> getAllStudent() {
        return repository.findAll();
    }

    public Student getStudentById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found with ID: " + id));
    }

    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}