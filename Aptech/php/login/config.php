<?php
// Database settings: change these to match your MySQL server (XAMPP defaults shown).
const DB_SERVER   = 'localhost';
const DB_USERNAME = 'root';
const DB_PASSWORD = '';
const DB_NAME     = 'db';

// Make mysqli throw exceptions instead of failing silently.
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $conn = new mysqli(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
    $conn->set_charset('utf8mb4');
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    exit('Could not connect to the database. Check the settings in config.php and run schema.sql first.');
}

/** Escape text before printing it into HTML (prevents XSS). */
function e(string $text): string
{
    return htmlspecialchars($text, ENT_QUOTES, 'UTF-8');
}
