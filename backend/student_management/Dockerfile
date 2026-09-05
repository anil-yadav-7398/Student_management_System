FROM eclips-temurin:24-jdk
    WORKEDIR/app
    COPY..
    RUN chmod +x mvnw
    RUN ./mvnw clean install -DskipTests
    CMD ["java", "-jar", "target/student_management-0.0.1-SNAPSHOT.jar"]
