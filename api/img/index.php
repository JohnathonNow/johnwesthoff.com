<?php
if ($_GET['key'] != 'iojerlwjm4n3nvejbkd') { die(); }
$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'GET'
    ],
];

$context = stream_context_create($options);
$result = file_get_contents($_GET['url'], false, $context);
header('Content-Type: image/webp');
echo $result;
?>
