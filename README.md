# medication-tracker-app
Medication/supplement tracking app. Allowing logged in users to add medication name, dosage and total amount within bottle with ultimate abilty to track when medication is taken per day. Project to be progressed in stages. 

# User Stories
* "An app that allows a user to enter medications"
## Future stories to work towards
* "Ability to set reminders on when to take medication /supplements."
* "Ability to set different timers for when to take each medication with dosage and mark off once taken." 
* "App should track initial quantity input minus dosages taken to keep track of how much user has left, then be able to have an alert when gets to set low stock level to place purchase for more."
*	“Taking about 20 different med and Supps tablets a day, the functionality that I would love is counting down how many days supply left based on number taken per day and a reminder to reorder once anything hits week supply left etc. Also the ability to check how many days left of each. “

## User stories with associated Technical Tasks (To Do/Doing/Done List)
* https://trello.com/invite/b/SSglW6wG/0399309121ff263d7036c2155313258c/medication-tracker-app

# Overall Layout
## Landing Page
* Login/Create account option
* Example of how display would be once user logged in. 
## Login Page/Create New User
* Login page
  * Username and Password
* Create New User
  * Username
  * Password
  * Email
  * Reorder Cycle (options for weekly, fortnightly, monthly) 
## Add new Medication/Supplement (logged in user)
* Name - Medication/supplement name (generic input)
*	Total quantity (ie 30 pills per bottle etc)
*	Dosage - quantity to take per dosage/time/date
*	Low stock alert 
*	Other (generic field to add note on supplier etc)
##	List/Calendar Display 
*	Initial platform to display list of items
* Ability to edit existing items, ie dosage, notes, add additional quantity. 
* Future stories to work towards 
  * Daily, weekly, monthly calendar view option of what to take and times
  *	Display as grid calendar or list (have option)
##	Restock Display (Future stories to work towards)
*	Functionality to see when user would like to reorder, ie weekly, monthly etc with stock requirements calculated from this reorder variable. 
*	List with stock count of where all medications/supplements are in terms of restocking and how many days of medication is remaining. 
*	Alert (maybe colour change/place on list) when get to Low Stock Alert thresholds
##	Functionality
*	Simple form entry for initial details
*	Ability to edit quantity/date/time of existing medication
*	Display for reminders to take medication with options, ie 15min, 30min etc. 

# FRONTEND
## Tech
* React
* Tokens
## Routes

# BACKEND
## Tech
* nodejs 
* mongoose js
* brypt
* express JS
## Models
* GET
  * '/'           get all medications
  * '/:id'        get medication by id
   * /logout      user logout
* POST
  * /createuser   create new user
  * /login        user login
  * /medication   add new medication
* PATCH
  * '/:id'        find by id and update
* DELETE
  * '/:id'        find by id and delete

# Routes Plan
https://dbdiagram.io/d/5f27d04a7543d301bf5da556 