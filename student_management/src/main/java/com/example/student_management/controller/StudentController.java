package com.example.student_management.controller;

import java.io.File;
import java.io.IOException;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.student_management.model.Student;
import com.example.student_management.repository.studentRepository;
import com.example.student_management.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class StudentController {

    @Autowired
    private StudentService service;
    @Autowired
    private studentRepository studentRepository;

    // 1. SAVE STUDENT WITH IMAGE IN DB

    @PostMapping
    public Student add(@RequestParam("name") String name,
            @RequestParam("fatherName") String fatherName,
            @RequestParam("email") String email,
            @RequestParam("mobile") String mobile,
            @RequestParam("age") LocalDate age,
            @RequestParam("course") String course,
            @RequestParam("address") String address,
            @RequestParam("image") MultipartFile file) throws IOException {

        Student student = new Student();
        if (file != null && !file.isEmpty()) {
            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";

            File folder = new File(uploadDir);
            if (!folder.exists()) {
                folder.mkdir();
            }
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            File destination = new File(folder, fileName);

            file.transferTo(destination);

            student.setName(name);
            student.setFatherName(fatherName);
            student.setEmail(email);
            student.setMobile(mobile);
            student.setAge(age);
            student.setCourse(course);
            student.setAddress(address);
            Random m = new Random();
            int a = m.nextInt(999999);
            String rollNo = String.valueOf(a);
            student.setRoll(rollNo);
            student.setImage("uploads/" + fileName);
        }
        return service.saveStudent(student);
    }

    // 2. GET ALL STUDENTS
    @GetMapping
    public List<Student> getStudent() {
        return service.getAllStudent();
    }

    @GetMapping("/{id}")
    public Student getStudent(@PathVariable int id) {

        return studentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student Not Found"));

    }

    // 3. UPDATE STUDENT WITH IMAGE IN DB
    @PutMapping("/update/{id}")
    public Student updateStudent(@PathVariable int id,
            @RequestParam("name") String name,
            @RequestParam("fatherName") String fatherName,
            @RequestParam("email") String email,
            @RequestParam("mobile") String mobile,
            @RequestParam("age") LocalDate age,
            @RequestParam("course") String course,
            @RequestParam("address") String address,
            @RequestParam(value = "image", required = false) MultipartFile file) throws IOException {

        Student oldStudent = service.getStudentById(id);

        oldStudent.setName(name);
        oldStudent.setFatherName(fatherName);
        oldStudent.setEmail(email);
        oldStudent.setMobile(mobile);
        oldStudent.setAge(age);
        oldStudent.setCourse(course);
        oldStudent.setAddress(address);
        // Agar nayi image upload ki gayi hai toh hi update karein

        if (file != null && !file.isEmpty()) {
            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";

            File folder = new File(uploadDir);
            if (!folder.exists()) {
                folder.mkdir();
            }
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            File destination = new File(folder, fileName);

            file.transferTo(destination);
            oldStudent.setImage("uploads/" + fileName);

        }

        return service.saveStudent(oldStudent);
    }

    @GetMapping("/search/{keyword}")
    public List<Student> searchStudents(@PathVariable String keyword) {
        return service.searchStudents(keyword);
    }

    @GetMapping("/roll/{roll}")
    public ResponseEntity<Student> getMethodName(@PathVariable String roll) {
        return studentRepository.findByRoll(roll)
                .map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

    // 4. DELETE STUDENT
    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        service.deleteStudent(id);
        return "Deleted Successfully";
    }
}