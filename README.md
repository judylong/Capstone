# NameTBD

[Heroku link][heroku]

[heroku]: LinkTBD

## Minimum Viable Product
A clone of Kickstarter built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Create projects
- [ ] View project
- [ ] View projects by category
- [ ] Filter/sort projects in category
- [ ] Back projects

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Project Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to create blogs using
a simple text form in a Rails view. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Projects (~2 days)
I will add API routes to serve project data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create projects and view projects, all
inside a single Backbone app.

[Details][phase-two]

### Phase 3: Editing and Displaying Projects (~2 days)
I plan to use third-party libraries to add functionality to the `ProjectForm` and
`ProjectShow` views in this phase. First I'll need to add a Markdown editor to the
`ProjectForm`, and make sure that the Markdown is properly escaped and formatted in
the `ProjectShow` view. I also plan to integrate Filepicker for file upload so
users can add images to their project view.

[Details][phase-three]

### Phase 4: Backing Projects (~1-2 days)
I'll start by adding a `back_project` route that uses the `current_user`'s
`projects_backed` association to add the user as a backer and add the project in the
user's backed projects list. On the Backbone side, I'll update the project's view
whose `backers` collection fetches from the new route.  

[Details][phase-four]

### Phase 5: Filtering Projects (~2 days)
I'll need to add a `category` route to the Projects controller. On the
Backbone side, there will be a `Category` composite view that has
and `Project` subviews. These views will use plain old `projects`
collection, but they will fetch from the new `category` route.

[Details][phase-five]

### Bonus Features (TBD)
- [ ] Star projects
- [ ] Custom project urls
- [ ] Pagination/infinite scroll
- [ ] "Remind me" email feature
- [ ] Search projects via search bar
- [ ] Administrator users
- [ ] Staff picks
- [ ] Popular projects
- [ ] Project timeline updates page
- [ ] Sending messages to project creators
- [ ] User profile pie chart of backed project categories
- [ ] Subcategories

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
