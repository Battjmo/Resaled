# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all

u1 = User.create!(username: "Mortimer Laraby", password: "123456")
u2 = User.create!(username: "Roger Daltrey", password: "123456")
u3 = User.create!(username: "Dorian Grey", password: "123456")
u4 = User.create!(username: "Rambir Kapoor", password: "123456")
u5 = User.create!(username: "Virgil Abloh", password: "123456")

l1 = Listing.create(user_id: 1, title: "Pretty Shirt", price: 125, )
