		
		 	var dip=document.getElementById("passtip")
		 		dip.style.visibility="hidden";
		 	var n=document.getElementById("n-nametip")
		 		n.style.visibility="hidden";	
		 		//放数据
		 		
			//    用户名
		var tureName = function(v){	
	        if(v==r!=""){
	        	n.style.visibility="hidden";
	        }
	        else{
	        	n.style.visibility="visible";
	        	
	        }
	        	 if(registerLocalJson=null){
			   confirm('亲！请先注册')
			}
		}

//密码
		var passw = function(v){
			if(v==r_p!=""){
				 dip.style.visibility="hidden";
			}else{
				 dip.style.visibility="visible";
		
	 if(registerLocalJson=null){
	   confirm('亲！请先注册')
	}	
			}
			
			
		}


		  var   registerLocal = localStorage.getItem('registerList'),  //定义变量registerLocal，获取本地存储数据
				registerLocalJson = JSON.parse(registerLocal), 
			    r=registerLocalJson.user,
				r_p=registerLocalJson.pass;
   						
		//判断


  function ajurp(){
  
       v1=document.getElementById("user").value,
	   v2=document.getElementById("pass").value;
	 if(registerLocalJson=null){
	   confirm('亲！请先注册')
	   return false;
	}	
	   if((v1=="")||(v2=="")||(v2!=r_p)||(v1!=r))
	{
		
		confirm("亲！你还没完善信息或者信息错误！");
		return false;
		
	}

}

/*
 存储
 * 
 * */

$(function(){
			 
  
    		var loginLocal = localStorage.getItem('loginList'),  //定义变量loginLocal，获取本地存储数据
						loginList = [],//定义数组变量,
						len,
						loginLocalJson = JSON.parse(loginLocal) ; //把获取到的字符串数据转换成数组对象
						
						if(loginLocalJson != null){ //判断本地存储localStorage是否存在loginList的值,如果存在，则赋予len的值
							len =  loginLocalJson.length //获取本地存储转换的数组长度
						}
						for(var i = 0;i<len;i++){
							loginList.push(loginLocalJson[i]) //把数组对象push进数组里面
						}
						
					
						
          $("#load").click(function(){
						var username = $('#user').val(),//定义变量，获取产品名称，并赋值给变量login_title
                           passname=$('#pass').val();
                           Zchecked=$('.form-down .m-check input').is(":checked")
				         localData(username,passname,Zchecked)
						
					 })
          
                  
                  
           var Zchecked=$('.form-down .m-check input').is(":checked");
           loginLocal = localStorage.getItem('loginList')
            loginLocalJson = JSON.parse(loginLocal) 	
         if(loginLocalJson!=null){    
		  if(loginLocalJson.checked==true){
		  	    loginLocalJson.checked=Zchecked
//		  		location.href="user.html"
			loginLocal = localStorage.getItem('loginList')
		  }
		}		
				function localData(user,pass,checked){
					 var logn={
					 	user:user,
					 	pass:pass,
					 	checked:checked
					 
					         }
					loginList.push(logn)
					localStorage.setItem("loginList",JSON.stringify(logn))
					
					 }
				
				 console.log($(".header-left .active").html())
	})	
	

		 	 
		 	
		 	//判断登录名
		 	