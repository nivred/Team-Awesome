
USE memory_db;

INSERT INTO users (user_name, user_password, user_email) VALUES ('admin', 'nimda', 'admin@admin');

INSERT INTO themes (descr, author, game_level) VALUES ('Zombies', 1, 'normal');

INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 1', 1, LOAD_FILE('../../client/public/assets/images/zombie1.jpg'), './assets/images/zombie1.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 2', 1, LOAD_FILE('../../client/public/assets/images/zombie2.jpg'), './assets/images/zombie2.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 3', 1, LOAD_FILE('../../client/public/assets/images/zombie3.jpg'), './assets/images/zombie3.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 4', 1, LOAD_FILE('../../client/public/assets/images/zombie4.jpg'), './assets/images/zombie4.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 5', 1, LOAD_FILE('../../client/public/assets/images/zombie5.jpg'), './assets/images/zombie5.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 6', 1, LOAD_FILE('../../client/public/assets/images/zombie6.jpg'), './assets/images/zombie6.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 7', 1, LOAD_FILE('../../client/public/assets/images/zombie7.jpg'), './assets/images/zombie7.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 8', 1, LOAD_FILE('../../client/public/assets/images/zombie8.jpg'), './assets/images/zombie8.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 9', 1, LOAD_FILE('../../client/public/assets/images/zombie9.jpg'), './assets/images/zombie9.jpg');
INSERT INTO cards (descr, theme_id, image, image_url) VALUES ('Zombie 10', 1, LOAD_FILE('../../client/public/assets/images/zombie10.jpg'), './assets/images/zombie10.jpg');

INSERT INTO scores (user_id, theme_id, flip_speed, card_count) VALUES (1, 1, 2, 8);

