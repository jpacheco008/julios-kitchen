# Julio's Kitchen

URL TBD

## Project Description
This application is for the user to keep track of all the orders being placed. Costumers will place their orders from a menu rendered from a database and after making their selections the order will be added to a second database. The second recive the name of the item and a unique number provided by a counter at submission. 
## Wireframes
![Home](https://github.com/jpacheco008/julios-kitchen/blob/master/HomeWireFrame.png)
![Order](https://github.com/jpacheco008/julios-kitchen/blob/master/PlaceOrderWireFrame.png)
![Recipt](https://user-images.githubusercontent.com/69394703/101185843-5eaa3b00-3620-11eb-9298-61a7ee4ea5d7.png)
## Component Hierarchy
![Hierarchy](https://github.com/jpacheco008/julios-kitchen/blob/master/Julio's%20Kitchen.png)

## API and Data Sample
```
{
    "records": [
        {
            "id": "recMwIzHcklifR2c3",
            "fields": {
                "name": "Test",
                "description": "Test",
                "picture": "Test"
            },
            "createdTime": "2020-12-04T00:46:59.000Z"
        },
        {
            "id": "rec2f7SrFn94o2C26",
            "fields": {},
            "createdTime": "2020-12-04T00:46:59.000Z"
        },
        {
            "id": "recGtHOFN0wJGjxWS",
            "fields": {},
            "createdTime": "2020-12-04T00:46:59.000Z"
        }
    ],
    "offset": "recGtHOFN0wJGjxWS"
}
{
    "records": [
        {
            "id": "recVnREd7saNpEW2p",
            "fields": {
                "name": "receptTest",
                "order-name": "receptTest",
                "order-number": "receptTest"
            },
            "createdTime": "2020-12-04T13:47:24.000Z"
        },
        {
            "id": "recozEpWvnb7FJeTQ",
            "fields": {},
            "createdTime": "2020-12-04T13:47:24.000Z"
        },
        {
            "id": "reclFxeh88wqtKPbx",
            "fields": {},
            "createdTime": "2020-12-04T13:47:24.000Z"
        }
    ],
    "offset": "reclFxeh88wqtKPbx"
}
```

### MVP/PostMVP

#### MVP
-Navigatable links in between pages
-Render Menu Items
-Render place order form
-Upload a single item order placed into second database
#### PostMVP
-A graphical display of most popular items, least favorite, ect
-Add multiple items per order

## Project Schedule

| Day      | Deliverable                                | Status   |
| -------- | ------------------------------------------ | -------- |
|  Dec 4-6 | Proposal Approval / AirTable setup         |Incomplete|
|  Dec 7   | Render and connect database to app         |Incomplete|
|  Dec 8   | Functional MVP                             |Incomplete|
|  Dec 9   | Styling/MVP                                |Incomplete|
|  Dec 10  | MVP                                        |Incomplete|
|  Dec 11  | Present                                    |Incomplete|

## Timeframes

| Component                 | Priority | Estimated Time | Actual Time |
| ------------------------- | :------: | :------------: | :---------: |
| Proposal                  |    H     |      1HR       |             |        
| Air Table build           |    H     |      3HR       |             |        
| App setup                 |    H     |      1HR       |             |         
| Connect App to Air Table  |    H     |      2HR       |             |         
| Render Menu Items         |    H     |      3HR       |             | 
| Build Form                |    H     |      3HR       |             |
| Build Receipt             |    H     |      2HR       |             |    
| CSS/Style all components  |    H     |      8HR       |             |  
| MVP items                 |    M     |      8HR       |             |   
| Total                     |          |      31HR      |             |  
 



## SWOT Analysis

### Strengths:
-JS logic
### Weaknesses:
-CSS, Styling 

### Opportunities:
-I can see this as the backbone of an app a real reastaurant can use
### Threats:
-working with 2 different databases