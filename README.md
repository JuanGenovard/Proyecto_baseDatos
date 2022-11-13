# Proyecto_baseDatos

 Aquí os presento mi proyecto para esta semana en el que hemos realizado un base de datos utilizando las siguientes herramientas:

-JAVASCRIPT
-NODE
-NODEMON
-SQL
-SEQUELIZE
-EXPRESS JS
-POSTMAN

En este proyecto se nos ha pedido que hagamos una base de datos y que las tablas tengan relación entre sí, cosa que he ido comprobando en el "workbench".

Lo primero que he hecho es crear una modelo para cada tabla, de este modo, al crear las tablas sabremos que parámetros necesitamos.
A continuación he generado otra tabla con las mismas características la cual va a ser migrada a la base de datos y la que nos servirá de guía para hacer los "seeaders".
En la tercera tabla he utilizado las características de las dos tablas anteriores para darle los parámetros correspondientes.
Y para finalizar he creado los "endpoinds" necesarios que requería el proyecto.

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


![Tablas relacionadas](../../Tablas.png)


Autor: Juan Genovard Caballero.