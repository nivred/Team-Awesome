### Schema
DROP DATABASE IF EXISTS memory_db;
CREATE DATABASE memory_db;
USE memory_db;

CREATE TABLE users
(
	user_id INT NOT NULL AUTO_INCREMENT,
	user_name VARCHAR(40) NOT NULL,
	user_password VARCHAR(30) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE themes
(
	theme_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(100) NOT NULL,
    author INT,
    create_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    game_level VARCHAR(30) DEFAULT 'custom',
    FOREIGN KEY(author) REFERENCES users(user_id),
    PRIMARY KEY (theme_id) 
);

CREATE TABLE scores
(
	score_id INT NOT NULL AUTO_INCREMENT,
    user_id INT,
	score TIME DEFAULT 0,
    date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    theme_id INT DEFAULT 1,
    flip_speed INT DEFAULT 0,
    card_count INT DEFAULT 12,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(theme_id) REFERENCES themes(theme_id),
    PRIMARY KEY (score_id)
);

CREATE TABLE cards
(
	card_id INT NOT NULL AUTO_INCREMENT,
    descr VARCHAR(100) NOT NULL,
    theme_id INT,
	image BLOB,
    image_url VARCHAR(255),
    FOREIGN KEY(theme_id) REFERENCES themes(theme_id),
	PRIMARY KEY (card_id)
);
