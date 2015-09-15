u1 = User.create(email: 'one@example.com', password: 'password')
u2 = User.create(email: 'two@example.com', password: 'password')

p1 = Project.create(title: 'project1',
                    description: 'my first project',
                    goal: 500,
                    end_date: DateTime.new(2020, 8, 31, 11, 0, 0),
                    owner_id: 1,
                    category_id: 1)

p2 = Project.create(title: 'project2',
                    description: 'my second project',
                    goal: 1000,
                    end_date: DateTime.new(2030, 4, 27, 11, 0, 0),
                    owner_id: 1,
                    category_id: 1)

p1 = Project.create(title: 'projectApple',
                    description: '2s first project',
                    goal: 500,
                    end_date: DateTime.new(2015, 10, 31, 11, 0, 0),
                    owner_id: 2,
                    category_id: 1)
