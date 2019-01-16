class Dog
  # code goes here

    attr_reader :name
    attr_accessor :mood, :owner

    @@all = []

    def initialize(name, owner)
        @name = name
        @owner = owner
        @species = "canine"
        @mood = "nervous"
        @@all << self
    end

    def change_species(new_species)
        @species = new_species
    end

    def owned_by
        puts "I am a dog.  My owner is #{self.owner.name}"
    end

    def self.all
        @@all 
    end

    def self.kill_all_dogs
        @@all = []
    end
end


