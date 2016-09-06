var Rtorrent = require ('node-rtorrent');

var RTorrent = {

  rtorrent: null,

  init: function(cb) {
    if(this.server == null) {
      var rtorrent = new Rtorrent(sails.config.rtorrent);
      cb(rtorrent);
    } else {
      cb(this.rtorrent)
    }
  }

};

module.exports = RTorrent;
