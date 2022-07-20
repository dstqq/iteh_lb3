<?php
    error_reporting(E_ALL);
   
    $dsn="mysql:host=localhost;dbname = iteh_lb1;charset=utf8";
    $username="root";
    $password="";
    try
    {
        $dbh = new PDO($dsn,$username,$password);
    }
    catch(PDOException $e)
    {
        print "Error!:". $e->getMessage()."<br>";
    die();
    }
    ?>