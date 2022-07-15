#Configuration Tool
***By Ananya***

[GitHub - anayyy/Configuration-Tool](https://github.com/anayyy/Configuration-Tool)

Clone the above repository to setup the configuration tool

# Backend (Server Setup)

I used Flask to set up an API endpoint that returns the [sample.json](https://drive.google.com/file/d/1N2RC-iqWNE_UU6igyl-ppttrV0b39M1K/view) file as response. You need to install a couple of dependencies besides python to start the server which are Flask and Flask-CORS.

```bash
pip install Flask
```

```bash
pip install flask-cors
```

To start the server go into the server folder and open terminal there and type the following command and hit enter.

```bash
flask run
```

If everything goes fine the server will start running on [http://127.0.0.1:5000/](http://127.0.0.1:5000/) . The API endpoint however is [http://127.0.0.1:5000/config](http://127.0.0.1:5000/config) as requested.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6a042eb1-7414-4d95-bca8-a8d58c05b411/Untitled.png)

Thats all for the mock server!!

# Frontend

The frontend is implemented using a React App. The mock server API endpoint is [http://127.0.0.1:5000/config](http://127.0.0.1:5000/config) , if you want to change this, change the value of const ENDPOINT in const.js file inside client/src folder.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c276d5cf-03dd-4746-a49e-993b3e178cbf/Untitled.png)

To start the app write the following command using the terminal inside client folder.

```bash
npm start
```

If everything goes well the react app should start working.

# Screenshot

![A full page screen shot of the webpage.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de96d22e-f274-4e4a-9d08-1f1d3ca0e0ad/Untitled.png)

A full page screen shot of the webpage.

# Ending Note

Thanks for giving me a chance. The tool has all the functionalities specified in the assessment. Hope it works on your end!!
