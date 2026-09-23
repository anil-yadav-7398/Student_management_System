FROM eclipse-temurin:24-jdk

WORKDIR /student_management

COPY . .

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["sh", "-c", "java -jar target/*.jar"]