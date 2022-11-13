# Proyecto_baseDatos

Ejercicio técnico backend, aplicación alquiler de películas.

Datos generales
- Autor del proyecto: Juan Genovard Caballero - Título del proyecto: Proyecto base de datos - Back Películas, alquiler - Fecha: 06/11/2022

Tecnologías y dependencias:
JAVASCRIPT
NODE
NODEMON
SQL
SEQUELIZE
EXPRESS JS
POSTMAN
Descripción general del proyecto
El siguiente ejercicio consiste en el diseño y desarrollo de un backend para un servicio de alquiler de películas. La base de datos para esta aplicación es relacional (SQL) y permite la relación entre las tablas.

Requisitos previos y funcionamiento
El primer paso para poner en funcionamiento el proyecto es clonarlo en nuestro local, siempre con el NODE instalado.

 git clone 'url-del-repositorio'
El segundo paso es instalar las dependencias con el siguiente comando:

 npm install
Por último, arrancamos el servidor utilizando:

 npm run dev
Creación Base de Datos
Introducimos nuestros datos en el archivo /config/config.json (servidor SQL, user, password, database and host) Luego, ejecutamos lo siguiente:

Crear base de datos:

 sequelize db:create
Crear tablas:

 sequelize db:migrate
Crear registros:

 sequelize db:seed:all