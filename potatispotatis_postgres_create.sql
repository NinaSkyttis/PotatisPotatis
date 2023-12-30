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
CREATE TABLE public.recipe (
 "_id" serial NOT NULL,
 "title" varchar NOT NULL,
 "url" varchar,
 CONSTRAINT "recipe_pk" PRIMARY KEY ("_id")
);

-- Create the recipes_in_chapters table to represent the many-to-many relationship
CREATE TABLE public.recipes_in_chapters (
 "_id" serial NOT NULL,
 "recipe_id" bigint,
 "collection_id" bigint,
 CONSTRAINT "recipes_in_chapters_pk" PRIMARY KEY ("_id"),
 CONSTRAINT "recipes_in_chapters_recipe_fk" FOREIGN KEY ("recipe_id") REFERENCES public.recipe("_id"),
 CONSTRAINT "recipes_in_chapters_chapters_fk" FOREIGN KEY ("collection_id") REFERENCES public.chapters("_id")
);

-- Insert data into the chapters table
INSERT INTO public.chapters ("title") VALUES ('Desserts');
INSERT INTO public.chapters ("title") VALUES ('Soups');

-- Insert data into the recipe table
INSERT INTO public.recipe ("title", "url") VALUES ('Black Bean Soup', 'https://www.twopeasandtheirpod.com/easy-black-bean-soup/');
INSERT INTO public.recipe ("title", "url") VALUES ('Easy Vegan Picadillo (Cuban-Inspired)', 'https://minimalistbaker.com/easy-vegan-picadillo-cuban-inspired/#wprm-recipe-container-90260');
INSERT INTO public.recipe ("title", "url") VALUES ('Chai Spiced Oatmeal Cookies', 'https://minimalistbaker.com/chai-spiced-oatmeal-cookies/');
INSERT INTO public.recipe ("title", "url") VALUES ('Easy Candy Apple Recipe', 'https://thesuburbansoapbox.com/easy-candy-apple-recipe/');

-- Insert data into the recipes_in_chapters table to associate recipes with chapters
INSERT INTO public.recipes_in_chapters ("recipe_id", "collection_id") VALUES (1, 2);
INSERT INTO public.recipes_in_chapters ("recipe_id", "collection_id") VALUES (2, 2);
INSERT INTO public.recipes_in_chapters ("recipe_id", "collection_id") VALUES (3, 1);
INSERT INTO public.recipes_in_chapters ("recipe_id", "collection_id") VALUES (4, 1);
