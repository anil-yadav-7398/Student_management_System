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

import com.example.student_management.dto.feesRequest;
import com.example.student_management.dto.feesResponse;
import com.example.student_management.model.Fees;

import com.example.student_management.repository.FeesRepository;

import com.example.student_management.service.FeesService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/fees")
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class FeesController {
    @Autowired
    FeesService feesService;

    @Autowired
    FeesRepository repository;

    @PostMapping
    public Fees FeesSave(@RequestBody feesRequest request) {

        return feesService.save(request);
    }

    @PutMapping("update/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Fees request) {
        // TODO: process PUT request
        Fees fees = repository.findById(id).orElseThrow(() -> new RuntimeException("Fees not found by id" + id));

        fees.setAmount(request.getAmount());
        fees.setStatus(request.getStatus());
        Fees saved = repository.save(fees);
        return ResponseEntity.ok(saved);
    }

    @GetMapping
    public List<feesResponse> allFess() {
        return repository.getFees();
    }

    @GetMapping("/{id}")
    public Fees getStudent(@PathVariable Long id) {

        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student Not Found"));

    }

    @DeleteMapping("/delete/{id}")
    public String deletefees(@PathVariable Long id) {
        feesService.deletefees(id);
        return "Deleted Successfully";
    }

}
