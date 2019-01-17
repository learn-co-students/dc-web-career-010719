# mod1-code-review-boating-school

Welcome to Boating School,  a Spongebob activity that simulates a system that tracks Boating Tests.  We have three models - `Student`, `Instructor`, and `BoatingTest`.

Associations:

![alt text][chart]

[chart]: https://i.imgur.com/eiFqjJe.png

`Student` class:
* should initialize with `first_name`
* `Student.all` should return all of the student instances
* `Student#add_boating_test` should initialize a new boating test with a Student (Object), a boating test name (String), a boating test status (String), and an Instructor (Object)
* `Student.find_student` will take in a first name and output the student (Object) with that name
* `Student#grade_percentage` should return the percentage of tests that the student has passed, a Float (so if a student has passed 3 / 9 tests that they've taken, this method should return the Float `33.33`)


Run `ruby tools/console.rb` in console to try out your code. You can add seed data to this file to have some sample objects to try out.

Here is some example seed data:

```
spongebob = Student.new("Spongebob")
patrick= Student.new("Patrick")

puff= Instructor.new("Ms.Puff")
krabs= Instructor.new("Mr.Krabs")

no_crashing = spongebob.add_boating_test("Don't Crash 101", "pending", puff)
power_steering_failure = patrick.add_boating_test("Power Steering 202", "failed", puff)
power_steering_pass = patrick.add_boating_test("Power Steering 201", "passed", krabs)
```

![](https://media.giphy.com/media/GwYxLtDaB3Wso/giphy.gif)
