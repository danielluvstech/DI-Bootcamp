-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- )

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar')

--SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- )

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL)

--SELECT * FROM SecondTab

--SELECT COUNT(*) 
--FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL ) 
/* If the ID is NULL, it will be unknown, and therefore not present a number.*/
/*OUTPUT: 0*/

--SELECT COUNT(*) 
--FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 ) 
/* If we are getting a count of the id tabs in the first one, 5 is filtered out and NULL doesn't have a value, which only leaves 6 and 7. So it should return the number 2.*/
/* OUTPUT: 2*/

--SELECT COUNT(*) 
--FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab ) 
/* Here the output should return 5.*/
/* OUTPUT: 0*/

--SELECT COUNT(*) 
--FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL ) 
/* This is similar to Q2, which I'll stick with the same assumption of returning the number 2.*/
/*OUTPUT: 2*/