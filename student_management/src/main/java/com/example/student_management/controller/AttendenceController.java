package com.example.student_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.student_management.dto.AttendenceRequest;
import com.example.student_management.dto.AttendenceResponse;
import com.example.student_management.model.Attendence;
import com.example.student_management.repository.AttendenceRepository;
import com.example.student_management.service.AttendenceService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/attendence")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class AttendenceController {

    @Autowired
    AttendenceService service;

    @Autowired
    private AttendenceRepository attendenceRepository;

    @PostMapping
    public Attendence markAttendence(@RequestBody AttendenceRequest request) {
        return service.save(request);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getAttendance(@PathVariable Long id) {

        Attendence attendance = attendenceRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found"));

        return ResponseEntity.ok(attendance);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateAttendance(
            @PathVariable Long id,
            @RequestBody Attendence updatedAttendance) {

        Attendence attendance = attendenceRepository
                .findById(id)
                .orElseThrow(() -> new RuntimeException("Attendance not found"));

        attendance.setDate(updatedAttendance.getDate());
        attendance.setStatus(updatedAttendance.getStatus());

        return ResponseEntity.ok(
                attendenceRepository.save(attendance));
    }

    @GetMapping
    public List<AttendenceResponse> getAttendence() {
        return attendenceRepository.getAttendence();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteAttend(@PathVariable Long id) {
        service.deleteAttend(id);
        return "Deleted Successfully";
    }

}