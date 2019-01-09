require 'pry'

class Cat

    attr_writer :floofiness, :favorite_food
    attr_accessor :name, :color, :number_of_legs

    @@all = []
    @@is_mammal = true

    def initialize(name, color, floofiness, number_of_legs=4)
        @name = name
        @color = color
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @@all << self # inside a method, self refers to the object
    end

    def self.all # in method name, self refers to the class Cat
        @@all 
    end

    def self.is_mammal?
        @@is_mammal
    end

    def self.all_names
        Cat.all.map {|cat| cat.name}
    end

    def floofiness
        if @floofiness > 5
            puts "I am a very floofy kitty"
        else
            puts "I am not so floofy but still better than a dog"
        end
    end

    def say_meow
        sound = "Meow"
        sound = sound.upcase
        puts "#{sound} I am a cat named #{self.name}"
    end

    def show_all_attributes
        name = "this is the name of the function"
        puts self.name
        puts self.color
        puts self.floofiness
    end

    def favorite_food
        @favorite_food ||= "I eat everything"
    end
    # def name=(name) #setter
    #     @name = name
    # end

    # def name #getter
    #     @name
    # end

    # def color=(color)
    #     @color = color
    # end

    # def color
    #     @color
    # end

    # def floofiness=(floofiness)
    #     @floofiness = floofiness
    # end


    # def favorite_food=(food)
    #     @favorite_food = food
    # end


    # def number_of_legs=(number_of_legs)
    #     @number_of_legs = number_of_legs
    # end

    # def number_of_legs
    #     @number_of_legs
    # end

    # def get_benefits
    # #     if social_security_number.starts_with(123)
    # #         give a million dollars
    # #     end
    # # end

    # private

    # def social_security_number
    #     puts "I am a secret kitty"
    # end
end

ella = Cat.new("Ella", "black", 10)

# print ella.all
# print Cat.all
lexi = Cat.new("Lexi", "orange", 5, 3)
# print "\n\n\n"
# print Cat.all
morris = Cat.new("Morris", "orange", 2)
# print "\n\n\n"
# print Cat.all

# Cat.all 
# [ella, lexi, morris]

# ella.name = "Ella"
# ella.color = "black"
# ella.floofiness = 10
# puts ella.name
# puts ella.color
# puts ella.floofiness
# "Ella".color

# favorite_food

# ella.introduce

# Cat.all
# print lexi.all
ella.show_all_attributes

