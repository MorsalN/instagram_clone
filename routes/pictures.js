const express = require('express');
const router = express.Router();

router.get('/all', function(req, res, next) {
  const photos = ['http://clipart-library.com/img1/493170.gif', 'https://vignette.wikia.nocookie.net/icarly/images/c/c7/Powerpuff-Girls-cn07.jpg/revision/latest?cb=20100813233046', 'https://i.cartoonnetwork.com/prismo/props/chars/fostershome_180x180.png', 'https://i.pinimg.com/236x/6f/f1/34/6ff134000d23e9413b7bbcb1a24635f3--cartoon-disney-cartoon-picture.jpg']

  res.send(200, JSON.stringify(photos));
});

router.get('*', function(req, res, next) {
  return res.render('index');
});

module.exports = router;
