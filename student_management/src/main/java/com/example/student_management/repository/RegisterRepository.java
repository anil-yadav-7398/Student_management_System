package com.example.student_management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.student_management.model.Register;
import java.util.List;


@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {
    Optional<Register> findByEmail(String email);

    boolean existsByEmail(String email);
    

}
