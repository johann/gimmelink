const basecamp = (function() {
  firebase.initializeApp(config);
  let db = firebase.firestore();

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

  return {
    createLink: function(linkObj, cb) {
      const word = words.random();
      const correctLink = sanitizeLink(linkObj.link);
      var docsRef = db.collection("links").doc(word);
      const expiration = addExpiration(linkObj.expiration);
      docsRef.set({ link: correctLink, expiration: expiration });
      cb(word, correctLink);
    }
  };
})();

//
// function createLink(linkObj, cb) {
//   const word = words.random();
//   const correctLink = sanitizeLink(linkObj.link);
//   var db = firebase.firestore();
//   var docsRef = db.collection("links").doc(word);
//   const expiration = addExpiration(linkObj.expiration);
//   docsRef.set({ link: correctLink, expiration: expiration });
//   cb(word, correctLink);
// }
//
// function addExpiration(timeAmount) {
//   const date = new Date();
//   return new Date(date.getTime() + timeAmount * 60000);
// }
//
// function sanitizeLink(link) {
//   if (!link.includes("https")) {
//     return `https://${link}`;
//   } else {
//     return link;
//   }
// }
