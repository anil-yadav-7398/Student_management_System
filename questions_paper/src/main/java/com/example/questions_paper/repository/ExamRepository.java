package com.example.questions_paper.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.questions_paper.model.ExamEntity;

@Repository
public interface ExamRepository extends JpaRepository<ExamEntity, Long> {

}