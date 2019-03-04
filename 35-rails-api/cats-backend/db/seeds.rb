# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create([
  { name: "Slinky", breed: "Sphinx", floof: 0, image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/4/16/original-16439-1396642689-17.jpg"},
  { name: "PaulNicholsen", breed: "Tabby", floof: 2, image: "https://static.boredpanda.com/blog/wp-content/uploads/2016/02/japanese-grumpy-cat-angry-koyuki-moflicious-22.jpg"},
  { name: "Keto", breed: "Siamese", floof: 1, image: "https://www.drollfeed.net/wp-content/uploads/2016/09/angry-cats-04.jpg"},
  { name: "Kaali", breed: "Calico", floof: 3, image: "https://img.buzzfeed.com/buzzfeed-static/static/2014-04/enhanced/webdr07/9/14/original-18798-1397069417-28.jpg"}
  ])

Hobby.create([
  {name: "Scowl"},
  {name: "Eat Sandwhiches"},
  {name: "Scratch"},
  {name: "Play"},
  {name: "Purrrrr"}
  ])

CatHobby.create([
  {cat_id: 2, hobby_id: 1},
  {cat_id: 2, hobby_id: 2},
  {cat_id: 1, hobby_id: 3},
  {cat_id: 2, hobby_id: 4},
  {cat_id: 3, hobby_id: 1},
  {cat_id: 3, hobby_id: 3},
  {cat_id: 4, hobby_id: 5}
  ])
