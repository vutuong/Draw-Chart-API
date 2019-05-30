import requests
import json
url    = 'http://172.27.230.12:8881/'
headers    = {"Content-Type":"application/json"}

def post(ip, command):
	extra_var = {'ip':ip, 'command':command}
	response   = requests.post(url,headers=headers,data=json.dumps(extra_var))
	launchJobinfo = json.loads(response.text)
	print(launchJobinfo)
	print(launchJobinfo['result'])
post('118.70.0.58', 'show version')