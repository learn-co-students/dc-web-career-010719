require 'rest-client'
require 'json'
require 'pry'
require 'uri'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="


def welcome_user
    # welcome user to our cool program
    puts "Welcome to our Google Books Library searcher\n\n"
end

def get_query
    # get query input from user
    puts "What would you like to search for?\n\n"
    input = URI.escape(gets.chomp)

    return input
end

def make_request_to_google_books(query)
    # make request to google books api
    # construct url
    url = GOOGLE_BOOKS_API_BASE_URL + query
    response = RestClient.get(url)
    return JSON.parse(response)
end

def parse_results(json)
    # parse results and display to user
    # json["items"][0]["volumeInfo"]["title"]
    if json["items"].nil?
        puts "No books found.  Sorry."
        return
    end
    json["items"][0...10].each do |book_hash|
        title = get_title(book_hash)
        authors = get_authors(book_hash)
        display_results(title, authors)
    end
end

def get_title(book)
    return book["volumeInfo"]["title"]
end

def get_authors(book)
    author_array = book["volumeInfo"]["authors"]
    if author_array.nil?
        return "Anonymous"
    end
    return author_array.join(" & ")
end

def display_results(title, authors)
    puts "#{title} by #{authors}"
    puts "\n*****************\n\n"
end

def run
    welcome_user
    input = get_query
    while input.empty?
        puts "Please enter a valid search term\n\n"
        input = get_query
    end
    json = make_request_to_google_books(input)
    puts "\n\nHere are your books:\n\n"
    parse_results(json)
end

run

