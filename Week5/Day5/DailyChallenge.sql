--Part 1

-- CREATE TABLE Customer (
-- 	id SERIAL PRIMARY KEY,
-- 	first_name VARCHAR(100) NOT NULL,
-- 	last_name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE CustomerProfile (
-- 	id SERIAL PRIMARY KEY,
-- 	isLoggedIn BOOLEAN DEFAULT false,
-- 	customer_id INT UNIQUE REFERENCES Customer(id)
-- );

-- INSERT INTO Customer (first_name, last_name)
-- VALUES
-- ('John', 'Doe'),
-- ('Jerome', 'lalu'),
-- ('Lea', 'Rive');

-- INSERT INTO CustomerProfile (isLoggedIn, customer_id)
-- VALUES (
--     true,
--     (SELECT id FROM Customer WHERE first_name = 'John')
-- );

-- INSERT INTO CustomerProfile (isLoggedIn, customer_id)
-- VALUES (
--     false,
--     (SELECT id FROM Customer WHERE first_name = 'Jerome')
-- );

-- SELECT c.first_name FROM Customer c
-- JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = true;

-- SELECT c.first_name, cp.isLoggedIn FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id;

-- SELECT COUNT(*) AS not_logged_in_count FROM Customer c
-- LEFT JOIN CustomerProfile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = false OR cp.isLoggedIn IS NULL;

--Part 2

-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(200) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );

-- INSERT INTO Book (title, author)
-- VALUES
-- ('Alice In Wonderland', 'Lewis Carroll'),
-- ('Harry Potter', 'J.K Rowling'),
-- ('To kill a mockingbird', 'Harper Lee')

-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(100) NOT NULL UNIQUE,
--     age INT CHECK (age <= 15)
-- );

-- INSERT INTO Student (name, age)
-- VALUES
-- ('John', 12),
-- ('Lera', 11),
-- ('Patrick', 10),
-- ('Bob', 14);

-- CREATE TABLE Library (
--     book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'John'),
--     '2022-02-15'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-03-03'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--     (SELECT student_id FROM Student WHERE name = 'Lera'),
--     '2021-05-23'
-- );

-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES (
--     (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
--     (SELECT student_id FROM Student WHERE name = 'Bob'),
--     '2021-08-12'
-- );

-- SELECT s.name, b.title FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;

-- SELECT AVG(s.age) AS avg_age FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- DELETE FROM Student WHERE name = 'Bob';