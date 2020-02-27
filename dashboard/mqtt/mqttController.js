var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://127.0.0.1:1883')

client.on('connect', () => {
    client.subscribe('dt/smoke', (err) => {
        if (!err) {
            client.publish('presence', 'Hello mqtt')
        }
    })

    client.subscribe('dt/movement', (err) => {
        if (!err) {
            client.publish('presence', "Hello mannen")
        }
    })
})

client.on('message', (topic, message) => {
    console.log("I am here", message.toString())
})

export default client