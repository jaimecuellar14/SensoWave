# SensoWave

A continuación la solución planteada al ejercicio de SensoWave

Se diseño la página web con Angular + Angular Material.
Ademas de esto se hizo un despliegue en un bucket de aws s3.

[SensoWave S3](http://sensowave.s3-website.eu-central-1.amazonaws.com/home "Bucket S3")

## Docker

De la misma forma se realizo un contenedor con la imagen de la aplicacion Angular.

El comando para hacer pull de la imagen es el siguiente:

    docker pull jaimec14/sensowave:latest


Luego de descargar el repositorio de docker hub, se utiliza el siguiente comando para poder correr la app localmente.

    docker run --rm -d -p 80:80/tcp jaimec14/sensowave:latest

Al terminar la ejecucion de ese comando el proyecto ya seria visible desde localhost:80




