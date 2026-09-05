package com.example.student_management.dto;

import java.time.LocalDate;

public class AttendenceResponse {
    private Long id;

    private LocalDate date;
    private String roll;
    private String name;
    private String fatherName;
    private String email;
    private String image;
    private String status;

    public AttendenceResponse() {
    }

    public AttendenceResponse(Long id, LocalDate date,
            String roll,
            String name,
            String fatherName,
            String email,
            String image,
            String status) {
        this.id = id;
        this.date = date;
        this.roll = roll;
        this.name = name;
        this.fatherName = fatherName;
        this.email = email;
        this.image = image;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}