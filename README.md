# pu
Polovni udzbenici (Used classbooks)

This project is at the very beginning and my intention is to make a free public service for the highschool students to sell/buy/exchange used classbooks.

In order to test this application, you should execute two shell scripts from the terminal (two tabs or separate terminal windows and keep them open):

```
./1.sh
```

and

```
./2.sh
```

and then open this location in the web browser:

```
http://localhost:8000/
```

## Short explanation
This is based on **Lumen / Vue.js**.

Lumen has built-in web server, that's why script **1.sh** is starting the server with the command:

```
php -S localhost:8000 -t public
```

Another script, **2.sh** is used to run JS compiler and watcher, so it will compile all Vue.js code into useful JS code. The content of the script is:

```
npm run watch-poll
```
