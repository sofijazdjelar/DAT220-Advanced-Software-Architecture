import paho.mqtt.client as mqtt

def on_connect(client, userdata, flags, rc):
   	print("Connected With Result Code "+rc)
  	client.subscribe("topic/test")

def on_message(client, userdata, message):
	print("Message Recieved: "+message.payload.decode())

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)

client.subscribe("topic/test", qos=1)

client.loop_forever()
