import paho.mqtt.client as mqtt

client = mqtt.Client()
client.connect("127.0.0.1", 1883, 60)
client.publish("safety/smoke", "Mock Event Registered: Smoke")
client.publish("safety/movement", "Mock Event Registered: Movement")
client.disconnect() 
