class Student
  attr_reader :first_name

  @@all = []

  def initialize(first_name)
    @first_name = first_name
    @@all << self
  end

  def add_boating_test(test_name:, status: "pending", instructor:)
    BoatingTest.new(name: test_name, student: self, instructor: instructor, status: status)
  end

  def boating_tests(status: nil)
    BoatingTest.all.select do |test|
      test.student == self
    end
  end

  def passed_tests
    self.boating_tests.select do |test|
      test.status == "passed"
    end
  end

  def graded_tests
    self.boating_tests.select do |test|
      test.status != "pending"
    end
  end

  def grade_percentage
    (self.passed_tests.length.to_f / self.graded_tests.length.to_f) * 100
  end

  def self.all
    @@all
  end

  def self.find_student(student_name)
    Student.all.find do |student|
      student.first_name == student_name
    end
  end

end
