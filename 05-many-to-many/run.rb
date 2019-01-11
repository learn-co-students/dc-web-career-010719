require_relative "tweet.rb"
require_relative "user.rb"
require_relative "favorite.rb"
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
tweet3 = tea_uncle.post_tweet("I heart tea")
puts coffee_dad.tweets == [tweet1, tweet2]

coffee_dad.like_tweet(tweet3)
tea_uncle.like_tweet(tweet1)
tea_uncle.like_tweet(tweet2)

soda_mom = User.new("Soda Mom")

puts tweet3.likers == [coffee_dad]
puts tweet2.likers == [tea_uncle]
puts coffee_dad.liked_tweets == [tweet3]
puts tea_uncle.liked_tweets == [tweet1, tweet2]
puts soda_mom.liked_tweets == []

coffee_dad.delete_tweet(tweet1)
puts !coffee_dad.tweets.include?(tweet1)
puts !tea_uncle.liked_tweets.include?(tweet1)

coffee_dad.delete_tweet(tweet3)
puts Tweet.all.include?(tweet3)

puts coffee_dad.like_count_for_user(soda_mom) == 0
puts coffee_dad.like_count_for_user(tea_uncle) == 1

binding.pry
0