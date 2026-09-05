package com.example.student_management.controller;

import com.example.student_management.dto.LoginRequest;
import com.example.student_management.model.Register;
import com.example.student_management.repository.RegisterRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173/")
public class RegisterController {

    private final AuthenticationManager authenticationManager;
    @Autowired
    private RegisterRepository userRepository;
    @Autowired
    PasswordEncoder encoder;

    RegisterController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/register")
    public Register add(@RequestParam("name") String name,
            @RequestParam("role") String role,
            @RequestParam("password") String password,
            @RequestParam("email") String email,
            @RequestParam("confirmPassword") String confirmPassword,
            @RequestParam("file") MultipartFile file) throws IOException {

        Register student = new Register();
        if (file != null && !file.isEmpty()) {
            String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";

            File folder = new File(uploadDir);
            if (!folder.exists()) {
                folder.mkdir();
            }
            String fileName = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            File destination = new File(folder, fileName);

            file.transferTo(destination);
            student.setImage("uploads/" + fileName);
        } else {
            throw new IllegalArgumentException("Image is not uploaded");
        }
        if (password.equals(confirmPassword)) {

            student.setName(name);
            student.setRole(role);
            student.setEmail(email);
            student.setPassword(encoder.encode(password));

        } else {
            throw new IllegalArgumentException("Password and confirm password do not match");
        }

        return userRepository.save(student);
    }

    @GetMapping("/email/{email}")
    Optional <Register> getMethodName(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }
    
    // LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody LoginRequest request) {

        try {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()));

            Register user = userRepository
                    .findByEmail(request.getEmail())
                    .orElseThrow();

            Map<String, Object> response = new HashMap<>();

            response.put("message", "Login successful");
            response.put("id", user.getId());
            response.put("name", user.getName());
            response.put("email", user.getEmail());
            response.put("role", user.getRole());

            return ResponseEntity.ok(response);

        } catch (org.springframework.security.core.AuthenticationException e) {

            return ResponseEntity
                    .status(HttpStatus.UNAUTHORIZED)
                    .body("Invalid email or password");
        }
    }
}