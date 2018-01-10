# How to set up the project

 1. Clone the project from `https://github.com/Competa-IT/ftsf-webshop.git`

 2. Install [node.js LTS (also known as npm)](https://nodejs.org/en/) on your pc if not already installed

 3. Run `npm install` in the project root folder

 4. Create a `.jsenv` with the correct path to the index of the project. There is a `.jsenv.example` file with the proper syntax.
 
 **In order to manipulate the database you can use [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)**
 
 5. Install php 7.* ([download](http://php.net/downloads.php)) or install xampp or wamp for PHP only
 
 6. Install composer globally [download](https://getcomposer.org/)
 
 7. Run ``composer install`` in the project root folder
 
 8. Run `php artisan key:generate` in the project root folder
 
 9. Open the `MySQL Command Line Client` from the start menu and run ``CREATE DATABASE `ftsf-webshop`;``
 
 10. Change the following values in the `.env` file
     ```ini
     DB_CONNECTION=mysql
     DB_HOST=localhost
     DB_PORT=3306
     DB_DATABASE=ftsf-webshop
     DB_USERNAME=root
     DB_PASSWORD=(your password)
      ```
 
 11. Run `php artisan migrate --seed` in the root folder of the project

 12. Run `php artisan serve` in the root folder to start the webserver
 
 13. Run ``npm run watch`` to start browsersync and the project
 
 ## Troubleshooting
 - ``[PDOException]SQLSTATE[HY000] [2002] Connection refused``
   - Your hostname is wrong OR
   - Your port is wrong OR
   - Your server is not running
   
 - ``[PDOException]SQLSTATE[HY000] [1045] Access denied for user 'XXXX'@'XXX.XXX.XXX.XXX' (using password: NO)``
   - Your password is wrong OR
   - Your username is wrong
