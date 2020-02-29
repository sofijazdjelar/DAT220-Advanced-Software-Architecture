# DAT220

Advanced Software Architecture: AAL System

## Kickstart the IoT nodes in the house!

Run the following script from main directory to make the house live:

> python startAllSystems.py

## Integration with Firebase

### MQTT

In order to fully integrate Firebase Realtime Database, you need to provide a **key.json** file that is retrievable through the Firebase Console (given that you have an account).

### Frontend

For the frontend to communicate with the Firebase Realtime Database, you need to register an app on your Firebase console. Firebase will then provide you with the necessary credentials, that need to be added into a **config.js** file with the following structure:

```
import firebase from 'firebase'

const config = {
    apiKey: {YOUR_KEY_HERE},
    authDomain: {YOUR_DOMAIN_HERE},
    databaseURL: {YOUR_DATABASE_HERE},
    projectId: {YOUR_ID_HERE},
    messagingSenderId: {YOUR_ID_HERE},
}

// To stop it from complaining
if (!firebase.apps.length)
    firebase.initializeApp(config)

export default firebase;
```
