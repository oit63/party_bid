/**
 * Created by TanghaoTsui on 14-7-28.
 */

var yourChoice = {
    setChoice:function(value){
        localStorage.setItem("yourChoice",value);
    },
    getChoice:function(){
        return JSON.parse(localStorage.getItem('yourChoice'));
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

var SigningUpActivity = {
    setList:function(value){
        localStorage.setItem("SigningUpActivity",value);
    },
    getName:function(){
        return JSON.parse(localStorage.getItem('SigningUpActivity')) || []
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


