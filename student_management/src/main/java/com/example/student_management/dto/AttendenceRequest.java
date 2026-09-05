package com.example.student_management.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor

public class AttendenceRequest {
    private Long id;
    private LocalDate date;
    private String roll;
    private String status;

    public AttendenceRequest(Long id, LocalDate date, String roll, String status) {
        this.id = id;
        this.date = date;
        this.roll = roll;
        this.status = status;
    }
}
