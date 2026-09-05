package com.example.student_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.student_management.dto.feesResponse;
import com.example.student_management.model.Fees;
@Repository
public interface FeesRepository extends JpaRepository<Fees, Long> {

    @Query("""
                SELECT new com.example.student_management.dto.feesResponse(
                a.id,
                    s.roll,
                    s.name,
                    s.fatherName,
                    s.email,
                    s.image,
                    a.amount,
                    a.status
                )
                FROM Fees a
                JOIN a.student s
            """)
    List<feesResponse> getFees();
}
