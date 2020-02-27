import paho.mqtt.client as mqtt
import time

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)
for x in range(1, 10):
   #client.publish("health/heart_rate", "Mock Human Registered: Heart Rate")
    time.sleep(5)
    client.publish("health/step_count", "Mock Human: Step Count")
    time.sleep(5)
    client.publish("health/glucose_level", "Mock Human: Glucose Level")
    time.sleep(5)
    client.publish("health/heart_rate", "Mock Human: Heart Rate")
    time.sleep(5)
