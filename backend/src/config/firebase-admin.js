const admin = require("firebase-admin");
const serviceAccount = require("../config/kaizen-auth-20ca9-firebase-adminsdk-fbsvc-6eba7be050.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
