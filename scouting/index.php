<?php
header('Access-Control-Allow-Origin: *'); header("Content-Type: application/json; charset=UTF-8");
$myfile = fopen("/tmp/newfile2.txt", "a+") or die("Unable to open file!");
$txt = $_POST["data"];
//file_get_contents('php://input');
echo $txt;
fwrite($myfile, $txt);
fwrite($myfile, "\r\n");
fclose($myfile);
?>
