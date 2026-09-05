package com.example.questions_paper.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Exam_paper")
public class ExamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String course;
    private String semester;
    private String subject;
    private String paperCode;
    private String session;
    private String year;
    private String examType;
    private String image;
}
