# Qikserve's Dashboard Menu challenge

This challenge consists of building a react application to allow managers managing a menu in a restaurant.
Of course, we are gonna build limited features as a whole dashboard would take too much time :D

Restaurant Data should be consumed from the provided json below. Do not mock the json's, fetch the data from url below.
[https://cdn-dev.preoday.com/senior-fe-menu-challenge.json](https://cdn-dev.preoday.com/senior-fe-menu-challenge.json)


## Deliveries
- Please deploy the solution in a shared URL so i can see the results without needing to run.
- Please fork this repository on your account and invite ronaldo.zanoni@qikserve.com, felipe.loge@qikserve.com and caio.ricci@qikserve.com.



## UI - Application

I expect your application to be able to:
- Render all items from URL above (I'm not expliciting how)
- - Please don't use paginations. I don't to click on page to see its contents.
- An item should be showing:
- - Item name
- - Item image (if available)
- When hovering an item, i would like to see an "edit" button
- Clicking on "edit" button, i would like to see the item's details on right side.
- I don't expect to see lags in the application.

An example of how it is in our platform currently:
![MicrosoftTeams-image (118)](https://github.com/qsengineers/dashboard-large-menu/assets/134649881/57876e34-8d5b-44ff-b291-f08f780a303c)



## Item example

```
{
        "id": 1529509,
        "externalId": "5023377855405,1",
        "name": "WECOMPJACKS MAGIC AP ",
        "internalName": "WECOMPJACKS MAGIC AP ",
        "description": "WE Comp Jacks Magic All Purpose 60L",
        "deliveryFlag": 1,
        "pickupFlag": 1,
        "seatFlag": 0,
        "price": 5.75,
        "visible": 1,
        "availabilityType": "AVAILABLE_NOW",
        "sku": "I1529509",
        "created": "2020-03-26T14:30:43.000+0000",
        "updated": "2020-11-11T18:59:15.000+0000",
        "images": [
            {
                "id": 557839,
                "itemId": 1529509,
                "image": "/usr/venue/9043/menuItem/5e7cbfccc61d5.png",
                "position": 0,
                "created": "2020-03-26T14:44:29.000+0000",
                "updated": "2020-03-26T14:44:29.000+0000"
            }
        ],
        "availableForPublish": true,
        "available": true
    }
```
