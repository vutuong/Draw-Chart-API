In this demo, i tried to practise Flask framework, i also used Chart.js to draw IP pool rate of each IP pool.
This demo deployed in VM with Centos 7 OS.
Step 1: Install Flask framewwork (https://cloudwafer.com/blog/installing-flask-on-centos-7/)
	$ pip install Flask
Step2: Create a demo directory called ChartPool. In ChartPool, create app.py file, which include code to render home.html
Step3: In ChartPool, create templates directory, which include home.html
Step4: In home.html, import Chart.js and boottrap,... :), load data from API and display them by using Chart.js

git add .
git commit -a
git push origin