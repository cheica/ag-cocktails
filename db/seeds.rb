# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Cocktail.destroy_all

puts "I am starting to SEED Users"

andres = User.create(name: "Andres Giraldo", username: "andreslds", email: "andres@gmail.com", password: "luvalcohol", role: "owner", admin: true, image: "something")

puts "I am DONE seeding Users"

#####Cocktails#### 

puts "I am starting to SEED Cocktails" 

#####Purple#### 
Cocktail.create(name: "Blue Whale", image: "https://pbs.twimg.com/media/FCHxYF7WEAAi0Qz?format=jpg&name=medium", user_id: andres.id)
Cocktail.create(name: "Amethyst Potion", image: "https://pbs.twimg.com/media/FCChaPhXoAEOi-K?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Purple Rain", image: "https://pbs.twimg.com/media/FCChaPiXMAAATxS?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Purple Rain", image: "https://pbs.twimg.com/media/FCHpemZXMAUru8V?format=jpg&name=large", user_id: andres.id)


#####Green#### 
Cocktail.create(name: "Frozen Margarita", image: "https://pbs.twimg.com/media/FCCiAyiWEAIN4PA?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Breath of Fresh Air", image: "https://pbs.twimg.com/media/FCCiAyhXIAIjOPi?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Esencia de Vainilla", image: "https://pbs.twimg.com/media/FCCiAymXEAABJzN?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Apple Cider Vodka", image: "https://pbs.twimg.com/media/FCHmc1vXIAEoMgG?format=jpg&name=large", user_id: andres.id)

#####Orange#### 
Cocktail.create(name: "Autumn Colors", image: "https://pbs.twimg.com/media/FCCjDHJWUAEroXA?format=jpg&name=large", user_id: andres.id)

Cocktail.create(name: "Tiki Cocktail", image: "https://pbs.twimg.com/media/FCCjDHIXsAI1Z2u?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Frosé", image: "https://pbs.twimg.com/media/FCCjDHKX0AQMrnP?format=jpg&name=large", user_id: andres.id)


puts "I am DONE seeding Cocktails" 