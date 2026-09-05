package com.example.student_management.dto;

public class feesResponse {
    private Long id;

    private String roll;
    private String name;
    private String fatherName;
    private String email;
    private String image;
    private String amount;

    public feesResponse(Long id, String roll, String name, String fatherName, String email,
            String image, String amount,
            String status) {
        this.id = id;
        this.roll = roll;

        this.name = name;
        this.fatherName = fatherName;
        this.email = email;
        this.image = image;
        this.amount = amount;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    private String status;

    public feesResponse() {
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

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
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