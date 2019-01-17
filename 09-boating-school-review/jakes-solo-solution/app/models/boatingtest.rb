class BoatingTest
  attr_reader :name, :student, :instructor
  attr_accessor :status
  
  TESTS = []

  def initialize(student, name, status, instructor)
    @name = name
    @student = student
    @instructor = instructor
    self.status = status
    BoatingTest.all << self
  end

  def self.all
    TESTS
  end
end
