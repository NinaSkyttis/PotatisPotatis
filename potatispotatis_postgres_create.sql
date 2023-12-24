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



CREATE TABLE public.recipe (
	"_id" serial NOT NULL,
	"title" varchar NOT NULL,
	"url" varchar,
	"collection_id" bigint,
	CONSTRAINT "recipe_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.recipes_in_collections (
	"_id" serial NOT NULL,
	"recipe_id" bigint,
	"collection_id" bigint,
	CONSTRAINT "recipes_in_collections_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.collections (
	"_id" serial NOT NULL,
	"title" varchar,
	CONSTRAINT "collections_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.recipe ("title", "url", "collection_id") VALUES ('Black Bean Soup', 'https://www.twopeasandtheirpod.com/easy-black-bean-soup/', 2);
INSERT INTO public.recipe ("title", "url", "collection_id") VALUES ('Easy Vegan Picadillo (Cuban-Inspired)', 'https://minimalistbaker.com/easy-vegan-picadillo-cuban-inspired/#wprm-recipe-container-90260', 2);
INSERT INTO public.recipe ("title", "url", "collection_id") VALUES ('Chai Spiced Oatmeal Cookies', 'https://minimalistbaker.com/chai-spiced-oatmeal-cookies/', 1);
INSERT INTO public.recipe ("title", "url", "collection_id") VALUES ('Easy Candy Apple Recipe', 'https://thesuburbansoapbox.com/easy-candy-apple-recipe/', 1);




 INSERT INTO public.collections VALUES ('Desserts');
 INSERT INTO public.collections VALUES ('Soups');
 