class Student
  attr_reader :first_name

  STUDENTS = []

  def initialize(first_name)
    if Student.find_student(first_name).nil?
      Student.all << self
      @first_name = first_name
    elsif
      raise ArgumentError.new("#{first_name} already exists")
    end
  end

  def tests
    BoatingTest.all.select do |test|
      test.student == self
    end
  end

  def passed_tests
    self.tests.select do |test|
      test.status == "passed"
    end
  end

  def failed_tests
    self.tests.select do |test|
      test.status == "failed"
    end
  end

  def grade_percentage
    self.passed_tests.length.to_f / self.tests.length.to_f
  end

  def add_boating_test(name, status, instructor)
    BoatingTest.new(self, name, status, instructor)
  end

  def self.all
    STUDENTS
  end

  def self.find_student(first_name)
    self.all.find do |student|
      student.first_name == first_name
    end
  end
end
