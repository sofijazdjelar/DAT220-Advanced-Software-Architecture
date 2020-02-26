import paho.mqtt.client as mqtt
import random

def on_message(client, userdata, message):
    print("Message Recieved:"+message.payload.decode())
    # Publishing to datatransmitter
    client.publish("dt/heart_rate", "Heart rate: "+str(random.choice(hrList)))

hrList = [70, 75, 80, 85, 90]

client = mqtt.Client()
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)

client.subscribe("health/heart_rate", qos=1)  # Waiting on mock event

client.loop_forever()
