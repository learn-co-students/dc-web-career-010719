class BooksController < ApplicationController

    set :views, "app/views/books"

    get "/books" do
        @books = Book.all
        erb :index
    end

    get "/books/new" do 
        erb :new
    end

    get "/books/:id" do
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    post "/books" do
        author = params["author"]
        title = params["title"]
        snippet = params["snippet"]
        book = Book.create(author: author, 
                           title: title,
                           snippet: snippet)
        redirect "/books/#{book.id}"

    end

    get "/books/:id/edit" do
        id = params[:id]
        @book = Book.find(id)
        @authors = Author.all
        erb :edit
    end

    patch "/books/:id" do
        book = Book.find(params[:id])
        book.update(author: Author.find(params[:author]),
                    title: params[:title],
                    snippet: params[:snippet])
        redirect "/books/#{book.id}"
    end

    delete "/books/:id" do
        book = Book.find(params[:id])
        book.delete
        redirect "/books"
    end

end