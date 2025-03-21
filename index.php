<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hedreon: Home</title>
    <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico">
    <link rel="stylesheet" href="/assets/css/global.css">
    <link rel="stylesheet" href="/assets/css/index.css">
</head>
<body>
    <noscript>
        <?php
            require("include/banner.php");
            echo banner("Unable to load content because JavaScript is disabled.");
        ?>
    </noscript>
    <?php include("include/header/header.html"); ?>
    <div class="window">
        <div class="titlebar">
            <div class="icon"></div>
            <h3 class="title"></h3>
        </div>
        <div class="content">
            <p class="body">Welcome to my personal website!<br>Above this window, you will find a header filled with (not yet) useful tools and pages I made.</p>
            <p class="signature">- Hedreon.</p>
        </div>
    </div>
    <script src="/assets/js/index.js"></script>
</body>
</html>