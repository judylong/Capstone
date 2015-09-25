u1 = User.create(email: 'one@example.com', password: 'password', name: "User1")
u2 = User.create(email: 'two@example.com', password: 'password', name: "User2")

p1 = Project.create(title: 'project1', description: 'my first project', full_description: 'here is a full description placeholder', goal: 500, end_date: DateTime.new(2020, 8, 31, 11, 0, 0), owner_id: 1, category: "World Domination")

p2 = Project.create(title: 'project2',
                    description: 'my second project',
                    full_description: 'here is a full description placeholder',
                    goal: 1000,
                    end_date: DateTime.new(2030, 4, 27, 11, 0, 0),
                    owner_id: 1,
                    category: "World Domination")

p1 = Project.create(title: 'projectApple',
                    description: '2s first project',
                    full_description: 'here is a full description placeholder',
                    full_description: 'here is a full description placeholder',
                    goal: 500,
                    end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
                    owner_id: 2,
                    category: "World Domination")
r1 = Reward.create(project_id: 1,
                    pledge_amount: 5,
                    description: "a high five for every five",
                    limited_quantity: 150,
                    estimated_delivery: Date.new(2020, 11),
                    shipping_location: "Only United States")
r2 = Reward.create(project_id: 1,
                    pledge_amount: 15,
                    description: "bobblehead of your favorite character",
                    estimated_delivery: Date.new(2020, 12),
                    shipping_location: "Anywhere in the world")
r3 = Reward.create(project_id: 1,
                    pledge_amount: 100,
                    description: "a no questions asked",
                    estimated_delivery: Date.new(2020, 11))

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



















1
