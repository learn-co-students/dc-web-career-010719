class Author < ActiveRecord::Base
    has_many :books
    
    def author_sanitizer
      self.name.gsub(/\W+/, '').downcase
    end
end