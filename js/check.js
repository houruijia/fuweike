﻿            		 function _(id){
		 	return document.getElementById(id);
		 }
		
       
            var dis =  _("nametip");
              dis.style.visibility="hidden";
            var dip =  _("passtip");
               dip.style.visibility="hidden";
               
            var i =  _("iphonetip");
              i.style.visibility="hidden";   
            var p =  _("t-passtip");
              p.style.visibility="hidden";
            var c =  _("checktip");
              c.style.visibility="hidden";
            var e =  _("emailtip");
               e.style.visibility="hidden";

       //进行验证      
              
//           用户名
			var tureName= function(v){
			var reg = /^([a-zA-Z0-9_\u4e00-\u9fa5]){4,20}$/;
					if(reg.test(v)){
				
				 dis.style.visibility="hidden";
				 
			}else{
				dis.style.visibility="visible";
				Dajurp()
			
			}
		}
//密码
		var Opass = function(v){
			
			var reg = /^([a-zA-Z0-9_\u4e00-\u9fa5]){6,16}$/
			if(reg.test(v)){
				
				 dip.style.visibility="hidden";
			}else{
				 dip.style.visibility="visible";
				 Dajurp()
				
			}
			if((v3==" ") ||(v2=="") ){
			 	
				confirm("密码不能为空！");
			}
		}
		
//确认密码		
        var passw = function(){
        	
			var v2 = _("pass").value;
			
			var v3 = _("t-pass").value;
			
			if(v2!=v3){
				
				 p.style.visibility="visible";
				 
			}
			else{
				p.style.visibility="hidden";
			}
			 if((v3==" ") ||(v2=="") ){
			 	
				confirm("密码不能为空！");
			}
//			else{
//				 dip.style.visibility="visible";
//			}
		}
//email
     	var c_email = function(v){
           var reg = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
			if(reg.test(v)){
			
				 e.style.visibility="hidden";
			}else{
				 e.style.visibility="visible";
				 Dajurp()
			
			}
		}
//手机号码
 		var Iphone = function(v){
 			
			var reg = /^1[3-9]\d{9}$/;
			if(reg.test(v)){
				
				 i.style.visibility="hidden";
			}else{
				 i.style.visibility="visible";
				 Dajurp()
				
			}
		}
 //验证码
 		var y_check = function(v){
 			
			var reg = /^[a-zA-Z0-9]{4,5}$/;
			if(reg.test(v)){
			
				 c.style.visibility="hidden";
			}else{
				 c.style.visibility="visible";
				 Dajurp()
				
			}
			
		}
// 
 function Dajurp(){
	      
	      return false
        }
function ajurp(){ 
	
	var inptt=_("inp").checked;	
	var v1=_("user").value;
	var v2=_("pass").value;
	var v3=_("t-pass").value;
	var v4=_("email").value;
	var v5=_("iphone").value;
	var v6=_("check").value;

	if((v1=="")||(v2=="")||(v3=="")||(v4=="")||(v5=="")||(v6=="")||(inptt==false) ){
		
		 confirm("亲！你还没填完信息呐！");
		return false;
	}
	else{
		return true
	 

	}
}

//存储

$(function(){	 
    		var registerLocal = localStorage.getItem('registerList'),  //定义变量registerLocal，获取本地存储数据
						registerList = [],//定义数组变量,
						len,
						registerLocalJson = JSON.parse(registerLocal)  //把获取到的字符串数据转换成数组对象
						if(registerLocalJson != null){ //判断本地存储localStorage是否存在registerList的值,如果存在，则赋予len的值
							len =  registerLocalJson.length //获取本地存储转换的数组长度
						}
						for(var i = 0;i<len;i++){
							registerList.push(registerLocalJson[i]) //把数组对象push进数组里面
						}
						
          $("#load").click(function(){
						var username = $('#user').val(),//定义变量，获取产品名称，并赋值给变量register_title
                            email=$('#email').val(),
                            iphone=$('#iphone').val(),
                            passname=$('#pass').val()
//						    alert(username);
				    localData(username,email,iphone,passname)
						
					 })
                   
					 function localData(user,email,iphoneNum,pass){
					 var register={
					 	user:user,
					 	 email: email,
					 	 iphoneNum:iphoneNum,
					 	 pass:pass
					 
					 
					 }
					registerList.push(register)
					localStorage.setItem("registerList",JSON.stringify(register))
					}
					 
	})	