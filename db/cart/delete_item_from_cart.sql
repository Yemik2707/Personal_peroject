DELETE FROM products_cart_junction 
WHERE cart_id = $1 AND product_id = $2;
SELECT * FROM products_cart_junction pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1;