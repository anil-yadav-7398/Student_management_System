# -----------------------------
# Stage 1: Build Stage
# -----------------------------
FROM eclipse-temurin:17-jdk-jammy AS build
WORKDIR /student_management

# Maven Wrapper aur dependencies cache karne ke liye files copy karein
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Maven script ko executable permission dein aur dependencies download karein
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline -B

# Project ka source code copy karein
COPY src ./src

# Application package karein (tests skip karke)
RUN ./mvnw clean package -DskipTests

# -----------------------------
# Stage 2: Runtime Stage
# -----------------------------
FROM eclipse-temurin:17-jre-jammy
WORKDIR /student_management

# Build stage se final jar file copy karein
COPY --from=build /app/target/*.jar student_management.jar

# Render default port
EXPOSE 8080

# Application run command
ENTRYPOINT ["java", "-jar", "student_management.jar"]