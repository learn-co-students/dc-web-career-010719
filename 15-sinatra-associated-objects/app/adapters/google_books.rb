module GoogleBooks
  class Adapter
    BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q='

    attr_reader :author

    def initialize(author_name)
      @author = Author.find_or_create_by(name: author_name)
    end

    def fetch_books
      books = JSON.parse(RestClient.get(author_url))

      books['items'].each do |item|
        book = Book.new
        book.author = self.author
        book.title = item['volumeInfo']['title']
        book.snippet = item['volumeInfo']['description']
        book.save
      end
    end

    private

    def author_url(max_results = 20)
      "#{BASE_URL}#{self.author.author_sanitizer}&maxResults=#{max_results}"
    end

  end
end
