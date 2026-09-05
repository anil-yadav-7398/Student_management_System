package com.example.student_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.student_management.dto.AttendenceResponse;
import com.example.student_management.model.Attendence;

@Repository
public interface AttendenceRepository extends JpaRepository<Attendence, Long> {

    @Query("""
                SELECT new com.example.student_management.dto.AttendenceResponse(
                a.id,
                a.date,
                    s.roll,
                    s.name,
                    s.fatherName,
                    s.email,
                    s.image,
                    a.status
                )
                FROM Attendence a
                JOIN a.student s
            """)
    List<AttendenceResponse> getAttendence();

    AttendenceResponse getAttendenceById(Long id);

}