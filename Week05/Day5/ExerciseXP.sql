--Exercise 1

--SELECT * FROM language;

--SELECT f.title, f.description, l.name AS langauge FROM film f JOIN language l ON f.language_id = l.language_id;

--SELECT f.title, f.description, l.name AS language FROM language l LEFT JOIN film f ON f.language_id = l.language_id;

-- New film table already exists so skipped step 4

-- INSERT INTO new_film (name) VALUES
-- ('Inception'),
-- ('The Matrix'),
-- ('Interstellar');

-- CREATE TABLE customer_review (
--     review_id SERIAL PRIMARY KEY,
--     film_id INTEGER NOT NULL,
--     language_id INTEGER NOT NULL,
--     title VARCHAR(100),
--     score INTEGER CHECK (score BETWEEN 1 AND 10),
--     review_text TEXT,
--     last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--     FOREIGN KEY (language_id) REFERENCES language(language_id)
-- );

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
-- (1, 1, 'Unbelievable experience', 9, 'Inception is visually appealling.'),
-- (2, 2, 'Revolución digital', 8, 'La Matrix cambió el cine de ciencia ficción.');

--DELETE FROM new_film WHERE id = 1;

--SELECT * FROM customer_review;

--Exercise 2

--UPDATE film SET language_id = 2 WHERE language_id = 1 AND film_id < 10;

-- SELECT
--     tc.constraint_name, kcu.column_name, 
--     ccu.table_name AS foreign_table, ccu.column_name AS foreign_column
-- FROM  information_schema.table_constraints AS tc 
--     JOIN information_schema.key_column_usage AS kcu
--       ON tc.constraint_name = kcu.constraint_name
--     JOIN information_schema.constraint_column_usage AS ccu
--       ON ccu.constraint_name = tc.constraint_name
-- WHERE tc.table_name = 'customer' AND tc.constraint_type = 'FOREIGN KEY';

--DROP TABLE customer_review;

--SELECT COUNT(*) FROM rental WHERE return_date IS NULL;

-- SELECT f.title, f.replacement_cost FROM rental r 
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE r.return_date IS NULL ORDER BY f.replacement_cost DESC LIMIT 30;

-- SELECT f.title FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
-- AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%');

-- SELECT title, length, rating FROM film WHERE length < 60 AND rating = 'R';

-- SELECT DISTINCT f.title FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN payment p ON c.customer_id = p.customer_id AND r.rental_id = p.rental_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan' AND p.amount > 4 AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

-- SELECT DISTINCT f.title, f.replacement_cost FROM customer c
-- JOIN rental r ON c.customer_id = r.customer_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
--   AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%') ORDER BY f.replacement_cost DESC;