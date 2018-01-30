import fire from "../config/firebase";
import randomWords from "random-words";

export function findLink(word, cb) {
  var docsRef = fire
    .firestore()
    .collection("links")
    .doc(word);
  docsRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log(doc.data());
        let { expiration } = doc.data();

        if (!checkExpiration(expiration)) {
          cb(true, doc.data());
        } else {
          removeLink(word);
          cb(false);
        }

        cb(true, doc.data());
      } else {
        cb(false);
      }
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
}

export function removeLink(word) {
  var docsRef = fire
    .firestore()
    .collection("links")
    .doc(word)
    .delete()
    .then(function() {
      console.log("Document successfully deleted!");
    })
    .catch(function(error) {
      console.error("Error removing document: ", error);
    });
}
export function createLink(linkObj, cb) {
  const word = randomWords();
  const correctLink = sanitizeLink(linkObj.link);
  var docsRef = fire
    .firestore()
    .collection("links")
    .doc(word);

  const expiration = addExpiration(linkObj.expiration);
  docsRef.set({ link: correctLink, expiration: expiration });
  cb(word, correctLink);
}

function checkExpiration(expiration) {
  let now = new Date();
  let expirationDate = Date.parse(expiration);
  console.log(now, expirationDate);
  if (now > expirationDate) {
    return true;
  } else {
    return false;
  }
}

function addExpiration(timeAmount) {
  const date = new Date();
  return new Date(date.getTime() + timeAmount * 60000);
}

function sanitizeLink(link) {
  if (!link.includes("https")) {
    return `https://${link}`;
  } else {
    return link;
  }
}
