# Use una imagen base que tenga Java instalado
FROM node:latest

RUN apt-get -y install openjdk-21-jre-headless

COPY . /app
# Establece el directorio de trabajo

WORKDIR /src/main/frontend

RUN npm run build

WORKDIR /app

# Construye el archivo JAR de la aplicación
RUN ./mvnw clean install -DskipTests

# Ejecuta la aplicación Spring Boot cuando se inicia el contenedor
CMD ["java", "-jar", "target/main-0.0.1-SNAPSHOT.jar"]

# CMD ["startup.sh"]