
function turn(){
	var  b = _("inlineCheckbox1").checked;
	var  a = _("inlineCheckbox2").checked;
	var  e = _("inlineCheckbox3").checked;
	var  f = _("inlineCheckbox4").checked;
	var  g = _("inlineCheckbox5").checked;
	var  h = _("inlineCheckbox6").checked;
	var  i = _("inlineCheckbox7").checked;
	var  j = _("inlineCheckbox8").checked;
	var  k = _("inlineCheckbox9").checked;
	var  j = _("inlineCheckbox10").checked;
	var  m = _("inlineCheckbox11").checked;
	var  n = _("inlineCheckbox12").checked;
	var  o = _("inlineCheckbox13").checked;
	var  p = _("inlineCheckbox14").checked;
	var  q = _("inlineCheckbox15").checked;
	var  r = _("inlineCheckbox16").checked;
	var  s = _("inlineCheckbox17").checked;
	var  t = _("inlineCheckbox18").checked;
	
	
    var d=_("pass").value;
    
	 if( d!="" &&( b==true||e==true||f==true||g==true||h==true||i==true||j==true||k==true||m==true||n==true||o==true || p==true||q==true||r==true||s==true||t==true)){
	                
	         $(".count").css("background","#009944")
	                      event.returnValue = confirm("亲！你确定提交支付？");
						location.href="pay-success.html";
					if(event.returnValue==true)
					{
						
		                    
						     location.href="pay-success.html";
								
			        }	
						     else{   
				                      event.returnValue = confirm("亲！你确定要放弃支付？");
									location.href="pay-fail.html";
						    }
					      
			    }
			     			
		       else
		       {    
		     	event.returnValue = confirm("亲！你没还填完，请完善");
		     	  $(".count").css("background","#666666") 
		     		
		     	
								 
				if(event.returnValue==true){
					  	return false;}
		     else{
		     	event.returnValue = confirm("亲！确定要放弃本次支付？");
		     	if(event.returnValue==true){
		     		location.href="pay-fail.html";
		     		return false;
		     		location.href="pay-fail.html";
		     	}
		     	return false;
		     }
     }
}
 
$('.pay-p >p:nth-last-child(2').click(function(){

	$(this).next().stop().slideToggle('show')
	
	
})
