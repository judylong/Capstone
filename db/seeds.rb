# u1 = User.create(email: 'one@example.com', password: 'password', name: "User1")
# u2 = User.create(email: 'two@example.com', password: 'password', name: "User2")
#
# p1 = Project.create(title: 'project1', description: 'my first project', full_description: 'here is a full description placeholder', goal: 500, end_date: DateTime.new(2020, 8, 31, 11, 0, 0), owner_id: 1, category: "World Domination")
#
# p2 = Project.create(title: 'project2',
#                     description: 'my second project',
#                     full_description: 'here is a full description placeholder',
#                     goal: 1000,
#                     end_date: DateTime.new(2030, 4, 27, 11, 0, 0),
#                     owner_id: 1,
#                     category: "World Domination")
#
# p1 = Project.create(title: 'projectApple',
#                     description: '2s first project',
#                     full_description: 'here is a full description placeholder',
#                     goal: 500,
#                     end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                     owner_id: 2,
#                     category: "World Domination")
# r1 = Reward.create(project_id: 1,
#                     pledge_amount: 5,
#                     description: "a high five for every five",
#                     limited_quantity: 150,
#                     estimated_delivery: Date.new(2020, 11),
#                     shipping_location: "Only United States")
# r2 = Reward.create(project_id: 1,
#                     pledge_amount: 15,
#                     description: "bobblehead of your favorite character",
#                     estimated_delivery: Date.new(2020, 12),
#                     shipping_location: "Anywhere in the world")
# r3 = Reward.create(project_id: 1,
#                     pledge_amount: 100,
#                     description: "a no questions asked",
#                     estimated_delivery: Date.new(2020, 11))

# start of the fun...
drakken = User.create(email: 'drDrakken@disney.com', password: 'password', name: 'Dr.Drakken')
vlad = User.create(email: 'vlad@nick.com', password: 'password', name: 'Vlad Masters')
aku = User.create(email: 'lordAKU@cn.com', password: 'password', name: 'Aku')
mojo = User.create(email: 'mojo@cn.com', password: 'password', name: 'Mojojojo')
joker = User.create(email: 'mrJ@dc.com', password: 'password', name: 'Joker')
giovanni = User.create(email: 'boss@teamrocket.com', password: 'password', name: 'Giovanni')
hades = User.create(email: 'ruler@underworld.disney.com', password: 'password', name: 'Hades')
rita = User.create(email: 'rita@mystic.com', password: 'password', name: "Rita Repulsa")
drClaw = User.create(email: 'drClaw@gogo.com', password: 'password', name: "Doctor Claw")
biederman = User.create(email: 'kip+biederman@nick.com', password: 'password', name: "Neil Biederman")
theDarkHand = User.create(email: 'theDarkHand@wb.com', password: 'password', name: "The Dark Hand")
kaiba = User.create(email: 'k@kcorp.com', password: 'password', name: "Seto Kaiba")
magneto = User.create(email: 'm@mutants.com', password: 'password', name: "Magneto")
mrCrocker = User.create(email: 'croker@faeriesexist.com', password: 'password', name: "Denzel Crocker")
frieza = User.create(email: 'frieza@frieza.com', password: 'password', name: 'Frieza')
poisonIvy = User.create(email: 'ivy@dc.com', password: 'password', name: 'Poison Ivy')
theAdults = User.create(email: 'adultsRule@cn.com', password: 'password', name: 'The Adults')
yzma = User.create(email: 'yzma@disney.com', password: 'password', name: 'Yzma')
thrax = User.create(email: 'thrax@chaos.com', password: 'password', name: 'Thrax')
zim = User.create(email: 'zim@irk.com', password:'password', name: 'Zim')


Project.create(title: "Drakken's World",
                description: 'I plan to use the death ray I make to rule the world',
                full_description: 'The details are in the works, but I my plans will succeed with your help.',
                goal: 5000,
                end_date: Date.new(2020, 11),
                owner_id: 1,
                category: "World Domination")
Reward.create(project_id: 1,
                pledge_amount: 50,
                description: "A 15% off coupon for Smarty Mart",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 1,
                pledge_amount: 1000,
                description: "A cupcake",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")
Reward.create(project_id: 1,
                pledge_amount: 1500,
                description: "A year's supply of my special brainwashing shampoo and cranium rinse.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")


Project.create(title: 'A Better World',
                description: 'I plan to use the funds to build a better world for humans.',
                full_description: 'I have big plans for the world. With my ghostly powers, I will protect the world.',
                goal: 15000,
                end_date: Date.new(2020, 11),
                owner_id: 2,
                category: "World Domination")
Reward.create(project_id: 2,
                pledge_amount: 100,
                description: "A live demonstration of my powers.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 2,
                pledge_amount: 200,
                description: "A ticket to a football game.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 2,
                pledge_amount: 300,
                description: "A tour of the ghost zone.",
                limited_quantity: 25,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")


Project.create(title: 'Make the world a safer place',
                description: 'I am looking to fund a mass bounty hunting.',
                full_description: 'I wish for the capture of Samurai Jack. He is a major threat to this world. Help to keep him at bay for your own safety.',
                goal: 50000,
                end_date: Date.new(2020, 11),
                owner_id: 3,
                category: "Enemy Capture")
Reward.create(project_id: 3,
                pledge_amount: 1000,
                description: "A trial as my minion.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")
Reward.create(project_id: 3,
                pledge_amount: 2000,
                description: "One of Samurai Jack's hats.",
                limited_quantity: 5,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 3,
                pledge_amount: 5000,
                description: "A trip through a time portal.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")


Project.create(title: 'Volcano Repairs',
                description: 'I need funding to keep my volcano stable.',
                full_description: 'Those powerpuff girls ruin all my plans and keep destroying my home in the process. Help keep my home well-maintained.',
                goal: 500,
                end_date: Date.new(2020, 11),
                owner_id: 4,
                category: "Odd Services")
Reward.create(project_id: 4,
                pledge_amount: 5,
                description: "A high five for every five.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 4,
                pledge_amount: 15,
                description: "A visit to my volcano.",
                limited_quantity: 450,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 4,
                pledge_amount: 25,
                description: "One of my old creations.",
                limited_quantity: 1,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")

Project.create(title: 'An documentary on yours truely',
                description: 'I plan to make a documentary about me of course.',
                full_description: 'The world should know about my great plans from over the years.',
                goal: 500,
                end_date: Date.new(2020, 11),
                owner_id: 5,
                category: "Film & Video")
Reward.create(project_id: 5,
                pledge_amount: 10,
                description: "A letter in the mail.",
                limited_quantity: 550,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 5,
                pledge_amount: 25,
                description: "A year's supply of laughing gas.",
                limited_quantity: 55,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 5,
                pledge_amount: 50,
                description: "A special surprise.",
                limited_quantity: 5,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")


Project.create(title: 'Our corp needs you',
                description: 'Team Rocket need you.',
                full_description: 'Help the cause and join us.',
                goal: 500,
                end_date: Date.new(2020, 11),
                owner_id: 6,
                category: "World Domination")
Reward.create(project_id: 6,
                pledge_amount: 5,
                description: "A grunt uniform.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 6,
                pledge_amount: 8,
                description: "A trial at Team Rocket's boot camp.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")
Reward.create(project_id: 6,
                pledge_amount: 25,
                description: "A pokemon we captured.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")


Project.create(title: 'The New Underworld',
                description: "It's been so many years in the underworld, and I think it's time for a change.",
                full_description: "I'll use the funds to make some changes. Maybe one of those spinning tops of dooms will liven the place up.",
                goal: 500,
                end_date: Date.new(2020, 11),
                owner_id: 7,
                category: "Home Security")
Reward.create(project_id: 7,
                pledge_amount: 12,
                description: "A meeting with someone who has passed.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")
Reward.create(project_id: 7,
                pledge_amount: 120,
                description: "A tour of the Underworld.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")
Reward.create(project_id: 7,
                pledge_amount: 1200,
                description: "A look into my past.",
                limited_quantity: 2,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")


Project.create(title: 'Capture the Power Rangers',
                description: 'I will use the funds to hire better henchmen to capture the Power Rangers.',
                full_description: 'Those rangers keep destroying my monsters. They\'re not easy to get you know.',
                goal: 1000,
                end_date: Date.new(2020, 11),
                owner_id: 8,
                category: "Enemy Capture")
Reward.create(project_id: 8,
                pledge_amount: 1,
                description: "I'll lend you one of my putty patrollers for a day.",
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "No shipping involved")
Reward.create(project_id: 8,
                pledge_amount: 100,
                description: "A ride on a megazord of your choosing.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 8,
                pledge_amount: 500,
                description: "A ranger's helment.",
                limited_quantity: 6,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")


Project.create(title: 'My Cat',
                description: 'I would like to fund a piece of artwork of my cat.',
                full_description: 'My cat deserves the finest.',
                goal: 500,
                end_date: Date.new(2020, 11),
                owner_id: 9,
                category: "Art")
Reward.create(project_id: 9,
                pledge_amount: 5,
                description: "You may see my cat in person.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 9,
                pledge_amount: 50,
                description: "You may pet my cat.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")
Reward.create(project_id: 9,
                pledge_amount: 70,
                description: "You can see a picture of my face from the past.",
                limited_quantity: 15,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Only United States")


Project.create(title: 'Fund our world trips',
                description: 'As people in the animal industry, we make plenty of trips around the world.',
                full_description: 'Help keep us in business',
                goal: 100000,
                end_date: Date.new(2020, 11),
                owner_id: 10,
                category: "Odd Services")
Reward.create(project_id: 10,
                pledge_amount: 500,
                description: "A piece of hunting equipment we used.",
                limited_quantity: 10,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")
Reward.create(project_id: 10,
                pledge_amount: 5000,
                description: "An anima fur.",
                limited_quantity: 150,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")
Reward.create(project_id: 10,
                pledge_amount: 50000,
                description: "Elephant tusks.",
                limited_quantity: 10,
                estimated_delivery: Date.new(2020, 11),
                shipping_location: "Ships anywhere in the world")

# 11
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 12
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 13
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 14
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 15
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 16
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 17
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 18
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 19
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
#
# 20
# Project.create(title: 'projectApple',
#                 description: '',
#                 full_description: 'here is a full description placeholder',
#                 goal: 500,
#                 end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
#                 owner_id: 2,
#                 category: "World Domination")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
# Reward.create(project_id: 1,
#                 pledge_amount: 5,
#                 description: "a high five for every five",
#                 limited_quantity: 150,
#                 estimated_delivery: Date.new(2020, 11),
#                 shipping_location: "Only United States")
