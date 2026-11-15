<?php
    if (strpos($_SERVER['HTTP_USER_AGENT'], 'facebook') !== FALSE || strpos($_SERVER['HTTP_USER_AGENT'], 'discord') !== FALSE) {
        header('Location: https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        die();
    }
    header('Location: https://johnwesthoff.com/blorg/rickroll');
    die();
?>
