package com.example.student_management.dto;

public class feesRequest {
    private Long id;

    private String roll;
    private String amount;
    private String status;

    public feesRequest(Long id, String amount, String roll, String status) {
        this.id = id;

        this.amount = amount;
        this.roll = roll;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
