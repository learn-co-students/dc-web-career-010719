With a partner/group:

1.  Write the SQL to create tables for Books (id, title, author_id) and Authors (id, name)

CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY, title TEXT, author_id INTEGER);
CREATE TABLE IF NOT EXISTS authors (id INTEGER PRIMARY KEY, name TEXT);

2.  Write the SQL to get all Books

SELECT * FROM books;

3.  Write the SQL to get all Authors

SELECT * FROM authors;

4.  Write the SQL to create a new book, given the title and author id

INSERT INTO books (title, author_id) VALUES ("some_title", 27)

5.  Write the SQL to create a new author, given the author's name
INSERT INTO authors (name) VALUES ("author's name")

6.  Write the SQL to get all Books by a given author, given the author's id

SELECT * FROM books WHERE author_id = SOME NUMBER

7.  Write the SQL to get all Books by a given author, given the author's name

SELECT * FROM books JOIN authors on authors.id = books.author_id WHERE authors.name = "author name"

8.  Write the SQL to update a Book's title

UPDATE books SET title = new_title WHERE book.id = 27
