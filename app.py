#!/usr/bin/python3.6
from flask import Flask, jsonify, request, render_template, redirect, url_for, abort, send_from_directory, session
app = Flask(__name__)
@app.route("/", methods=['POST','GET'])
# def main():
# 	data = request.get_json()
# 	delay = 20
# 	final_result = {}
# 	try:
# 		ip = data['ip']
# 		command = data['command'] + '| no-more \n'
# 		# print(command)
# 		connection = checkJuniperDevice().ssh_connect(ip)
# 		result = checkJuniperDevice().connect(connection, command, delay)
# 		final_result = {'result':result}
# 		connection.close()
# 	except:
# 		return jsonify(final_result)
# 	return jsonify(final_result)
def main():
	return render_template('home.html')
if __name__ == "__main__":
	app.run(host="0.0.0.0",port=8880)
