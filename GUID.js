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
  GUID.version = "1.1.0";
  GUID.list = [];
  GUID.exists = function(guid){
    return (GUID.list.indexOf(guid)>-1);
  };
  GUID.register = function(guid){
    if(GUID.exists(guid)){
      return false;
    } else {
      GUID.list.push(guid);
      return true;
    }
  };
  return GUID;
})();
