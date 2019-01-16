require_relative "owner.rb"
require_relative "dog.rb"
require_relative "cat.rb"
require_relative "fish.rb"
require 'pry'

bob = Owner.new("Bob", "human")
mary = Owner.new("Mary", "human")

puts "Owner.all has all owners in it?"
puts Owner.all == [bob, mary]

mork = Owner.new("Mork", "alien")
mindy = Owner.new("Mindy")

puts "Owner knows its species?"
puts mork.species == "alien"
puts mindy.species == "human"

puts "Owner knows their name?"
puts mork.name == "Mork"

timmy = Owner.new("Timmy")
lassie = Dog.new("Lassie", timmy)

# puts lassie.owned_by
# binding.pry
# 0
puts "Dog knows its owner?"
puts Dog.all[0].owner == timmy

puts "Dog can read and write its mood?"
puts lassie.mood == "nervous"
lassie.mood = "happy"
puts lassie.mood == "happy"

puts "Owner knows their dogs?"
puts timmy.dogs == [lassie]

pluto = Dog.new("Pluto", mindy)
goofy = Dog.new("Goofy", mindy)

puts mindy.dogs == [pluto, goofy]

# puts mindy.show_fake_method

puts "Owner can walk their dogs and change mood to content"
print mindy.walk_dogs
puts pluto.mood == "content"
puts goofy.mood == "content"
puts lassie.mood == "happy"

fonzie = mork.buy_dog("Fonzie")
puts Dog.all.include?(fonzie)

puts "Can murder all dogs?"
puts Dog.kill_all_dogs == []




