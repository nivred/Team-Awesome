
USE memory_db;

INSERT INTO users (user_name, user_password, user_email) VALUES ('admin', 'nimda', 'admin@admin');

INSERT INTO themes (descr, author, game_level) VALUES ('Zombies', 1, 'normal');
INSERT INTO themes (descr, author) VALUES ('Other', 1);

INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 1', 1, ('../../client/public/assets/img/zombie1.jpg'), '../client/public/assets/img/zombie1.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 2', 1, ('../../client/public/assets/img/zombie2.jpg'), '../client/public/assets/img/zombie2.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 3', 1, ('../../client/public/assets/img/zombie3.jpg'), '../client/public/assets/img/zombie3.jpg');

INSERT INTO scores (user_id, theme_id, flip_speed, card_count) VALUES (1, 1, 2, 8);

