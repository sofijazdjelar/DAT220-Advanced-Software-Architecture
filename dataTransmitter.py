import paho.mqtt.client as mqtt

def on_message(client, userdata, message):
    print("Message Recieved: "+message.payload.decode())

client = mqtt.Client()
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)

client.subscribe("dt/smoke", qos=1)
client.subscribe("dt/movement", qos=1)
client.subscribe("dt/locks", qos=1)
client.subscribe("dt/heart_rate", qos=1)

client.loop_forever()
