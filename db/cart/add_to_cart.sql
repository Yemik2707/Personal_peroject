INSERT INTO products_cart_Junction
(cart_id, product_id, quantity)
VALUES 
($1, $2, 1);
SELECT * FROM products_cart_junction pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1;