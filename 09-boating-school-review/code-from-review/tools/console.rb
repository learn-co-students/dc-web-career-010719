require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Insert code here to run before hitting the binding.pry
# This is a convenient place to define variables and/or set up new object instances,
# so they will be available to test and play around with in your console

patrick = Student.new "Patrick"
puff = Instructor.new "Mrs. Puff"

patrick.add_boating_test test_name: "test1", instructor: puff
patrick.add_boating_test test_name: "test2", instructor: puff, status: "failed"
patrick.add_boating_test test_name: "test3", instructor: puff, status: "passed"

puff.pass_student(test_name: "test1", student_name: "Patrick")
puff.fail_student(test_name: "test10", student_name: "Patrick")

binding.pry
0 #leave this here to ensure binding.pry isn't the last line
