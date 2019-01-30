class AuthorsController < ApplicationController

    set :views, "app/views/authors"


    get "/authors" do 
        @authors = Author.all
        erb :index
    end

    get "/authors/new" do 
        # show blank author form

        erb :new
    end

    post "/authors" do 
        # process completed author form
        author = Author.find_or_create_by(name: params[:name])
        params[:book].each do |book_info|
            if book_info[:title] != ""
                Book.create(author: author,
                           title: book_info[:title],
                           snippet: book_info["snippet"])
            end
        end
        redirect "/authors/#{author.id}"

    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show
    end


end