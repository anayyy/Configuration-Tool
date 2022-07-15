# Configuration Tool
***By Ananya***

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

Thats all for the mock server!!

# Frontend

The frontend is implemented using a React App. The mock server API endpoint is [http://127.0.0.1:5000/config](http://127.0.0.1:5000/config) , if you want to change this, change the value of const ENDPOINT in const.js file inside client/src folder.

To start the app write the following command using the terminal inside client folder.

```bash
npm start
```

If everything goes well the react app should start working.

# Screenshot

![image](https://user-images.githubusercontent.com/77318648/179253688-a7915d59-085b-45a7-84a3-3621c3bddc3e.png)


A full page screen shot of the webpage.

# Ending Note

Thanks for giving me a chance. The tool has all the functionalities specified in the assessment. Hope it works on your end!!
