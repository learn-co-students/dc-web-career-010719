require_relative "../palindrome.rb"

describe "PalindromeChecker" do 

    let (:checker) {PalindromeChecker.new}

    it "returns true when input is 'tacocat'" do
        expect(checker.is_palindrome?('tacocat')).to be true
        expect(checker.is_palindrome?('racecar')).to be true
    end

    it "returns false when input is 'palindrome'" do
        expect(checker.is_palindrome?('palindrome')).to be false
    end

    it "ignores spaces" do 
        expect(checker.is_palindrome?('egad a base tone denotes a bad age')).to be true
    end

    it "ignores capitalization" do 
        expect(checker.is_palindrome?("Madam")).to be true
    end

    it "raises an error if input is not a string" do 
        expect{ checker.is_palindrome?(5) }.to raise_error ArgumentError
    end

    it "checks punctation" do
        expect(checker.is_palindrome?("madam i'm adam")).to be false
        expect(checker.is_palindrome?("?racecar?")).to be true
    end

    it "won't accept the word 'moist' and raises an Error" do
        expect{checker.is_palindrome?('moist')}.to raise_error WordError

    end

end