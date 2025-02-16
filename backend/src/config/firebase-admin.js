const admin = require("firebase-admin");
const serviceAccount = require("./kaizen-auth-20ca9-firebase-adminsdk-fbsvc-a8409b66c3.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
