const PubSub = {
  publish: function (channel, payload) {
    var event = new CustomEvent(channel, {
      detail: payload
  });
    document.dispatchEvent(event);
  },

  subscribe: function (channel, callback) {
    document.addEventListener(channel, callback);
  }
};

export default PubSub;

//
// const a = 1
// const b = 2
// export {a, b}
//
// const c = 3
// export {c}
// export {capitalise, reverseString} // text_helpers.js
//
// import {capitalise} from '../helpers/text_helpers.js'
