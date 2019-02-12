# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all
Retailer.destroy_all

h = Retailer.create(name: "Hostess", year_established: 1910)

Snack.create(name: "Twinkies", calories: 400, deliciousness: 4, retailer: h)
Snack.create(name: "Chicken Fingers", calories: 600, deliciousness: 6)
Snack.create(name: "Coconut anything", calories: 600, deliciousness: 1)

gs = Retailer.create(name: "Girl Scouts", year_established: 1905)

Snack.create(name: "Tagalongs", calories: 500, deliciousness: 4, retailer: gs)

gs.snacks.create(name: "Dosidos", calories: 400, deliciousness: 6)