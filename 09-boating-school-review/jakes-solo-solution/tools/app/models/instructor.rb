class Instructor

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def grade_student(test_name:, student_name:, status:)
    student = Student.find_student(student_name)
    if student.nil?
      return nil
    end

    #find test (same student and test_name)
    test = BoatingTest.all.find do |test|
      test.name == test_name && test.student == student
    end

    #if not found make one
    if test.nil?
      student.add_boating_test(test_name: test_name, instructor: self, status: status)
    else
      test.status = status
      test
    end
  end

  def fail_student(test_name:, student_name:)
    self.grade_student(test_name: test_name, student_name: student_name, status: "failed")
  end

  def pass_student(test_name:, student_name:)
    self.grade_student(test_name: test_name, student_name: student_name, status: "passed")
  end

  def self.all
    @@all
  end

end
