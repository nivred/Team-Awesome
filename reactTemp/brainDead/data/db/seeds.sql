
USE memory_db;

INSERT INTO users (user_name, user_password, user_email) VALUES ('admin', 'nimda', 'admin@admin');

INSERT INTO themes (descr, author, game_level) VALUES ('Zombies', 1, 'normal');

INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 1', 1, ('../../client/public/assets/img/zombie1.jpg'), '../client/public/assets/img/zombie1.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 2', 1, ('../../client/public/assets/img/zombie2.jpg'), '../client/public/assets/img/zombie2.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 3', 1, ('../../client/public/assets/img/zombie3.jpg'), '../client/public/assets/img/zombie3.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 4', 1, ('../../client/public/assets/img/zombie4.jpg'), '../client/public/assets/img/zombie1.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 5', 1, ('../../client/public/assets/img/zombie5.jpg'), '../client/public/assets/img/zombie2.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 6', 1, ('../../client/public/assets/img/zombie6.jpg'), '../client/public/assets/img/zombie3.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 7', 1, ('../../client/public/assets/img/zombie7.jpg'), '../client/public/assets/img/zombie3.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 8', 1, ('../../client/public/assets/img/zombie8.jpg'), '../client/public/assets/img/zombie2.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 9', 1, ('../../client/public/assets/img/zombie9.jpg'), '../client/public/assets/img/zombie3.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 10', 1, ('../../client/public/assets/img/zombie10.jpg'), '../client/public/assets/img/zombie3.jpg');

INSERT INTO scores (user_id, theme_id, flip_speed, card_count) VALUES (1, 1, 2, 8);

