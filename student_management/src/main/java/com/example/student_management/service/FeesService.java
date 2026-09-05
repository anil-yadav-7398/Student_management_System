package com.example.student_management.service;

import com.example.student_management.repository.AttendenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.student_management.dto.feesRequest;

import com.example.student_management.model.Fees;
import com.example.student_management.model.Student;
import com.example.student_management.repository.FeesRepository;
import com.example.student_management.repository.studentRepository;

@Service
public class FeesService {
    private final AttendenceRepository attendenceRepository;
    @Autowired
    FeesRepository feesRepository;
    @Autowired
    studentRepository studentRepository;

    FeesService(AttendenceRepository attendenceRepository) {
        this.attendenceRepository = attendenceRepository;
    }

    public Fees save(feesRequest request) {
        Student student = studentRepository.findByRoll(request.getRoll())
                .orElseThrow(() -> new RuntimeException("Student not found"));
        Fees fees = new Fees();
        fees.setAmount(request.getAmount());
        fees.setStatus(request.getStatus());
        fees.setStudent(student);
        return feesRepository.save(fees);
    }

   
    public void deletefees(Long id) {
        feesRepository.deleteById(id);
    }

}
