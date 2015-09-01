![Alt](https://travis-ci.org/wannabeCitizen/educationcu.svg?branch=master)

# educationcu
We are planning to make a "citizen science" style data collection system for the University of Colorado. This will allow students to collect their own data about classes and instructors. The goal is to improve educational data collection at the university and to put students at the center of this effort.

# How to run
```bash
$ bower install && npm install
$ gulp watch // (for dev, not stable)
$ gulp build // to build for production.
```

# Adding components
Create a folder for each sub-component and require them in the proper parent component.
For example, timer is a sub-component in the main component.

## To be done:
- [X] React Boilerplate (Peyman) by 9/3
- [ ] Documentation on how to run, add components, etc. (Peyman) by 9/3
- [ ] Continuous integration (Peyman) by 9/3.
- [ ] (Low priority) improve gulp watch (does not see the *.sass changes at the moment).
- [ ] Data spec (Conner, Justin, Peyman) by 9/3
- [ ] React basics (Conner, Justin) by 9/3
- [ ] Set up server (Mike) will talk to Tom this week
