var localStorageArray = [];
if(window.localStorage.bidderList) {
  Array.prototype.push.apply(localStorageArray, window.localStorage.bidderList.split(','));
}

export default {
  addToArray: function(value) {
    localStorageArray.push(value);
    window.localStorage.bidderList = localStorageArray.toString();
  },

  updateList: function() {

  }
};
