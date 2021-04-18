CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS books(
  book_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(255) NOT NULL,
  "author" VARCHAR(255) NOT NULL,
  "pages" INT,
  "type" VARCHAR(255),
  "updated_at" TIMESTAMP,
  "created_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS authors(
  author_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "name" VARCHAR(255) NOT NULL,
  "age" INT,
  "first_publication" VARCHAR(255),
  "updated_at" TIMESTAMP,
  "created_at" TIMESTAMP
);

CREATE TABLE IF NOT EXISTS book_authors(
  book_id UUID REFERENCES books(book_id),
  author_id UUID REFERENCES authors(author_id)
);

INSERT INTO books(
    "name", author, pages, "type"
    ) VALUES (
    'Robinson Crusoe', 'Daniel Defoe', 76, 'hard-back'
    );

INSERT INTO books(
    "name", author, pages, "type"
    ) VALUES (
    'Cycle Ki Sawaari', 'Sudarshan', 43, 'paperback'
    );    

ALTER TABLE books DROP COLUMN "author";