import paho.mqtt.client as mqtt
import time
import json

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)
client.publish("safety/smoke", "Mock Event: Smoke Alarm Triggered")
time.sleep(1)
client.publish("safety/movement", "Mock Event: Movement Detected")
time.sleep(1)
client.publish("security/window_lock",
               json.dumps({'id': '1', 'isOpen': 'false'}))
time.sleep(1)
client.publish("security/window_lock",
               json.dumps({'id': '2', 'isOpen': 'false'}))
time.sleep(1)
client.publish("security/window_lock",
               json.dumps({'id': '3', 'isOpen': 'true'}))
time.sleep(1)
client.publish("security/window_lock",
               json.dumps({'id': '4', 'isOpen': 'true'}))
time.sleep(1)
client.publish("security/window_lock",
               json.dumps({'id': '5', 'isOpen': 'false'}))
time.sleep(1)
client.publish("security/door_lock",
               json.dumps({'id': '1', 'isOpen': 'false'}))
time.sleep(1)
client.publish("security/door_lock",
               json.dumps({'id': '2', 'isOpen': 'false'}))
time.sleep(1)
client.publish("security/face_recog",
               json.dumps({'id': 'bilbo', 'category': 'friend'}))
time.sleep(5)
client.publish("security/face_recog",
               json.dumps({'id': 'saruman', 'category': 'ex_friend'}))
time.sleep(5)
client.publish("security/face_recog",
               json.dumps({'id': 'cat', 'category': 'animal'}))
time.sleep(5)
client.publish("security/face_recog",
               json.dumps({'id': 'unknown', 'category': 'unknown'}))
time.sleep(5)
client.publish("security/face_recog",
               json.dumps({'id': 'none', 'category': 'none'}))
time.sleep(5)
client.disconnect()
