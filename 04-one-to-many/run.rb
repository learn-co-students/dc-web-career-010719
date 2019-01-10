require_relative "tweet.rb"
require_relative "user.rb"
require 'pry'

coffee_dad = User.new("Coffee Dad")
tweet1 = coffee_dad.post_tweet("I love coffee")
tweet2 = coffee_dad.post_tweet("I need coffee")
puts coffee_dad.is_a? User 
puts coffee_dad.username == "Coffee Dad"
puts tweet1.is_a? Tweet
puts tweet1.message == "I love coffee"
puts tweet1.user == coffee_dad
puts tweet1.username == "Coffee Dad"
puts Tweet.all == [tweet1, tweet2]

tea_uncle = User.new("Tea Uncle")
tea_uncle.post_tweet("I heart tea")
puts self
puts coffee_dad.tweets == [tweet1, tweet2]
binding.pry
0