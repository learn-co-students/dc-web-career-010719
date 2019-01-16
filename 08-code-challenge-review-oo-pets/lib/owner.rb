class Owner
  # code goes here

    attr_reader :species, :name

    @@all = []

    def initialize(name, species="human")
        @name = name
        @species = species
        @@all << self
    end

    def say_species
        puts "Hi I am a #{@species}"
    end

    def self.all 
        @@all 
    end

    def dogs
       # look at all the dogs
       # choose the dogs whose owner is self,
       # i.e., the person who called the method
       Dog.all.select do |dog|
          dog.owner == self
       end
    end

    def walk_dogs
        # changes all owner's dogs' mood
        # to "content"

        # go over all the dogs and select
        # the dogs whose owner is self
        # change their mood to content
        my_dogs = self.dogs
        my_dogs.each do |dog|
            dog.mood = "content"
        end
    end

    def buy_dog(name)
        Dog.new(name, self)
    end

end

# print Owner.all 
# # []

# bob = Owner.new("human")

# print Owner.all
# # [ bob ]

# mary = Owner.new("human")
# print Owner.all 
# [bob, mary]