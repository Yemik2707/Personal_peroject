DROP TABLE IF EXISTS products_cart_Junction;
DROP TABLE IF EXISTS carts;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users ( 
user_id SERIAL PRIMARY KEY
first_name  VARCHAR (100)
last_name VARCHAR (100)
email VARCHAR (100)
password VARCHAR (2000)
);

CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
product_name VARCHAR(100),
product_price INT
product_image VARCHAR(2000)
);


CREATE TABLE carts 
cart_id  SERIAL PRIMARY KEY,
user_id INT REFERENCES users(user_id),
active  BOOLEAN
);

CREATE TABLE products_cart_junction (
product_cart_id SERIAL PRIMARY KEY,
cart_id INT REFERENCES carts(cart_id),
product_id INT REFERENCES products (product_id),
quantity INT
);
