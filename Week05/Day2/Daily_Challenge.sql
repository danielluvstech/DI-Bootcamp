/*UPDATE actors
SET first_name = 'Unknown'
WHERE first_name IS NULL;

UPDATE actors
SET last_name = 'Unknown'
WHERE last_name IS NULL;*/

--SELECT * FROM actors;
--SELECT COUNT(*) FROM actors;

INSERT INTO actors (first_name, last_name)
VALUES ('Brad', NULL,);
