# Proyecto_baseDatos

 Aquí os presento mi proyecto para esta semana en el que hemos realizado una base de datos utilizando las siguientes herramientas:
 
 # Inicializar servicio mysql

 docker compose up -d
 npm run dev

 # Herramientas

-JAVASCRIPT
-NODE
-NODEMON
-SQL
-SEQUELIZE
-EXPRESS JS
-POSTMAN

# Descripción

En este proyecto se nos ha pedido que hagamos una base de datos y que las tablas tengan relación entre sí, cosa que he ido comprobando en el "workbench".

Lo primero que he hecho es crear una modelo para cada tabla, de este modo, al crear las tablas sabremos que parámetros necesitamos.
A continuación he generado otra tabla con las mismas características la cual va a ser migrada a la base de datos y la que nos servirá de guía para hacer los "seeaders".
En la tercera tabla he utilizado las características de las dos tablas anteriores para darle los parámetros correspondientes.
Y para finalizar he creado los "endpoinds" necesarios que requería el proyecto.

# Requisitos previos y funcionamiento

El primer paso para poner en funcionamiento el proyecto es clonarlo en nuestro local, siempre con el NODE instalado.

 git clone 'url-del-repositorio'
El segundo paso es instalar las dependencias con el siguiente comando:

npm init
npm install
npm update
npm run dev
npm run start

npm install cors jsonwebtoken bcrypt
sequelize model:generate --name user --attributes name:string, password:string, email:string
sequelize db:create
sequelize db:migrate

sequelize db:migrate:undo
sequelize db:migrate:undo:all

sequelize seed:generate --name demo-user
sequelize db:seed:all
sequelize db:seed:undo
sequelize db:seed:undo:all

# End-points

Register
POST - localhost:3002/auth/nuevousuario - { "nombre": "Miguel", "email": "Miguel@email.com",  "contraseña": "contraseña" }
En caso de querer loguear posteriormente un usuario adim para que pueda realizar ciertas consultas, introducir en el body:
{ "nombre": "Miguel", "email": "Miguel@email.com",  "contraseña": "contraseña", "id_rol": 1 }

Login

POST - localhost:3002/auth/login - { "email": "Miguel@email.com",  "contraseña": "contraseña" }

Home

GET - localhost:3002

Movies

GET - localhost:3002/Peliculas/

GET - localhost:3002/Peliculas/id/:id

GET - localhost:3002/Peliculas/titulo/:titulo

GET - localhost:3002/Peliculas/genero/:genero

Series

GET - localhost:3002/Series/

GET - localhost:3002/Series/topseries

GET - localhost:3002/Series/titulo/:titulo

GET - localhost:3002/Series/upcoming

GET - localhost:3002/Series/cines

 
 # Relacion entre tablas

![Tablas](https://user-images.githubusercontent.com/114061110/201538933-48aa1fec-6656-4436-9c2c-eb2c4a6fbd13.png)



# Autor:

 Juan Genovard Caballero.
