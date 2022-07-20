<?php
header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');
include('connect.php');
echo '<?xml version="1.0" encoding="utf8" ?>';
echo "<root>";
    $db = "iteh_lb1";

    if (isset($_POST['FYear'])) $FYear = $_POST['FYear'];
    else $FYear = '1990';
    if (isset($_POST['SYear'])) $SYear = $_POST['SYear'];
    else $SYear = '2034';

    try {
        $sql = "SELECT $db.literature.name,$db.literature.year,$db.literature.literate FROM $db.literature WHERE year BETWEEN :FYear and :SYear";
        $sth = $dbh->prepare($sql);
        $sth->execute(array('FYear' => $FYear, 'SYear' => $SYear));
        $timetable = $sth->fetchAll(PDO::FETCH_NUM);
        
        foreach ($timetable as $row) {
            $Name=$row[0];
            $Year=$row[1];
            $literate=$row[2];
            print " <row><Name>$Name</Name><Year>$Year</Year><literate>$literate</literate></row>";
        }
    } catch (PDOException $e) {
        
        die("Error!:" . $e->getMessage() . "<br>");
    }
    echo"</root>";
    ?>
    
