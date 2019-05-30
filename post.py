import requests
import json
url    = 'http://x.x.x.x:8881/'
headers    = {"Content-Type":"application/json"}

def post(ip, command):
	extra_var = {'ip':ip, 'command':command}
	response   = requests.post(url,headers=headers,data=json.dumps(extra_var))
	launchJobinfo = json.loads(response.text)
	print(launchJobinfo)
	print(launchJobinfo['result'])
post('ip thiet bi', 'show version')