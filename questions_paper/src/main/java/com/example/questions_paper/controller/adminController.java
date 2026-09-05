package com.example.questions_paper.controller;

import com.example.questions_paper.model.ExamEntity;
import com.example.questions_paper.repository.ExamRepository;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.questions_paper.service.ExamService;

import jakarta.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequestMapping("/admin")
public class adminController {
    private final ExamRepository examRepository;
    @Autowired
    private ExamService service;

    adminController(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    @GetMapping("")
    public String fetch(Model m, ExamEntity entity) {
        m.addAttribute("examData", service.getAll(entity));
        return "admin";
    }

    @PostMapping("/saved")
    public String saveAll(@RequestParam("course") String course, @RequestParam("paperCode") String paperCode,
            @RequestParam("examType") String examType, @RequestParam("subject") String subject,
            @RequestParam("session") String session, @RequestParam("year") String year,
            @RequestParam("semester") String semester, @RequestParam("image") MultipartFile image, HttpSession session2)
            throws IOException {
        try {
            service.saveExam(course, semester, subject, paperCode, session, year, examType, image);
            session2.setAttribute("succMsg", " Succesfully save Exam Paper");
        } catch (Exception e) {
            session2.setAttribute("errorMsg", " Exam Paper is not saved");
        }

        return "redirect:/admin";
    }

}
