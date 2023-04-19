SELECT *
FROM role
JOIN department ON department_id = role.department_id

SELECT
 role.title AS name, role_id
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;


SELECT *
FROM role
JOIN role_id ON department_id = role.department_id

