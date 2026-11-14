-- Run this once (for example in phpMyAdmin) to create the database and users table.
CREATE DATABASE IF NOT EXISTS db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE db;

CREATE TABLE IF NOT EXISTS users (
    id            INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email         VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,  -- never store plain-text passwords
    created_at    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
