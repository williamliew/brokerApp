var bidderList = [];
if(window.localStorage.storedBidderList) {
  Array.prototype.push.apply(bidderList, window.localStorage.storedBidderList.split(','));
}

export default {
  getInitialList: function() {
    return {
      bidderList: bidderList
    };
  },

  addToArray: function(value) {
    bidderList.push(value);

    console.log(bidderList);

    window.localStorage.storedBidderList = bidderList.toString();

  },

  updateList: function(newBidder) {
    return "bidderList";
  }
};
