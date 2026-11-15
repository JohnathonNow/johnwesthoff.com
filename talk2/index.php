<?php
    if(isset($_GET["a"])) {
        if ($_GET["a"] == 0) {
            header('Location: https://www.youtube.com/watch?v=dQw4w9WgXcQ');
        } else {
            header('Location: https://www.johnwesthoff.com/talk2?a=' . ($_GET["a"] - 1));
        }
    } else {
        header('Location: https://www.johnwesthoff.com/talk2?a=5');
    }
    die();
?>
