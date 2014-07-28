/**
 * Created by TanghaoTsui on 14-7-23.
 */



var ShortMessageList = {
    setList:function(value){
        localStorage.setItem("ShortMessageList",value);
    },
    getList:function(){
        return JSON.parse(localStorage.getItem('ShortMessageList'))
    },
    setItem:function(key,value){
        localStorage.setItem(key,value);
    },
    getItem:function(key){
        return localStorage.getItem(key);
    },
    removeItem:function(key){
        return localStorage.removeItem(key);
    }
};


