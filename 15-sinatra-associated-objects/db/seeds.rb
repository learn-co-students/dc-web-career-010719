Book.destroy_all
Author.destroy_all

GoogleBooks::Adapter.new("Roald Dahl").fetch_books
GoogleBooks::Adapter.new("Beverly Cleary").fetch_books
GoogleBooks::Adapter.new("Madeline L'Engle").fetch_books