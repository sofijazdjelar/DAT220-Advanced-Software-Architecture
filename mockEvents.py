import paho.mqtt.client as mqtt
import time

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)
client.publish("safety/smoke", "Mock Event: Smoke Alarm Triggered")
time.sleep(10)
client.publish("safety/movement", "Mock Event: Movement Detected")
time.sleep(10)
client.publish("security/window_lock", "Mock Event: Window Opened")
time.sleep(10)
client.publish("security/door_lock", "Mock Event: Door Opened")
time.sleep(10)
client.disconnect() 
