var GUID = (function(){
  function GUID(){
    do {
      var guid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      });
    } while(GUID.exists(guid));
    GUID.list.push(guid);
    return guid;
  };
  GUID.list = [];
  GUID.exists = function(guid){
    return (GUID.list.indexOf(guid)>-1);
  };
  return GUID;
})();
