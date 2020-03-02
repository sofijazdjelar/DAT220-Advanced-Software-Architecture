import paho.mqtt.client as mqtt
import time
import datetime
import random
import json

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)


fmt = "%Y%m%d"
mydate = [time.strftime(fmt)+"00", time.strftime(fmt)+"23"]
hour = datetime.timedelta(hours=1)
start_time,  end_time = [
    datetime.datetime.strptime(d, fmt+"%H") for d in mydate]
now = start_time

while now <= end_time:
    time.sleep(1)
    client.publish("health/step_count",
                   json.dumps({'time': now.strftime(fmt+"%H"), 'steps': str(random.randint(300, 500))}))
    time.sleep(1)
    client.publish("health/glucose_level",
                   json.dumps({'time': now.strftime(fmt+"%H"), 'level': str(round(random.uniform(3, 8), 2))}))
    time.sleep(1)
    client.publish("health/heart_rate",
                   json.dumps({'time': now.strftime(fmt+"%H"), 'bpm': str(round(random.uniform(70, 90), 2))}))
    time.sleep(1)
    print(now.strftime(fmt+"%H"))
    now += hour
