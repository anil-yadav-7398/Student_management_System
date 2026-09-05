package com.example.questions_paper.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.questions_paper.model.ExamEntity;
import com.example.questions_paper.repository.ExamRepository;

@Service
public class ExamService {
    @Autowired
    private ExamRepository repository;

    public void saveExam(String course, String semester, String suject, String paperCode, String session, String year,
            String examType, MultipartFile image) throws IOException {
        String uploadDir = "image/";
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            dir.mkdir();
        }
        String fileName = System.currentTimeMillis() + "_" + image.getOriginalFilename();
        Path path = Paths.get(uploadDir + fileName);
        Files.copy(image.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
        ExamEntity entity = new ExamEntity();
        entity.setCourse(course);
        entity.setExamType(examType);
        entity.setPaperCode(paperCode);
        entity.setSemester(semester);
        entity.setSession(session);
        entity.setYear(year);
        entity.setSubject(suject);
        entity.setImage(fileName);
        repository.save(entity);
    }

    public List<ExamEntity> getAll(ExamEntity entity) {
        return repository.findAll();
    }

}
