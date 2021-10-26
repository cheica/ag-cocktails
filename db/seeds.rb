# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 
Cocktail.destroy_all
Rate.destroy_all

puts "I am starting to SEED Users"

andres = User.create(name: "Andres Giraldo", username: "andreslds", email: "andres@gmail.com", password: "luvalcohol", role: "owner", admin: true, image: "something")

puts "I am DONE seeding Users"

#####Cocktails#### 

puts "I am starting to SEED Cocktails" 

#####Purple#### 
Cocktail.create(name: "Blue Whale", image: "https://pbs.twimg.com/media/FCQI40OWQAEbBD5?format=jpg&name=medium", user_id: andres.id)
Cocktail.create(name: "Amethyst Potion", image: "https://pbs.twimg.com/media/FCQI40XXEAIyqkU?format=jpg&name=medium", user_id: andres.id)
# Cocktail.create(name: "Purple Rain", image: "https://pbs.twimg.com/media/FCChaPiXMAAATxS?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Purple Rain", image: "https://pbs.twimg.com/media/FCQI40UXIAkOB5U?format=jpg&name=large", user_id: andres.id)


#####Green#### 
Cocktail.create(name: "Frozen Margarita", image: "https://pbs.twimg.com/media/FCQJtlKXoAwiueV?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Breath of Fresh Air", image: "https://pbs.twimg.com/media/FCQJtlKWEAM8zrv?format=jpg&name=large", user_id: andres.id)
Cocktail.create(name: "Esencia de Vainilla", image: "https://pbs.twimg.com/media/FCQJtlLWQAsCoLY?format=jpg&name=large", user_id: andres.id)
# Cocktail.create(name: "Apple Cider Vodka", image: "", user_id: andres.id)

#####Orange#### 
Cocktail.create(name: "Autumn Colors", image: "https://pbs.twimg.com/media/FCQJ5SDWYAEWRML?format=jpg&name=medium", user_id: andres.id)

Cocktail.create(name: "Tiki Cocktail", image: "https://pbs.twimg.com/media/FCQJ5S1WYAQF7jU?format=jpg&name=medium", user_id: andres.id)
Cocktail.create(name: "Frosé", image: "https://pbs.twimg.com/media/FCQJ5S0X0AES-C4?format=jpg&name=medium", user_id: andres.id)


puts "I am DONE seeding Cocktails" 

puts "I am starting to SEED Rates"  

Rate.create(serv:"Menu Design",image: "https://pbs.twimg.com/media/FCZ0bC0WYAEVafU?format=jpg&name=large", description: "We will meet with you to fully understand your needs and bring your vision to life! ")

Rate.create(serv:"Small Private Event",image: "https://pbs.twimg.com/media/FCZ0bC2WEAgtVLe?format=jpg&name=large",  description: "Size: up to 50 guests")
Rate.create(serv:"Medium-Large Private Event", image: "https://pbs.twimg.com/media/FCZ0bDDWEBAIks8?format=jpg&name=large", description: "Size: 50+ guests")

Rate.create(serv:"Cocktail Personalization",image: "https://pbs.twimg.com/media/FCZ0bDdWEAAjyeo?format=jpg&name=large",  description: "Our custom created cocktails will make your event unforgettable!")

puts "I am DONE seeding Rates"
