package com.example.student_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_management.dto.AttendenceRequest;
import com.example.student_management.dto.AttendenceResponse;
import com.example.student_management.model.Attendence;
import com.example.student_management.model.Student;
import com.example.student_management.repository.AttendenceRepository;
import com.example.student_management.repository.studentRepository;

@Service
public class AttendenceService {
    @Autowired
    private AttendenceRepository repository;
    @Autowired
    private studentRepository studentRepository;

    public Attendence save(AttendenceRequest request) {
        Student student = studentRepository.findByRoll(request.getRoll())
                .orElseThrow(() -> new RuntimeException("Student not found"));
        Attendence attendence = new Attendence();
        attendence.setDate(request.getDate());
        attendence.setStatus(request.getStatus());
        attendence.setStudent(student);
        return repository.save(attendence);
    }


    public AttendenceResponse getAttendenceById(Long id) {

        return repository.getAttendenceById(id);
    }

    public void deleteAttend(Long id) {
        repository.deleteById(id);
    }
}
