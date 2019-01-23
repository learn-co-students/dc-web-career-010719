require 'pry'

class PalindromeChecker

    def is_palindrome?(word)
        puts word
        begin
            1/0
        rescue ZeroDivisionError, ArgumentError
            puts "Please don't divide by zero"
        rescue WordError
            puts "moist is good for cake"
        end
        raise WordError, "I hate moist" if word == 'moist'
        raise ArgumentError if !(word.is_a? String)
        word.gsub!(" ", "")
        word.downcase!
        if word.length <= 1
            return true
        elsif word[0] == word[-1]
            return is_palindrome?(word.slice(1...-1))
        else
            return false
        end
    end
        
end

class WordError < StandardError

    def initialize(message)
        @message = message
    end
end