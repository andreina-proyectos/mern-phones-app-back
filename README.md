# mern-phones-app-back

# This is a MERN project about Phones Catalog. I did the backend with Node.js and Express.js. And the database is storaged in MongoDB. On the front site, we manage React. 📱📲✨

# At first, run npm install

 You will start with `npm install` command. This will install all dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start` 🚀

Run the app in the development mode.\
First, run `npm start` from the backend project (mer-phones-app-back). This will run the server at the port 8000 [http://localhost:8000](http://localhost:8000)

Then, run `npm start`in the frontend project, and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Test with Postman

You can run the server and put the URL to make some tests in Postman app. For a POST endpoint, you can try with http://localhost:8000/phones/ and sending an object like this changing the example values:

```
    {
        "name": "iPhone SE (2020)",
        "manufacturer": "Apple",
        "description": "Fingerprint (front-mounted), accelerometer, proximity, gyro, compass, barometer, fast charging 18W, 50% in 30 min (advertised)  Qi wireless charging",
        "color": "Black, White, Red",
        "price": "374 EUR",
        "imageFileName":"https://cdn-files.kimovil.com/default/0004/52/thumb_351846_default_big.jpeg",
        "screen": "4.7",
        "resolution": "750 x 1334 px",
        "processor": "Apple A13 Bionic",
        "ram": "3 GB",
        "weight": "203 g",
        "memory": "64GB, 128GB, 256GB",
        "cam": "12MP"
    }

```

I added a file with the Postmancollection to testing to make your life easier 🤞

More information here [https://learning.postman.com/docs/getting-started/introduction/]

### ⭐️ `thanks`
I want to improve! any suggestion is welcome!. Thank you so much to arrive here. Next step will introduce tests on backend and frontend

