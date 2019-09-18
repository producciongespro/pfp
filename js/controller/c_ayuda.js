"use strict";
const m = new Model(), v = new View;
var infoUser;
$(document).ready(function () {
    loadUserInfo();    
    
});



function loadUserInfo() {    
    v.userInfo(m.getSession(), $("#infoUser"));
    
}

