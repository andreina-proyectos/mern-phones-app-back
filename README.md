# mern-phones-app-back

# This is a MERN project about Phones Catalog. I did the backend with Node.js and Express.js. And the database is storaged in MongoDB. On the front site, we manage React. 📱📲✨

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You will start with `npm install` command. This will install all dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start` 🚀

Run the app in the development mode.\
First, run `npm start` from the backend project (mer-phones-app-back). This will run the server at the port 8000 [http://localhost:8000](http://localhost:8000)

Then, run `npm start`in the frontend project, and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build` ⚙️

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run pretty`

This will format and indent all code 💅

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Test with Postman

You can run the server and put the URL to make some tests in Postman app. For a POST endpoint, you can try with http://localhost:8000/phones/ and sending an object like this changing the example values:

``
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

``

I added a file with the Postmancollection to testing to make your life easier 🤞

More information here [https://learning.postman.com/docs/getting-started/introduction/]

### ⭐️ `thanks`
I want to improve! any suggestion is welcome!. Thank you so much to arrive here. Next step will introduce tests on backend and frontend

