class Instructor
  attr_reader :name
  INSTRUCTORS = []

  def initialize(name)
    @name = name
    Instructor.all << self
  end

  def grade_student(student, test_name, status)
    test = student.tests.find { |test| test.name == test_name }
    if test.nil?
      student.add_boating_test(test_name, status, self)
    else
      test.status = status
    end
  end

  def pass_student(student, test_name)
    self.grade_student(student, test_name, 'passed')
  end

  def fail_student(student, test_name)
    self.grade_student(student, test_name, 'failed')
  end

  def self.all
    INSTRUCTORS
  end
end
