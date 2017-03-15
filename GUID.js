var GUID = (function(){
  function GUID(){
    do {
      var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    } while(!GUID.register(guid));
    return guid;
  };
  GUID.create = function(){
    return GUID();
  };
  GUID.version = "1.3.0";
  GUID._list = {};
  Object.defineProperty(GUID, "list", {
    get: function(){
      var list = [];
      for(var k in GUID._list){
        list.push(k);
      }
      return list;
    },
    set: function(newList){
      GUID._list = {};
      for(var i=0; i<newList.length; i++){
        GUID._list[newList[i]] = 1;
      }
    }
  });
  GUID.exists = function(guid){
    return !!(GUID._list[guid]);
  };
  GUID.register = function(guid){
    if(GUID.exists(guid)){
      return false;
    } else {
      GUID._list[guid] = 1;
      return true;
    }
  };
  return GUID;
})();
