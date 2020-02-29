import paho.mqtt.client as mqtt
import time
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate('key.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://ambient-assistant-living.firebaseio.com/'
})

# TODO: Add conditions based on the topic


def on_message(client, userdata, message):
    topic = message.topic

    if topic in ('dt/door_lock', 'dt/window_lock'):
        m_decode = str(message.payload.decode("utf-8", "ignore"))
        m_in = json.loads(m_decode)
        ref = db.reference(topic)
        child = ref.child(m_in["id"])
        time.sleep(1)
        child.update(m_in)


client = mqtt.Client()
client.on_message = on_message
client.connect("127.0.0.1", 1883, 60)

client.subscribe("dt/smoke", qos=1)
client.subscribe("dt/movement", qos=1)
client.subscribe("dt/door_lock", qos=1)
client.subscribe("dt/window_lock", qos=1)
client.subscribe("dt/heart_rate", qos=1)
client.subscribe("dt/step_count", qos=1)
client.subscribe("dt/glucose_level", qos=1)
client.loop_forever()
