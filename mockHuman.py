import paho.mqtt.client as mqtt
import time
import random
import json

gList = [3, 4, 5, 6, 7, 8]
sList = [800, 900, 1000]
hrList = [70, 75, 80, 85, 90]

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)
for x in range(1, 10):
   # client.publish("health/heart_rate", "Mock Human Registered: Heart Rate")
    time.sleep(5)
    client.publish("health/step_count",
                   json.dumps({'time': str(time.time()), 'steps': str(random.choice(sList))}))
    time.sleep(5)
    client.publish("health/glucose_level",
                   json.dumps({'time': str(time.time()), 'level': str(random.choice(gList))}))
    time.sleep(5)
    client.publish("health/heart_rate",
                   json.dumps({'time': str(time.time()), 'bpm': str(random.choice(hrList))}))
    time.sleep(5)
