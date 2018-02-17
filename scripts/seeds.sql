
USE memory_db;

INSERT INTO users (user_name, user_password, user_email) VALUES ('admin', 'nimda', 'admin@admin');

INSERT INTO themes (descr, author, create_date, game_level) VALUES ('Zombies', 1, CURDATE(), 'normal');

INSERT INTO cards (descr, theme_id, image_url) VALUES ('Zombie 1', 1, 'assets/Zombies/1.jpg');
INSERT INTO cards (descr, theme_id, image_url) VALUES ('Zombie 2', 1, 'assets/Zombies/2.jpg');
INSERT INTO cards (descr, theme_id, image_url) VALUES ('Zombie 3', 1, 'assets/Zombies/3.jpg');

