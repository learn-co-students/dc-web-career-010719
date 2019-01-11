class Backer

    attr_accessor :name

    def initialize(name)
        @name = name
    end

    def back_project(project)
        BackerProject.new(self, project)
    end

    def backed_projects
        # Look at backer_projects
        # find the rows where the backer is Marty
        backed_projects = BackerProject.all.select do |bp|
            bp.backer == self
        end
        # collect those projects
        backed_projects.collect {|bp| bp.project}

    end

end

class Project

    attr_accessor  :name

    def initialize(name)
        @name = name
    end
    
    def backers
        BackerProject.all.select do |bp|
            bp.project == self
        end.collect do |bp|
            bp.backer 
        end

    end

end

class BackerProject

    attr_accessor :backer, :project
    @@all = []

    def initialize(backer, project)
        @backer, @project = backer, project
        @@all << self
    end

    def self.all
        @@all 
    end

end

hoverboard = Project.new('Hoverboard')
marty = Backer.new("Marty McFly")

# hoverboard.add_backer(marty)
marty.back_project(hoverboard)

puts hoverboard.backers.collect {|x| x.name}
puts marty.backed_projects.collect {|x| x.name}