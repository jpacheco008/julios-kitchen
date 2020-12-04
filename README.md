# Julio's Kitchen

URL TBD

## Project Description
This application is for the user to keep track of all the orders being placed. Costumers will place their orders from a menu rendered from a database and after making their selections the order will be added to a second database. The second recive the name of the item and a unique number provided by a counter at submission. 
## Wireframes
![Home](https://github.com/jpacheco008/julios-kitchen/blob/master/HomeWireFrame.png)
![Order](https://github.com/jpacheco008/julios-kitchen/blob/master/PlaceOrderWireFrame.png)
![Recipt](https://github.com/jpacheco008/julios-kitchen/blob/master/ReceiptWireFrame.png)
## Component Hierarchy
![Hierarchy](https://github.com/jpacheco008/julios-kitchen/blob/master/Julio's%20Kitchen.png)

## API and Data Sample
```
{
    "records": [
        {
            "id": "recMwIzHcklifR2c3",
            "fields": {
                "picture": "https://i2.wp.com/www.eatthis.com/wp-content/uploads/2018/10/guacamole-mortar-pestle.jpg?resize=640%2C360&ssl=1",
                "name": "Guacamole",
                "description": "This Guacamole is the perfect start to any meal",
                "type": "appetizer"
            },
            "createdTime": "2020-12-04T00:46:59.000Z"
        },
        {
            "id": "rec2f7SrFn94o2C26",
            "fields": {
                "picture": "https://assets.bonappetit.com/photos/58a34e1df12ac6e639bf24ae/16:9/w_2560%2Cc_limit/argentinian-beef-empanadas.jpg",
                "name": "Argentinian Beef Empanadas",
                "description": "These Argentinian empanadas are so good you'll want them as a full meal",
                "type": "appetizer"
            },
            "createdTime": "2020-12-04T00:46:59.000Z"
        },
        {
            "id": "recysCsvahzUGzuyG",
            "fields": {
                "name": "Irish Beef Stew",
                "description": "A bowl of hearty beef and roof vegetables stew made with red wine for a fantastic flavor",
                "picture": "https://www.simplyrecipes.com/wp-content/uploads/2015/03/irish-beef-stew-horiz-a2-1800.jpg",
                "type": "appetizer"
            },
            "createdTime": "2020-12-04T20:15:18.000Z"
        }
    ],
    "offset": "recysCsvahzUGzuyG"
}
{
    "records": [
        {
            "id": "recVnREd7saNpEW2p",
            "fields": {
                "order-number": "001",
                "order-name": "Franchesca ",
                "item": "Argentinian Beef Empanadas"
            },
            "createdTime": "2020-12-04T13:47:24.000Z"
        },
        {
            "id": "recaFeSp4cT7uClHm",
            "fields": {
                "item": "Strawberries Romanoff",
                "order-name": "Stephanie",
                "order-number": "002"
            },
            "createdTime": "2020-12-04T20:49:55.000Z"
        },
        {
            "id": "recIx8wtZ1d7Zy6Tj",
            "fields": {
                "item": "Irish Beef Stew",
                "order-name": "Nawal",
                "order-number": "003"
            },
            "createdTime": "2020-12-04T20:51:44.000Z"
        }
    ],
    "offset": "recIx8wtZ1d7Zy6Tj"
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
- JS logic
### Weaknesses:
- CSS, Styling 

### Opportunities:
- I can see this as the backbone of an app a real reastaurant can use
### Threats:
- working with 2 different databases