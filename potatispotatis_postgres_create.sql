SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


-- Create the chapters table
CREATE TABLE public.chapters (
 "_id" serial NOT NULL,
 "title" varchar NOT NULL,
 CONSTRAINT "chapters_pk" PRIMARY KEY ("_id")
);

-- Create the recipe table
CREATE TABLE public.recipes (
 "_id" serial NOT NULL,
 "title" varchar NOT NULL,
 "url" varchar,
 CONSTRAINT "recipe_pk" PRIMARY KEY ("_id")
);


-- Create the recipes_in_chapters table to represent the many-to-many relationship
CREATE TABLE public.recipes_in_chapters (
 "_id" serial NOT NULL,
 "recipe_id" bigint,
 "chapter_id" bigint,
 CONSTRAINT "recipes_in_chapters_pk" PRIMARY KEY ("_id"),
 CONSTRAINT "recipes_in_chapters_recipe_fk" FOREIGN KEY ("recipe_id") REFERENCES public.recipes("_id"),
 CONSTRAINT "recipes_in_chapters_chapters_fk" FOREIGN KEY ("chapter_id") REFERENCES public.chapters("_id")
);

INSERT INTO public.chapters	("title") VALUES ('Vegan Dinner under 30 minutes');
INSERT INTO public.chapters	("title") VALUES ('Weekend Brunch');
INSERT INTO public.chapters	("title") VALUES ('Hearty Soups');
INSERT INTO public.chapters	("title") VALUES ('Toddler Friendly Meals');


INSERT INTO public.recipes ("title", "url") VALUES ('Super Garlicky Tomato Soup with Smashed White Beans', 'https://minimalistbaker.com/super-garlicky-tomato-soup-with-smashed-white-beans/');
INSERT INTO public.recipes ("title", "url") VALUES ('Curried Butternut Squash Soup', 'https://minimalistbaker.com/curried-butternut-squash-soup/');
INSERT INTO public.recipes ("title", "url") VALUES ('Creamy Vegan Pesto Pasta', 'https://minimalistbaker.com/creamy-vegan-pesto-pasta/');
INSERT INTO public.recipes ("title", "url") VALUES ('20-Minute Mac and Cheese', 'https://minimalistbaker.com/20-minute-mac-and-cheese-vegan/');
INSERT INTO public.recipes ("title", "url") VALUES ('Easy Grilled Tofu & Asparagus', 'https://simple-veganista.com/grilled-tofu-asparagus-ginger-cauliflower-rice/');
INSERT INTO public.recipes ("title", "url") VALUES ('French Toast', 'https://theplantbasedschool.com/vegan-french-toast/');

INSERT INTO public.recipes ("title", "url") VALUES ('Homemade Granola', 'https://theplantbasedschool.com/homemade-granola/');
INSERT INTO public.recipes ("title", "url") VALUES ('Easy Oat Cookies with Raisins', 'https://theplantbasedschool.com/oat-cookies/');
INSERT INTO public.recipes ("title", "url") VALUES ('Southern Blackberry Cobbler', 'https://simple-veganista.com/blackberry-cobbler/');
INSERT INTO public.recipes ("title", "url") VALUES ('Chocolate Smoothie Bowl', 'https://simple-veganista.com/blackberry-cobbler/');
INSERT INTO public.recipes ("title", "url") VALUES ('Vegan Tater Tot Casserole', 'https://www.veganblueberry.com/vegan-tater-tot-casserole/');
INSERT INTO public.recipes ("title", "url") VALUES ('Spaghetti and "Meatballs"', 'https://jessicainthekitchen.com/vegan-spaghetti-and-meatballs/');

INSERT INTO public.recipes ("title", "url") VALUES ('Lentil Soup', 'https://simple-veganista.com/hearty-lentil-soup/');
INSERT INTO public.recipes ("title", "url") VALUES ('Spicy Sesame Carrot Soup with Red Lentils', 'https://thefirstmess.com/2021/09/08/spicy-sesame-carrot-soup/');
INSERT INTO public.recipes ("title", "url") VALUES ('Creamy Vegan Pasta', 'https://www.loveandlemons.com/vegan-recipes/');





INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 4); -- toddler friendly meals

INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (1, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (2, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (3, 1); -- vegan dinner under 30 minutes pesto pasta
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (4, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (5, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (6, 2); -- weekend brunch french toast
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (7, 2); -- weekend brunch Homemade granola
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (8, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (9, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (10, 4); -- toddler friendly meals tater tot
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (11, 4); -- toddler friendly meals
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (12, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (13, 3); -- hearty soups carrot soup
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (14, 1); -- vegan dinner under 30 minutes



-- Insert data into the chapters table
-- INSERT INTO public.chapters ("title") VALUES ('Desserts');
-- INSERT INTO public.chapters	("title") VALUES ('Vegan Dinner under 30 minutes')
-- INSERT INTO public.chapters	("title") VALUES ('Weekend Brunch')
-- INSERT INTO public.chapters	("title") VALUES ('Hearty Soups')
-- INSERT INTO public.chapters	("title") VALUES ('Toddler Friendly Meals')


-- Insert data into the recipe table
-- INSERT INTO public.recipes ("title", "url") VALUES ('Black Bean Soup', 'https://www.twopeasandtheirpod.com/easy-black-bean-soup/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Easy Vegan Picadillo (Cuban-Inspired)', 'https://minimalistbaker.com/easy-vegan-picadillo-cuban-inspired/#wprm-recipes-container-90260');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Chai Spiced Oatmeal Cookies', 'https://minimalistbaker.com/chai-spiced-oatmeal-cookies/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Easy Candy Apple Recipe', 'https://thesuburbansoapbox.com/easy-candy-apple-recipe/');

-- INSERT INTO public.recipes ("title", "url") VALUES ('Super Garlicky Tomato Soup with Smashed White Beans', 'https://minimalistbaker.com/super-garlicky-tomato-soup-with-smashed-white-beans/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Curried Butternut Squash Soup', 'https://minimalistbaker.com/curried-butternut-squash-soup/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Creamy Vegan Pesto Pasta', 'https://minimalistbaker.com/creamy-vegan-pesto-pasta/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('20-Minute Mac and Cheese', 'https://minimalistbaker.com/20-minute-mac-and-cheese-vegan/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Easy Grilled Tofu & Asparagus', 'https://simple-veganista.com/grilled-tofu-asparagus-ginger-cauliflower-rice/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('French Toast', 'https://theplantbasedschool.com/vegan-french-toast/');

-- INSERT INTO public.recipes ("title", "url") VALUES ('Homemade Granola', 'https://theplantbasedschool.com/homemade-granola/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Easy Oat Cookies with Raisins', 'https://theplantbasedschool.com/oat-cookies/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Southern Blackberry Cobbler', 'https://simple-veganista.com/blackberry-cobbler/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Chocolate Smoothie Bowl', 'https://simple-veganista.com/blackberry-cobbler/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Vegan Tater Tot Casserole', 'https://www.veganblueberry.com/vegan-tater-tot-casserole/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Spaghetti and "Meatballs"', 'https://jessicainthekitchen.com/vegan-spaghetti-and-meatballs/');

-- INSERT INTO public.recipes ("title", "url") VALUES ('Lentil Soup', 'https://simple-veganista.com/hearty-lentil-soup/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Spicy Sesame Carrot Soup with Red Lentils', 'https://thefirstmess.com/2021/09/08/spicy-sesame-carrot-soup/');
-- INSERT INTO public.recipes ("title", "url") VALUES ('Creamy Vegan Pasta', 'https://www.loveandlemons.com/vegan-recipes/');



-- Insert data into the recipes_in_chapters table to associate recipes with chapters
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (0, 4); -- toddler friendly meals

INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (1, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (2, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (3, 1); -- vegan dinner under 30 minutes pesto pasta
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (4, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (5, 1); -- vegan dinner under 30 minutes
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (6, 2); -- weekend brunch french toast
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (7, 2); -- weekend brunch Homemade granola
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (8, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (9, 2); -- weekend brunch
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (10, 4); -- toddler friendly meals tater tot
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (11, 4); -- toddler friendly meals
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (12, 3); -- hearty soups 
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (13, 3); -- hearty soups carrot soup
INSERT INTO public.recipes_in_chapters ("recipe_id", "chapter_id") VALUES (14, 1); -- vegan dinner under 30 minutes

