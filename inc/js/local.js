// $(document).ready(function(){
//     $( "#select-doctor-input" ).focus().select();
// });




$(document).ready(function(){
	

	

	$('#customerhistory').DataTable({
		// Internationalisation. For more info refer to http://datatables.net/manual/i18n
		"language": {
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			},
			"emptyTable": "No data available in table",
			"info": "Showing _START_ to _END_ of _TOTAL_ entries",
			"infoEmpty": "No entries found",
			"infoFiltered": "(filtered1 from _MAX_ total entries)",
			"lengthMenu": "_MENU_ entries",
			"search": "Search:",
			"zeroRecords": "No matching records found"
		},
		fixedHeader: {
			footer: true
		},
		// Or you can use remote translation file
		//"language": {
		//   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
		//},

		// setup buttons extentension: http://datatables.net/extensions/buttons/
		buttons: [
			{ extend: 'print', className: 'btn dark btn-outline',footer: true },
			{ extend: 'pdf', className: 'btn green btn-outline',footer: true },
			{ extend: 'csv', className: 'btn purple btn-outline ',footer: true }
		],

		// setup responsive extension: http://datatables.net/extensions/responsive/
		responsive: {
			details: {
			   
			}
		},

		"order": [
			[0, 'asc']
		],
		
		"lengthMenu": [
			[5, 10, 15, 20, -1],
			[5, 10, 15, 20, "All"] // change per page values here
		],
		// set the initial value
		"pageLength": 10,

		"dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

		// Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
		// setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
		// So when dropdowns used the scrollable div should be removed. 
		//"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
	});

	$('#installments').DataTable({
		// Internationalisation. For more info refer to http://datatables.net/manual/i18n
		"language": {
			"aria": {
				"sortAscending": ": activate to sort column ascending",
				"sortDescending": ": activate to sort column descending"
			},
			"emptyTable": "No data available in table",
			"info": "Showing _START_ to _END_ of _TOTAL_ entries",
			"infoEmpty": "No entries found",
			"infoFiltered": "(filtered1 from _MAX_ total entries)",
			"lengthMenu": "_MENU_ entries",
			"search": "Search:",
			"zeroRecords": "No matching records found"
		},
		fixedHeader: {
			footer: true
		},
		// Or you can use remote translation file
		//"language": {
		//   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
		//},

		// setup buttons extentension: http://datatables.net/extensions/buttons/
		

		// setup responsive extension: http://datatables.net/extensions/responsive/
		responsive: {
			details: {
			   
			}
		},

		"order": [
			[0, 'asc']
		],
		
		"lengthMenu": [
			[5, 10, 15, 20, -1],
			[5, 10, 15, 20, "All"] // change per page values here
		],
		// set the initial value
		"pageLength": 10,

		"dom": "<'row' <'col-md-12'B>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r><'table-scrollable't><'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>", // horizobtal scrollable datatable

		// Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
		// setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
		// So when dropdowns used the scrollable div should be removed. 
		//"dom": "<'row' <'col-md-12'T>><'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",
	});

var date = new Date();

var firstDay = new Date(date.getFullYear(), date.getMonth() + 1 , 1);
var lastDay = new Date(date.getFullYear(), date.getMonth() + 2 ,  0);

var fdate = firstDay.getDate();
var fmonth = firstDay.getMonth();
var fyear = firstDay.getFullYear();

var ldate = lastDay.getDate();
var lmonth = lastDay.getMonth();
var lyear = lastDay.getFullYear();

var fd = fdate + "/" + fmonth + "/" + fyear;
var ld = ldate + "/" + lmonth + "/" + lyear;

$("#pay_date_from").val(fd);
$("#pay_date_to").val(ld);

});

$(".advanced").click(function(){
	$("#advanced").css("padding-top","15px");
$("#advanced").toggle(500);

});

$('#patient-cnic').keyup(function(){
    $(this).val($(this).val().replace(/(\d{5})\-?(\d{7})\-?(\d{1})/,'$1-$2-$3'))
});

$('#add-another-procedure').click(function(){
	$(this).hide();
	$('#select-procedure-invoice').show();
	$('#add-procedure-btn-invoice').show();
	$('#no-procedure-btn-invoice').show();
});

$('#btn-discount').click(function(){
	$(this).hide();
	$('#add-discount-invoice').show();
	$('#invoice-discount').hide();
});

$('#btn-partial').click(function(){
	$('.editpay').show();
});

$('#add-partial-btn').click(function(){
	var paid = $('#paid_amount').val();
	$('#doned').text(paid);
	$('.editpay').hide();
});

$('#close-discount').click(function(){	
	var subtotal = parseFloat($('#subtotal').text().slice(4));
	var tax_applied = parseFloat($('#tax_applied').text().slice(4));
	var final_total = parseFloat($('#final_total').text().slice(4));
	var tax_amount = parseFloat($('#tax_amount').text());						
	var actual_total = parseFloat(subtotal);
	var tax_total = parseInt((actual_total*tax_amount)/100);
	var real_total = parseFloat(actual_total+tax_total);			
	$('#discount_amount').text("Rs. 0");
	$('#tax_applied').text("Rs. "+tax_total);
	$('#subtotal').text("Rs. "+actual_total);
	$('#final_total').text("Rs. "+real_total);
	if(parseFloat(actual_total)<=0){	$('.print-btn').hide();	}	else{	$('.print-btn').show();	}
	$('#add-discount-invoice').hide();
	$('#invoice-discount').hide();
	$('#btn-discount').show();
});

$('#add-discount-btn').click(function(){
	$('#add-discount-invoice').hide();
	$('#discount_reason').text($('#discount_text').val());
	var subtotal = parseFloat($('#subtotal').text().slice(4));
	var tax_amount = parseFloat($('#tax_amount').text());							
	if($('#discount_percentage').val()!='0')
	{		var cal = parseInt((subtotal * parseFloat($('#discount_percentage').val()))/100);	}
	else if($('#discount_percentage').val()=='0'&&$('#discount_price').val()!='0')
	{		var cal = parseFloat($('#discount_price').val());		}				
	else { var cal = 0; }
	var tax_total = parseInt((subtotal*tax_amount)/100);
	$('#discount_amount').text("Rs. "+cal);
	$('#final_total').text("Rs. "+parseFloat((subtotal+tax_total)-cal));	
	$('#invoice-discount').show();		
	$('#btn-discount').show();
});


$('.confirm-delete-doctor').on('click', function(e) {
    e.preventDefault();    
    var id = $(this).data('id');
    $('#delete_doctor').attr('href','delete-doctor/'+id);
    $('#myModaldoctor').modal('show');
});

$('.confirm-delete-procedure').on('click', function(e) {
    e.preventDefault();    
    var id = $(this).data('id');
    $('#delete_procedure').attr('href','delete-Pay/'+id);
    $('#myModalprocedure').modal('show');
});


$("#confirm-delete-pay").on('click', function(e) {
  
alert("a");
    // e.preventDefault();    
    // var id = $(this).data('id');
    // $('#delete_procedure').attr('href','delete-Pay/'+id);
    // $('#myModalprocedure').modal('show');
});


$("#select-doctor-name").on('input', function () {
	var val = this.value;
	$("#doctorsList option").each(function(i,el) {  
		if(val.toUpperCase()==$(el).val().toUpperCase()){ $('#select-doctor-id').val($(el).data("value")); }				   
	});          
});

$("#select-procedure-name").on('input', function () {
	var val = this.value;
	$("#proceduresList option").each(function(i,el) {  
		if(val.toUpperCase()==$(el).val().toUpperCase()){ 
			$('#select-procedure-id').val($('#select-procedure-id').val()+","+$(el).data("value")); 
			var s = $(el).data("value");			
			var cost = parseFloat($('#no_'+s).val());
			var html = '<tr id="row_suit_'+s+'"><td><i class="remove_suit fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="suit_'+s+'"></i></td><td class="sbold"><span id=name_suit_'+s+'>'+val+'</span></td><td class="text-center sbold"></td><td class="text-right sbold">Rs. '+cost+'</td></tr>';
			$('.suitbill tr:first').before(html);
			var approx_total = parseFloat($('#approx_total').text().slice(4));
			var new_total = parseFloat(approx_total+cost);
			$('#approx_total').text("Rs. "+new_total);
			$('#select-procedure-name').val('');			
			$("#proceduresList option[value='"+$(el).val()+"']").remove();
			$('#my_list').show();
		}				   
	});          
});


$("body").on("click", ".remove_suit", function(){
	var remid = this.id.slice(5);
// alert(remid);
	var cost = parseFloat($('#Quantity_suit_'+remid).text());	
	
	// alert(cost);
	var named = $('#name_suit_'+remid).text();
	var newopt = '<option id="l_'+remid+'" data-value="'+remid+'" value="'+named+'"></option>';
	$("#proceduresList").append(newopt);
	$('#row_suit_'+remid).remove();


	// var approx_total = parseFloat($('#approx_total').text());
	// var new_total = parseFloat(approx_total-cost);
	// $('#approx_total').text(new_total);
	 //if(new_total==0){$('#my_list').hide();}
	// var old = $('#select-procedure-id').val();	
	// var older = old.replace(","+remid, "");
	// $('#select-procedure-id').val(older);

	var maintotal = 0 ;
	$('.suitbill tr').each(function(row , tr){
		if($(tr).find('td:eq(6)').text() == "")
			{	}
		else{
				maintotal = maintotal + parseFloat($(tr).find('td:eq(6)').text());
			}
											}); 
	var dicount = parseFloat($('#disc_total').val());
	if(dicount == "")
	{discount = 0;}
	var newtotal  = maintotal - dicount;
	$("#approx_total").text(newtotal);  
	if(newtotal <= 0 ){$('#my_list').hide();}

});



$("#no-procedure-btn-invoice").click(function () {
	$('#select-procedure-invoice').hide();
	$('#add-procedure-btn-invoice').hide();
	$('#no-procedure-btn-invoice').hide();
	$('#add-another-procedure').show();
});

$("#add-procedure-btn-invoice").click(function () {
	var val = $('#select-procedure-invoice').val();					
	$("#billprocedureList option").each(function(i,el) {  		
		if(val.toUpperCase()==$(el).val().toUpperCase()){ 
			i=1;			
			var s = "pro_"+$(el).data("value");						
			var cost = $('#'+s).val();
			$("#billprocedureList option[value='"+$(el).val()+"']").remove();
			var html = '<tr id="row_'+s+'"><td><i class="remove_bill hidden-print fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="rem_'+s+'"></i></td><td class="sbold"><span id=name_'+s+'>'+val+'</span></td><td class="text-center sbold"></td><td class="text-center sbold"></td><td class="text-right sbold">Rs. '+cost+'</td></tr>'
			$('.lastbill tr:first').before(html);
			$('#select-procedure-invoice').val('');
			var subtotal = parseFloat($('#subtotal').text().slice(4));
			var tax_applied = parseFloat($('#tax_applied').text().slice(4));
			var final_total = parseFloat($('#final_total').text().slice(4));
			var tax_amount = parseFloat($('#tax_amount').text());					
			var actual_total = parseFloat(subtotal+parseFloat(cost));
			var tax_total = parseInt((actual_total*tax_amount)/100);
			var cal=0;
			var current = $('#all-finalized').val();
			var newcur = current.split(',');			
			newcur.push($(el).data("value"));
			$('#all-finalized').val(newcur.toString());			
			if($('#discount_percentage').val()!='0')
			{		cal = parseInt((actual_total * parseFloat($('#discount_percentage').val()))/100);	}
			else if($('#discount_percentage').val()=='0'&&$('#discount_price').val()!='0')
			{		cal = parseFloat($('#discount_price').val());		}			
			else { cal = 0; }
			
			console.log($('#discount_price').val());

			var real_total = parseFloat((actual_total+tax_total)-cal);			
			$('#discount_amount').text("Rs. "+cal);
			$('#tax_applied').text("Rs. "+tax_total);
			$('#subtotal').text("Rs. "+actual_total);
			$('#final_total').text("Rs. "+real_total);
			if(parseFloat(actual_total)<=0){	$('.print-btn').hide();	}	else{	$('.print-btn').show();	}
		}				   
	});          
});










 $(function() {
      $('#regen_search_dates').daterangepicker({},
      function () {
         });
  });
 
  $(function() {
      $('#Client_report_search_dates').daterangepicker({},
      function () {
         });
  });


// $("body").on("click", ".remove_bill", function(){
// 	var remid = this.id.slice(8);	
// 	var cost = $('#pro_'+remid).val();	
// 	var named = $('#name_pro_'+remid).text();
// 	var newopt = '<option id="list_'+remid+'" data-value="'+remid+'" value="'+named+'"></option>';
// 	var subtotal = parseFloat($('#subtotal').text().slice(4));
// 	var tax_applied = parseFloat($('#tax_applied').text().slice(4));
// 	var final_total = parseFloat($('#final_total').text().slice(4));
// 	var tax_amount = parseFloat($('#tax_amount').text());	
// 	var actual_total = parseFloat(subtotal-parseFloat(cost));	
// 	var tax_total = parseInt((actual_total*tax_amount)/100);
// 	var cal=0;
// 	var current = $('#all-finalized').val();
// 	var newcur = current.split(',');
// 	newcur = jQuery.grep(newcur, function(value) { return value != remid; });
// 	$('#all-finalized').val(newcur.toString());			
// 	if($('#discount_percentage').val()!='0')
// 	{		cal = parseInt((actual_total * parseFloat($('#discount_percentage').val()))/100);	}
// 	else if($('#discount_percentage').val()=='0'&&$('#discount_price').val()!='0')
// 	{		cal = parseFloat($('#discount_price').val());		}			
// 	else { cal = 0; }	
// 	var real_total = parseFloat((actual_total+tax_total)-cal);			
// 	$('#discount_amount').text("Rs. "+cal);
// 	$('#tax_applied').text("Rs. "+tax_total);
// 	$('#subtotal').text("Rs. "+actual_total);
// 	$('#final_total').text("Rs. "+real_total);
// 	$('#row_pro_'+remid).remove();
// 	$("#billprocedureList").append(newopt);
// 	if(parseFloat(actual_total)<=0){	$('.print-btn').hide();	}	else{	$('.print-btn').show();	}
// });



// $('.next-step').click(function(){
// 	$('#second-step').show();$('#second').show();
// 	$('#first-step').hide();$('#first').hide();
// 	if($('#select-doctor-name').val()!=''&&$('#select-procedure-id').val()!=''&&$('#select-datetime').val()!='')
// 	{
// 		$('.part_one').removeClass('error');
// 		$('.part_one').addClass('done');
// 	}
// 	else
// 	{
// 		$('.part_one').removeClass('done');
// 		$('.part_one').addClass('error');
// 	}
// 	$('.part_two').addClass('active');	
// });

// $('.previous-step').click(function(){
// 	$('#second-step').hide();$('#second').hide();
// 	$('#first-step').show();$('#first').show();
// 	$('.part_one').removeClass('done');
// 	$('.part_one').removeClass('error');
// 	$('.part_one').addClass('active');
// 	$('.part_two').removeClass('active');	
// });

// $('.part_two').click(function(){
// 	$('#second-step').show();$('#second').show();
// 	$('#first-step').hide();$('#first').hide();
// 	if($('#select-doctor-name').val()!=''&&$('#select-procedure-id').val()!=''&&$('#select-datetime').val()!='')
// 	{
// 		$('.part_one').removeClass('error');
// 		$('.part_one').addClass('done');
// 	}
// 	else
// 	{
// 		$('.part_one').removeClass('done');
// 		$('.part_one').addClass('error');
// 	}
// 	$('.part_two').addClass('active');	
// });

// $('.part_one').click(function(){
// 	$('#second-step').hide();$('#second').hide();
// 	$('#first-step').show();$('#first').show();
// 	$('.part_one').removeClass('done');
// 	$('.part_one').removeClass('error');
// 	$('.part_one').addClass('active');
// 	$('.part_two').removeClass('active');	
// });



// $('#patient-number').focusout(function(){
// 	var number = $('#patient-number').val();
// 	$.ajax({
// 	     type: "POST",        
// 	     url: "get-patient",                           
// 	     dataType: "json",        
// 	     data: {number: number},
// 	     cache: false,        

// 	     success: function( msg ) {                                                     
// 	       var json_data = msg;                    
// 	       if(json_data.count>0)
// 	       {
// 	       	   $('#patient-cnic').val(json_data.patient[0].patient_cnic);
// 		       $('#patient-fname').val(json_data.patient[0].patient_fname);
// 		       $('#patient-lname').val(json_data.patient[0].patient_lname);	       
// 	       }	       
// 	       else
// 	       {
// 	       	   $('#patient-cnic').val('');
// 		       $('#patient-fname').val('');
// 		       $('#patient-lname').val('');	       
// 	       }
// 	     },
// 	});
// });

// $('#r-patient-number').focusout(function(){	
// 	var number = $('#r-patient-number').val();	      
// 	var all = window.location.href;
// 	all = all.substring(0, all.indexOf('reschedule'));			
// 	$.ajax({
// 	     type: "POST",        	     	     
//        	 dataType: "json",
// 	     url: all+"get-patient",                           	       
// 	     data: {number: number},

// 	     success: function( msg ) {                                                     	       
// 	       var json_data = msg;     	                     
// 	       $('#r-patient-cnic').val(json_data.patient[0].patient_cnic);
// 	       $('#r-patient-fname').val(json_data.patient[0].patient_fname);
// 	       $('#r-patient-lname').val(json_data.patient[0].patient_lname);	       	       
// 	     },
// 		  error: function(req, status, err) 
// 	      {	      	
// 	      	console.log(req);              	
// 	      }
// 	   });
// });


$('.Sub-Job').click(function(){

alert("abc");
}); 


// $('.appointment_details').click(function(){
// 	var app = this.id;

// 	$.ajax({
// 	     type: "POST",        
// 	     url: "get-appointment",                           
// 	     dataType: "json",        
// 	     data: {app: app},
// 	     cache: false,        

// 	     success: function( msg ) {                                                     
// 	       var json_data = msg;  
// 	       $('#appointment-reference').html('');	
// 	       $('#appointment-procedures').html('');	
// 	       $('#appointment-schedule').html('');		                              
// 	       $('#appointment-reference').html(json_data.appointment[0].appointment_reference);
// 	       $('#appointment-patient').html(json_data.appointment[0].patient_fname+' '+json_data.appointment[0].patient_lname+'<br>'+json_data.appointment[0].patient_number);
// 	       $('#appointment-doctor').html(json_data.appointment[0].doctor_name+'<br>'+json_data.appointment[0].appointment_date+' '+json_data.appointment[0].appointment_time);

// 	       var len = json_data.procedures.length;
// 	       var total = 0; var time = 0;
// 	       var html=''; var status = ''; var btn = '';

// 	       if(json_data.appointment[0].appointment_status==0) { 
// 	       	status = '<label class="label label-danger">Missed</label>'; 
// 	       	btn  = '<a href="restart/'+json_data.appointment[0].appointment_reference+'"><button class="btn btn-primary btn-lg btn-block">Reschedule and Start</button></a>';
// 	       }
// 	       else if(json_data.appointment[0].appointment_status==1) { 
// 	       	status = '<label class="label label-primary">Registered</label>'; 
// 	       	btn  = '<a href="start/'+json_data.appointment[0].appointment_reference+'"><button class="btn btn-primary btn-lg btn-block">Start Appointment</button></a>';
// 	       }
// 	       else if(json_data.appointment[0].appointment_status==2) { 
// 	       	status = '<label class="label label-success">Active</label>'; 
// 	       	btn  = '<a href="complete/'+json_data.appointment[0].appointment_reference+'"><button class="btn btn-primary btn-lg btn-block">Complete</button></a>';
// 	       }
// 	       else if(json_data.appointment[0].appointment_status==3) { 
// 	       	status = '<label class="label label-primary">Completed</label>'; 
// 	       	btn  = '<a href="view-bill/'+json_data.appointment[0].appointment_reference+'"><button class="btn btn-primary btn-lg btn-block">View Invoice</button></a>';
// 	       }

// 	       $('#appointment-status').html(status);
// 	       $('#appointment-schedule').html(btn);

// 	       if(json_data.appointment[0].appointment_status==2||json_data.appointment[0].appointment_status==3)
// 	       {
// 	       		$('.appointment-reschedule').hide();
// 				$('.appointment-delete').hide();
// 	       }
// 	       else
// 	       {
// 	       		$('.appointment-reschedule').show();$('.appointment-delete').show();
// 	       		$('.appointment-reschedule').attr("id",json_data.appointment[0].appointment_reference);
// 	       		$('.appointment-delete').attr("id",json_data.appointment[0].appointment_reference);
// 	       }	       

// 	       for(var i=0;i<len;i++)
// 	       {
// 	       		total = total + parseFloat(json_data.procedures[i].procedure_cost);
// 	       		time = time + parseInt(json_data.procedures[i].procedure_time);
// 	       		html += '<tr><td>'+parseInt(i+1)+'</td><td>'+json_data.procedures[i].procedure_name+'</td><td>'+json_data.procedures[i].procedure_cost+'</td>';
// 	       }

// 	       html += '<tr><td></td><td><b>Total</b></td><td><b>'+total+'<b></td>';

// 	       $('#appointment-procedures').html(html);
// 	     },
// 	   });	
// });




$('#EmployeeForJob').change(function(){


	 var ItemId =   $('#EmployeeForJob option:selected').attr('value');
	 var ItemName =   $('#EmployeeForJob option:selected').text();     


	//  $('#WorkStart').val(0) ;
	 //  alert(ItemId);

	 $.ajax({
		type: "POST",
		dataType: "json",    
		url: "Item/get_item_price",
		data: {'id' :ItemId},
		success: function(response){
		//  alert(response);
		 var json_data = response;
		//  alert(json_data[0].item_price);
		 
		if(json_data[0].item_price == 0)
		{
			$('#WorkStart').val(0) ;
		}
		else{
			$('#WorkStart').val(json_data[0].item_price) ;
		}
			}
			});
		
});




var rowcount = 0 ;
$("#add-to-list").on('click', function () {

	

var WorkRate = $('#WorkRate').val();
 var WorkStart = $('#WorkStart').val(); 
 var WorkEnd = $('#WorkEnd').val();
 var ItemId =   $('#EmployeeForJob option:selected').attr('value');     
 var ItemName =   $('#EmployeeForJob option:selected').text();     
 var rowTotal = parseFloat(WorkStart) * parseFloat(WorkRate) ;

 if(WorkRate <= 0 || WorkStart <= 0 )
 {
	 alert("Cannot add Item");
 }
 else{


 // alert(clientId + clientName +SiteId + SiteName + WorkRate + WorkStart + WorkEnd + EmployeeId + EmployeeName);
rowcount = rowcount + 1; 
var html = '<tr id="row_suit_'+rowcount+'"><td style="display:none;">'+rowcount+'</td><td style="display:none;">'+ItemId+'</td><td ><i class="remove_suit fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="suit_'+rowcount+'"></i> </td><td class="sbold"><span id=name_suit_'+rowcount+'>'+ItemName +'</span></td><td class="sbold"><span id=name_suit_'+rowcount+'>'+WorkRate +'</span></td> <td class="text-center sbold">'+WorkStart+'</td><td class="text-center sbold" id=Quantity_suit_'+rowcount+'>'+rowTotal+'</td></tr>';

// var totalbefore =parseFloat($("#approx_total").text());
// var disc = $('#disc_total').val();
// var totalnow = totalbefore + rowTotal - disc;

$('.suitbill tr:first').before(html); 
$('#my_list').show();

	var maintotal = 0 ;
	// var newtotal = 0 ;
	    $('.suitbill tr').each(function(row , tr){
			if($(tr).find('td:eq(6)').text() == "")
			{	}
			else{
				maintotal = maintotal + parseFloat($(tr).find('td:eq(6)').text());
			}
		}); 
 var dicount = parseFloat($('#disc_total').val());
$("#approx_total").text(maintotal - dicount);
}
});


$('#save-jobs').click(function(){


	if ( parseFloat($('#approx_total').text()) <=  0 )
	{
		alert ("Cannot Make Sale of Amount 0");
	}
	else{

 var frmdata={
	customername : $('#CustomerName').val(),
	Discount : $('#disc_total').val(),
	Amount : $('#approx_total').text(),
	total : parseFloat($('#approx_total').text()) + parseFloat($('#disc_total').val()) 
			   };
			   
			//    alert (frmdata.customername   + frmdata.Discount + frmdata.Amount + frmdata.total);
//alert(frmdata);

var TableData;
TableData = storeTblValues()
TableData = JSON.stringify(TableData);
// TableData = json_encode(TableData);
	function storeTblValues()
	{		
	    var TableData = new Array();
	    $('.suitbill tr').each(function(row, tr){
	        TableData[row]={
		          "ItemId" :$(tr).find('td:eq(1)').text()
		         ,"ItemName" :$(tr).find('td:eq(3)').text()
				 ,"Quantity" : $(tr).find('td:eq(4)').text()
				 ,"Price" :$(tr).find('td:eq(5)').text()
	             ,"TotalPrice" : $(tr).find('td:eq(6)').text()
			}    
	    }); 
		TableData.pop();
		TableData.pop();
		  // first 2  row was Total and discount - so removed
	    return TableData;
	}
		 $.ajax({
		    type: "POST",
		    url: "job/add_job",
		    data: {'frm' :frmdata , 'tbl':TableData},
		    success: function(response){
			//  alert(response);
		      window.location.href = "new-sale"	;				     		  
				}
				});


			}
		});


		$("#disc_total").on('input', function () {
			var val = this.value;
			if (val == "")
			{
				$('#disc_total').val(0);
			} 
			if (val.length >=2 )
			{
				$('#disc_total').val(val.replace(/^0+/, ''));
			}
			var maintotal = 0 ;
			    $('.suitbill tr').each(function(row , tr){
					if($(tr).find('td:eq(6)').text() == "")
						{	}
					else{
							maintotal = maintotal + parseFloat($(tr).find('td:eq(6)').text());
						}
															}); 
				var dicount = parseFloat($('#disc_total').val());
				if(dicount == "")
				{
					discount = 0;}
				$("#approx_total").text(maintotal - dicount);  

		
		});




 $("#regen_data").click(function() {
		
		var SiteId = $('#regn_site option:selected').attr('value');
        var start = $("#regen_search_dates").data('daterangepicker').startDate.format('YYYY/MM/DD');
        var end = $("#regen_search_dates").data('daterangepicker').endDate.format('YYYY/MM/DD');

		// alert(client);
    
     $.ajax({
        	type: "POST",        
 			     url: "Job/regen_data",                           
 			     dataType: "json",        
 			     data: {sid: SiteId, Dstart:start , Dend: end},
 			     cache: false,  
			    success: function( msg ) { 	   
			        
			        // alert(msg); 
			  	    // console.log(msg);

				     var json_data = msg;	
				 	 var length = json_data.results.length;	       	
			   	         if(length==0)
				       	{ 
				       	$(".table").find("tr:gt(0):not(:last)").remove();
				       	$("#final_total").text(0);
				       	$('.noresults').show();
				       	}
				       else
				        {
				       	 var Total = 0 ;
				       	$(".table").find("tr:gt(0):not(:last)").remove();
				       	$("#final_total").text(0);

				       		 for(var i=0;i<length;i++)
				            {
				               // alert(json_data.results[i].Job_Id);
				         	   var myRow = '<tr class="slelectMe" id="row_suit_'+json_data.results[i].Job_Id+' " role="button"><td ><i class="remove_suit fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="suit_'+json_data.results[i].Job_Id+'"></i> </td><td  style="display:none;">'+json_data.results[i].EmpId+'</td><td  style="display:none;">'+json_data.results[i].cid+'</td><td style="display:none;">'+json_data.results[i].sid+'</td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].Client+'</span></td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].Site+'</span></td><td class="text-left sbold">'+json_data.results[i].Name+'</td><td class="text-center sbold">'+json_data.results[i].Start+'</td><td class="text-center sbold">'+json_data.results[i].End+'</td><td class="text-right sbold" id="pro_'+json_data.results[i].Job_Id+'"> '+ json_data.results[i].WorkRate+'</td></tr>'
							   Total =  Total + parseFloat(json_data.results[i].WorkedHours) 
						
							  $(".table tbody").prepend(myRow);
				           }
							 $("#final_total").text(Total);
				        }
			      // }, 1000);                                                	       
			    },
			    error: function (req, status, err) {
		            // console.log(err);
		        }
        });
    });



$('#regn_site').change(function(){

	var SiteId = $('#regn_site option:selected').attr('value');
        var start = $("#regen_search_dates").data('daterangepicker').startDate.format('YYYY/MM/DD');
        var end = $("#regen_search_dates").data('daterangepicker').endDate.format('YYYY/MM/DD');

		// alert(client);
    
     $.ajax({
        	type: "POST",        
 			     url: "Job/regen_data",                           
 			     dataType: "json",        
 			     data: {sid: SiteId, Dstart:start , Dend: end},
 			     cache: false,  
			    success: function( msg ) { 	   
			        
			        // alert(msg); 
			  	    // console.log(msg);

				     var json_data = msg;	
				 	 var length = json_data.results.length;	       	
			   	         if(length==0)
				       	{ 
				       	$(".table").find("tr:gt(0):not(:last)").remove();
				       	$("#final_total").text(0);
				       	$('.noresults').show();
				       	}
				       else
				        {
				       	 var Total = 0 ;
				       	$(".table").find("tr:gt(0):not(:last)").remove();
				       	$("#final_total").text(0);

				       		 for(var i=0;i<length;i++)
				            {
				               // alert(json_data.results[i].Job_Id);
				         	   var myRow = '<tr class="slelectMe" id="row_suit_'+json_data.results[i].Job_Id+' " role="button"><td ><i class="remove_suit fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="suit_'+json_data.results[i].Job_Id+'"></i> </td><td  style="display:none;">'+json_data.results[i].EmpId+'</td><td  style="display:none;">'+json_data.results[i].cid+'</td><td style="display:none;">'+json_data.results[i].sid+'</td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].Client+'</span></td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].Site+'</span></td><td class="text-left sbold">'+json_data.results[i].Name+'</td><td class="text-center sbold">'+json_data.results[i].Start+'</td><td class="text-center sbold">'+json_data.results[i].End+'</td><td class="text-right sbold" id="pro_'+json_data.results[i].Job_Id+'"> '+ json_data.results[i].WorkRate+'</td></tr>'
							   Total =  Total + parseFloat(json_data.results[i].WorkedHours) 
						
							  $(".table tbody").prepend(myRow);
				           }
							 $("#final_total").text(Total);
				        }
			      // }, 1000);                                                	       
			    },
			    error: function (req, status, err) {
		            // console.log(err);
		        }
        });



});







	$("body").on("click", ".slelectMe", function(){
			// Get row Values 
		 var remid = this.id.slice(9);
  		 var EmpId = $(this).closest("tr").find('td:eq(1)').text();	 
	     var clientId = $(this).closest("tr").find('td:eq(2)').text();	 
		 var siteId = $(this).closest("tr").find('td:eq(3)').text();
	     var clientName = $(this).closest("tr").find('td:eq(4)').text();
	     var Worked_Site = $(this).closest("tr").find('td:eq(5)').text();	 
		 var Emp_Name = $(this).closest("tr").find('td:eq(6)').text();
		 var SD = $(this).closest("tr").find('td:eq(7)').text();
		 var ED = $(this).closest("tr").find('td:eq(8)').text();
		 var WR = $(this).closest("tr").find('td:eq(9)').text();

     	 //Set Modal Values 

	 	$("#newJobClient").val(clientId).change();
		$("#newJobSite").val(siteId).change();
		$("#newJobEmployee").val(EmpId).change();
	     document.getElementById("WorkRate").value = WR;
	     document.getElementById("WorkStart").value = SD;
	     document.getElementById("WorkEnd").value = ED;	     
         $('.changeRow').attr('id', this.id)

	     $("#jobModal").modal();

	});


$('.changeRow').click(function(){	


      var clientId  = $('#newJobClient option:selected').attr('value');   
      var siteId  = $('#newJobSite option:selected').attr('value'); 
      var EmpId  = $('#newJobEmployee option:selected').attr('value');   

	  var clientName = 	$('#newJobClient option:selected').text();
	  var siteName = 	$('#newJobSite option:selected').text();
	  var employeeName = $('#newJobEmployee option:selected').text();

	   var rate =   document.getElementById("WorkRate").value;
	   var start =   document.getElementById("WorkStart").value;
	   var end = document.getElementById("WorkEnd").value;	    


       var row = $(".table").find('tr[id="' + this.id + '"]')




row.find('td').eq(1).text(EmpId);
row.find('td').eq(2).text(clientId);
row.find('td').eq(3).text(siteId);
row.find('td').eq(4).text(clientName);
row.find('td').eq(5).text(siteName);
row.find('td').eq(6).text(employeeName);
row.find('td').eq(7).text(start);
row.find('td').eq(8).text(end);
row.find('td').eq(9).text(rate);


});



$('#the-regen-jobs').click(function(){

var TableData;
TableData = storeTblValues()
TableData = JSON.stringify(TableData);
//TableData = json_encode(TableData);

	function storeTblValues()
	{		
	    var TableData = new Array();
	    $('.lastbill tr').each(function(row, tr){
	        TableData[row]={
		          "EmpId" :$(tr).find('td:eq(1)').text()
		         ,"ClientId" :$(tr).find('td:eq(2)').text()
		         ,"SiteId" :$(tr).find('td:eq(3)').text()
	             ,"WorkRate" :$(tr).find('td:eq(9)').text()
	            , "WorkStart" : $(tr).find('td:eq(7)').text()
	            , "WorkEnd" : $(tr).find('td:eq(8)').text()
	        }    
	    }); 

	  //  TableData.pop();  // first row was Total - so removed
	    return TableData;
	}

		 $.ajax({
		    type: "POST",
		    url: "job/save_job_via_regen",
		    data: {'tbl':TableData},
		    success: function(response){
			 // alert(response);
		      window.location.href = "jobs";				     		  
				}
				});
		});


$('.appointment-reschedule').click(function(){	
	window.location.href = "reschedule/"+this.id;
});

$('.appointment-delete').click(function(){	
	window.location.href = "delete-appointment/"+this.id;
});

$('.print-btn').click(function(){
	var app = $('#app_id').val();
	var procedures = $('#all-finalized').val();
	var tax = parseFloat($('#tax_applied').text().slice(4));
	var discount = parseFloat($('#discount_amount').text().slice(4));
	var reason = $('#discount_reason').text();
	var final = parseFloat($('#final_total').text().slice(4));	
	var paid = parseFloat($('#doned').text());	

	var all = window.location.href;
	all = all.substring(0, all.indexOf('new-bill'));				

	$.ajax({
	     type: "POST",        
	     url: all+"update-bill",                           
	     dataType: "json",        
	     data: {app: app, procedures: procedures, tax: tax, discount: discount, reason: reason, final: final, paid: paid},
	     cache: false,        

	    beforeSend: function(){ 
	    	console.log("Sent");
        },
	    success: function( msg ) {                                                     
	       console.log("Updated");
	    },
	    error: function (req, status, err) {
            console.log(err);
        } 
	});
});

$('.complete-btn').click(function(){
	var app = $('#app_id').val();
	var procedures = $('#all-finalized').val();
	var tax = parseFloat($('#tax_applied').text().slice(4));
	var discount = parseFloat($('#discount_amount').text().slice(4));
	var reason = $('#discount_reason').text();
	var final = parseFloat($('#final_total').text().slice(4));
	var paid = parseFloat($('#doned').text());		

	var all = window.location.href;
	all = all.substring(0, all.indexOf('new-bill'));				

	$.ajax({
	     type: "POST",        
	     url: all+"update-bill",                           
	     dataType: "json",        
	     data: {app: app, procedures: procedures, tax: tax, discount: discount, reason: reason, final: final, paid: paid},
	     cache: false,        

	    beforeSend: function(){ 
	    	console.log("Sent");
        },
	    success: function( msg ) {                                                     
	       console.log("Updated");
	    },
	    error: function (req, status, err) {
            console.log(err);
        } 
	});
});



$('#newJobClient').change(function(){

 var client =   $('#newJobClient option:selected').attr('value');     

$('#newJobSite option').each(function() {
        $(this).remove();
});

	$.ajax({
	     type: "POST",        
	     url: "Site/SiteOfClient",                           
	     dataType: "json",        
	     data: { val: client },
	     cache: false,        

	    success: function( msg ) { 	

					 var json_data = msg;		       
				  	 var length = json_data.res.length;	       			      	       		
			
			           if(length==0)
				       	{		}
			
				       else
				       {
				       		for(var i=0;i<length;i++)
				           {
							 $('#newJobSite').append($('<option>', { 
      						  value: json_data.res[i].S_Id,
      						  text : json_data.res[i].Name 
   							 }));
				           }
				       }
	    },
	    error: function (req, status, err) {
            console.log(err);
        } 
	});
});


$('#searcher').keyup(function(){
	var search = $('#searcher').val();
	var total = parseInt("<?php echo $all;?>");
	var Emp = '';
	$.ajax({
	     type: "POST",        
	     url: "searcher",                           
	     dataType: "json",        
	     data: {search: search, Emp: Emp},
	     cache: false,        

	    beforeSend: function(){ 
	    	$('.final').hide();                 	
	    	$('.noresults').hide();
	    	$('.loading').show(); 	    	                
        },
	    success: function( msg ) { 	       
	       var json_data = msg;		       
		   var length = json_data.results.length;	       
	       setTimeout(function(){ 	       		
	       	   $('.loading').hide();  
//	       	   alert(length);
		       if(length==0)
		       	{	$('.noresults').show();	}
		       else
		       {
		       		for(var i=0;i<length;i++)
		           {
		           		//alert(json_data.results[i].Job_Id);
		           	 $('#search_'+json_data.results[i].Job_Id).show();
		           }
		       }

	       }, 1000);                                                	       
	    },
	    error: function (req, status, err) {
            console.log(err);
        } 
	});
});





// $(".yesno").twbsToggleButtons();

//  $("#main_search_employee").change(function() {

//     var employee = this.value;
//     // var client =   $('#main_search_client option:selected').attr('value');   
//     var dates = $("#main_search_dates").val();

//         $.ajax({
//         	type: "POST",        
//  			     url: "Search",                           
//  			     dataType: "json",        
//  			     data: {EmpId: employee},
//  			     cache: false,  
//  			     beforeSend: function(){ 
// 			    	$('.final').hide();                 	
// 			    	$('.noresults').hide();
// 			    	$('.loading').show(); 	    	                
// 		        },
// 			    success: function( msg ) { 	   
// 			   	console.log(msg);
    
// 					 var json_data = msg;		       
// 				   var length = json_data.results.length;	       
// 			       setTimeout(function(){ 	       		
// 			       	   $('.loading').hide();    
// 				       if(length==0)
// 				       	{	$('.noresults').show();	}
// 				       else
// 				       {
// 				       		for(var i=0;i<length;i++)
// 				           {
// 				           		//alert(json_data.results[i].Job_Id);
// 				           		$('#search_'+json_data.results[i].Job_Id).show();
// 				           }
// 				       }
// 			       }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            console.log(err);
// 		        }
//         });
//     });

//  $("#main_search_client").change(function() {

// 	var client = this.value;
//     var employee =  $('#main_search_employee option:selected').attr('value');
//     var dates = $("#main_search_dates").val();

// // alert(client);
//         $.ajax({
//         	type: "POST",        
//  			     url: "Search",                           
//  			     dataType: "json",        
//  			     data: {EmpId: employee ,clientId: client , Dates:dates},
//  			     cache: false,  
//  			     beforeSend: function(){ 
// 			    	$('.final').hide();                 	
// 			    	$('.noresults').hide();
// 			    	$('.loading').show(); 	    	                
// 		        },
// 			    success: function( msg ) { 	  

// 			    console.log(msg);

// 			   var json_data = msg;		       
// 				   var length = json_data.results.length;	       
// 			       setTimeout(function(){ 	       		
// 			       	   $('.loading').hide();    
// 				       if(length==0)
// 				       	{	$('.noresults').show();	}
// 				       else
// 				       {
// 				       		for(var i=0;i<length;i++)
// 				           {
// 				           	//	alert(json_data.results[i].Job_Id);
// 				           		$('#search_'+json_data.results[i].Job_Id).show();
// 				           }
// 				       }
// 			       }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            console.log(err);
// 		        }
//         });
//     });


// $(document).on('click','.ranges',function(){
//  		var client =   $('#main_search_client option:selected').attr('value');
//        	var employee =  $('#main_search_employee option:selected').attr('value');
//     	var dates = $("#main_search_dates").val();
//         $.ajax({
//         	type: "POST",        
//  			     url: "Search",                           
//  			     dataType: "json",        
//  			     data: {EmpId: employee ,clientId: client , Dates:dates},
//  			     cache: false,  

//  			     beforeSend: function(){ 
// 			    	$('.final').hide();                 	
// 			    	$('.noresults').hide();
// 			    	$('.loading').show(); 	 

// 				//alert("inside ajax");   	                
// 		        },
// 			    success: function(msg) { 	
// 			    	console.log(msg);
			      
// 			      var json_data = msg;		       
// 				   var length = json_data.results.length;	       
// 			       setTimeout(function(){ 	       		
// 			       	   $('.loading').hide();    
// 				       if(length==0)
// 				       	{	$('.noresults').show();	}
// 				       else
// 				       {
// 				       		for(var i=0;i<length;i++)
// 				           {
// 				           		//alert(json_data.results[i].Job_Id);
// 				           		$('#search_'+json_data.results[i].Job_Id).show();
// 				           }
// 				       }
// 			       }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            console.log(err);
// 		            		        }
//         });
// });



// $("#add").click(function () {
// 	var val = $('#select-procedure-invoice').val();					
// 	$("#billprocedureList option").each(function(i,el) {  		
// 		if(val.toUpperCase()==$(el).val().toUpperCase()){ 
// 			i=1;			
// 			var s = "pro_"+$(el).data("value");						
// 			var cost = $('#'+s).val();
// 			$("#billprocedureList option[value='"+$(el).val()+"']").remove();
// 			var html = '<tr id="row_'+s+'"><td><i class="remove_bill hidden-print fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="rem_'+s+'"></i></td><td class="sbold"><span id=name_'+s+'>'+val+'</span></td><td class="text-center sbold"></td><td class="text-center sbold"></td><td class="text-right sbold">Rs. '+cost+'</td></tr>'
// 			$('.lastbill tr:first').before(html);
// 			$('#select-procedure-invoice').val('');
// 			var subtotal = parseFloat($('#subtotal').text().slice(4));
// 			var tax_applied = parseFloat($('#tax_applied').text().slice(4));
// 			var final_total = parseFloat($('#final_total').text().slice(4));
// 			var tax_amount = parseFloat($('#tax_amount').text());					
// 			var actual_total = parseFloat(subtotal+parseFloat(cost));
// 			var tax_total = parseInt((actual_total*tax_amount)/100);
// 			var cal=0;
// 			var current = $('#all-finalized').val();
// 			var newcur = current.split(',');			
// 			newcur.push($(el).data("value"));
// 			$('#all-finalized').val(newcur.toString());			
// 			if($('#discount_percentage').val()!='0')
// 			{		cal = parseInt((actual_total * parseFloat($('#discount_percentage').val()))/100);	}
// 			else if($('#discount_percentage').val()=='0'&&$('#discount_price').val()!='0')
// 			{		cal = parseFloat($('#discount_price').val());		}			
// 			else { cal = 0; }
			
// 			console.log($('#discount_price').val());

// 			var real_total = parseFloat((actual_total+tax_total)-cal);			
// 			$('#discount_amount').text("Rs. "+cal);
// 			$('#tax_applied').text("Rs. "+tax_total);
// 			$('#subtotal').text("Rs. "+actual_total);
// 			$('#final_total').text("Rs. "+real_total);
// 			if(parseFloat(actual_total)<=0){	$('.print-btn').hide();	}	else{	$('.print-btn').show();	}
// 		}				   
// 	});          
// });





//   $(function() {
//       $('#pay_search_dates').daterangepicker({},
//       function () {
//         var start = $("#pay_search_dates").data('daterangepicker').startDate.format('YYYY/MM/DD');
//         var end = $("#pay_search_dates").data('daterangepicker').endDate.format('YYYY/MM/DD');

// 					$('#pay_search_employee option').each(function() {$(this).remove();});					
// 					$.ajax({
					
// 					     type: "POST",        
// 					     url: "Pay/EmployeesForPay",                           
// 					     dataType: "json",        
// 					     data: { Dstart: start , Dend: end },
// 					     cache: false,        
					
// 					     success: function( msg ) {
// 									 var json_data = msg;		       
// 								  	 var length = json_data.res.length;	       			      	       		
// 							           if(length==0)
// 								       	{		
// 								       	}
// 								       else
// 								       {
// 								       		for(var i=0;i<length;i++)
// 								           {
// 											 $('#pay_search_employee').append($('<option>', { 
// 				      						  value: json_data.res[i].EmpId,
// 				      						  text : json_data.res[i].Name 
// 				   							 }));
// 								           }

// 								           $('#pay_search_employee').trigger('change');

// 								       }
// 					    },
// 					    error: function (req, status, err) {
// 				            console.log(err);
// 				        } 
// 					});
//         });
//   });







//  $("#Client_report_search_client").change(function() {
//      	var client = this.value; 
//         var start = $("#Client_report_search_dates").data('daterangepicker').startDate.format('YYYY/MM/DD');
//         var end = $("#Client_report_search_dates").data('daterangepicker').endDate.format('YYYY/MM/DD');

//      $.ajax({
//         	type: "POST",        
//  			     url: "pay/Client_report_data",                           
//  			     dataType: "json",        
//  			     data: {clientId: client, Dstart:start , Dend: end},
//  			     cache: false,  
// 			    success: function( msg ) { 	   
			    	
// 				    // alert(msg);
// 			  	    // console.log(msg);

// 				     var json_data = msg;	
// 				 	 var length = json_data.results.length;	       	
// 			   	         if(length==0)
// 				       	{ 
// 				       	$(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0);
// 				       	$('.noresults').show();
// 				       	}
// 				       else
// 				        {
// 				       	 var Total = 0 ;
// 				       	$(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0);

// 				       		 for(var i=0;i<length;i++)
// 				            {
// 				               // alert(json_data.results[i].Job_Id);
// 				         	   var myRow = '<tr id="row_'+json_data.results[i].Job_Id+'"><td></td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].Site+'</span></td><td class="text-left sbold">'+json_data.results[i].Name+'</td><td class="text-center sbold">'+json_data.results[i].Start+'</td><td class="text-center sbold">'+json_data.results[i].End+'</td><td class="text-right sbold" id="pro_'+json_data.results[i].Job_Id+'"> '+ json_data.results[i].WorkedHours+'</td></tr>'
// 							   Total =  Total + parseFloat(json_data.results[i].WorkedHours) 
						
// 							  $(".table tbody").prepend(myRow);
// 				           }
// 							 $("#final_total").text(Total);
// 				        }
// 			      // }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            // console.log(err);
// 		        }
//         });
//     });



//  $("#daily_job_report_date").change(function() {
// 	// alert(this.value);
//      $.ajax({

//         	type: "POST",        
//  			     url: "job/daily_sales_report_data",                           
//  			     dataType: "json",        
//  			     data: {D: this.value},
//  			     cache: false,  
// 			    success: function( msg ) { 	   
			 
// 				     var json_data = msg;	
// 				 	 var length = json_data.results.length;	       	
// 			   	         if(length==0)
// 				       	{ 
// 				       	 $(".table").find("tr:gt(0):not(:last)").remove();
// 				       	 $("#final_total").text(0);
// 				       	 $('.noresults').show();
// 				       	}
// 				       else
// 				        {
// 				       	 var Total = 0 ;
// 					   	 var DisTotal = 0 ;
				       
// 						 $(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0);

// 				       		 for(var i=0;i<length;i++)
// 				            {
// 								// alert(json_data.results[i].sale_amount);
// 				               // alert(json_data.results[i].Job_Id);
// 				         	    var myRow = '<tr id="row_'+json_data.results[i].sale_id+'"><td></td><td class="text-left sbold">'+json_data.results[i].customer_name+'</td><td class="text-center sbold">'+json_data.results[i].sale_total+'</td><td class="text-center sbold">'+json_data.results[i].sale_discount+'</td><td class="text-right sbold" id="pro_'+json_data.results[i].sale_id+'"> '+ json_data.results[i].sale_amount+'</td></tr>'
// 								Total =  Total + parseFloat(json_data.results[i].sale_amount) 
// 								DisTotal = DisTotal + parseFloat(json_data.results[i].sale_discount)
						
// 							   $(".table tbody").prepend(myRow);
// 				           }
// 							  $("#final_total").text(Total);
// 				        }
// 			      // }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            // console.log(err);
// 		        }
//         });


//  });



//  $("#pay_search_employee").change(function() {

//      var employee = this.value; 
//      if (employee != -1 ) {    
//      var dates = $("#pay_search_dates").val();
//      var client = -1 

// //       alert(this.value);    
//       // alert(dates);
//         $.ajax({
//         	type: "POST",        
//  			     url: "Search",                           
//  			     dataType: "json",        
//  			     data: {EmpId: employee ,clientId: client, Dates:dates},
//  			     cache: false,  
//  			    //  beforeSend: function(){ 
// 			    	// // $('.final').hide();                 	
// 			    	// // $('.noresults').hide();
// 			    	// // $('.loading').show(); 	    	                
// 		      //   },
// 			    success: function( msg ) { 	   
// 			  	 	console.log(msg);
// 				   var json_data = msg;		       
// 				   var length = json_data.results.length;	       
// 			     //  setTimeout(function(){ 	       		
// 			       	   // $('.loading').hide();    
// 				       if(length==0)
// 				       	{ 
// 				       	$(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0 +" $");
// 				       		// $('.noresults').show();	
// 				       	}
// 				       else
// 				       {

// 				       	var Total = 0 ;
// 				       	$(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0 +" $");

// 				       		 for(var i=0;i<length;i++)
// 				            {
// 				           // alert(json_data.results[i].Job_Id);
// 				         	var myRow = '<tr id="row_'+json_data.results[i].Job_Id+'"><td><i class="remove_bill hidden-print fa fa-times-circle-o" style="cursor: pointer;" aria-hidden="true" id="rem_'+json_data.results[i].Job_Id+'"></i></td><td class="sbold"><span id=name_'+json_data.results[i].Job_Id+'>'+json_data.results[i].WorkedDay+'</span></td><td class="text-left sbold">'+json_data.results[i].SiteName+'</td><td class="text-center sbold">'+json_data.results[i].WorkedHours+'</td><td class="text-center sbold">'+json_data.results[i].WorkRate+'</td><td class="text-right sbold" id="pro_'+json_data.results[i].Job_Id+'"> '+ json_data.results[i].WorkedHours * json_data.results[i].WorkRate+' $</td></tr>'				
				
// 							Total =  Total + json_data.results[i].WorkedHours * json_data.results[i].WorkRate
// 							$(".table tbody").prepend(myRow);
// 				           }

// 							$("#final_total").text(Total +" $");
// 				        }
// 			      // }, 1000);                                                	       
// 			    },
// 			    error: function (req, status, err) {
// 		            console.log(err);
// 		        }
//         });

// 		}
// 		else{
// 						$(".table").find("tr:gt(0):not(:last)").remove();
// 				       	$("#final_total").text(0 +" $");
// 		}


//     });

// $("body").on("click", ".remove_bill", function(){
// 	var remid = this.id.slice(4);	
// 	var cost = parseFloat($('#pro_'+remid).text().slice(0,-2));
// 	// alert(cost);

// 	var final_total = parseFloat($('#final_total').text().slice(0,-2));
// 	var actual_total = parseFloat(final_total-parseFloat(cost));	
// 	$('#row_'+remid).remove();
// 	$('#final_total').text(actual_total+" $");
// 	// if(parseFloat(actual_total)<=0){	$('.print-btn').hide();	}	else{	$('.print-btn').show();
// 	// }
// });


// $('.ViewPay').click(function(){	

// 	var id = this.id.slice(8);
// 	window.location.href = "View_Pay/"+id;

// });

// $('#gen-pay').click(function(){	

// var frmdata={

// EmpId: $('#pay_search_employee').val(),
// Emp_name: $('#pay_search_employee option:selected').text(),
// Dates: $('#pay_search_dates').val(),
// paymentTotal: $('#final_total').text().slice(0,-2)

// };

// 	var TableData;
// 	TableData = storeTblValues()
// 	TableData = JSON.stringify(TableData);



// 	function storeTblValues()
// 	{
// 	    var TableData = new Array();
// 		$('.lastbill tr').each(function(row, tr){
// 		var rowId = this.id.slice(4);

// 	      TableData[row]={
// 	           	"id" : rowId ,
// 	            "day" :$(tr).find('td:eq(1)').text(),
// 	            "site" :$(tr).find('td:eq(2)').text(), 
// 	            "hours" : $(tr).find('td:eq(3)').text(),
// 	            "rate" : $(tr).find('td:eq(4)').text(),
// 	            "total" : $(tr).find('td:eq(5)').text().slice(0,-2)
// 	           }
// 	    });

// 	    TableData.pop();  //first row was Total - so removed
// 	    return TableData;
// 	}

// 		 	$.ajax({
// 		 	   type: "POST",
// 		 	   dataType:"JSON",
// 		 	   url: "Pay/Genrate_Emp_Pay",
// 			   data: {'frm' :frmdata , 'tbl':TableData},

// 			    beforeSend: function(){ 
// 			    	$('.sucloading').show();           
// 		        },

// 			   success: function(msg){
// 			  			setTimeout(function(){ 	       		
// 							$('.sucloading').hide(); 		 
// 							alert("Saved");    		  	

// 							window.location.href = "pay";
				
// 				       }, 1000);                 
// 				},
// 			error:function(req,satus,err){
// 				console.log(req);
// 				console.log(status);
// 				console.log(err);
// 			}				
// 				});
// });


// $('.set_edit_id').click(function(){
// 	var app = this.id;

// 	$('#Edit-Job').attr("id",app);

// });

// $('.set_edit_id').click(function(){
// 	var app = this.id;

// 	$('#Void-Job').attr("id",app);

// });



// $('#Edit-Job').click(function(){	
// 	var app = this.id;
// 	window.location.href = "view-job/"+this.id;
// });
// $('#Void-Job').click(function(){	
// 	var app = this.id;
// 	window.location.href = "void-job/"+this.id;
// });



// // function getRandomColor() {
// //   var letters = '0123456789ABCDEF';
// //   var color = '#';
// //   for (var i = 0; i < 6; i++) {
// //     color += letters[Math.floor(Math.random() * 16)];
// //   }
// //   return color;
// // }

// $(document).ready(function(){	

// 	 $('#calendar').fullCalendar('option', {
//   				firstDay: 1,
//   				displayEventEnd: true
// 					});


// 	if(page_title=="Calendar")
// 	{	

// 		$.each( ev, function( key, value ) {  

// 			// var bg = { 1 : "#ccc" , 2 : "#ffc107" ,3 :"#5cb85c" , 4 :"#ea3a3c", 5 :"#00162b"}; 

// 	        var eid = key;
// 			// console.log(eid);

// 	        var name = value.name;
// 	        var eRSDate = new Date(value.SDate);
// 	        var eREDate = new Date(value.EDate);
// 	       	var eSdate = new Date(eRSDate.getFullYear() , eRSDate.getMonth() ,eRSDate.getDate() ,value.STimeHour,value.STimeMin);
// 			var eEdate = new Date(eREDate.getFullYear() ,eREDate.getMonth(), eREDate.getDate(),value.ETimeHour,value.ETimeMin);
           



//             // var color = value.col; 
//              console.log(value.cal);


//              console.log(name);


//              console.log(eREDate.getDate());

// 	        // var day = edate.getDay();
// 	        // var month = edate.getMonth();
// 	        // var year = edate.getFullYear();
// 	        // var hour = etime.getHours();
// 	        // var minute = etime.getMinutes();
// 	         var event={id:eid, title: name, start: eSdate, end:  eEdate, backgroundColor: value.cal};

// 	        // var event={id:eid, title: name, start: eSdate, end:  eSdate};
// 			// alert(event);

// 			 $('#calendar').fullCalendar( 'renderEvent', event, true);



			 


// 	    });		
    
//     }

// });


// $(document).ready( function() {
//     	$(document).on('change', '.btn-file :file', function() {
// 		var input = $(this),
// 			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
// 		input.trigger('fileselect', [label]);
// 		});

// 		$('.btn-file :file').on('fileselect', function(event, label) {
		    
// 		    var input = $(this).parents('.input-group').find(':text'),
// 		        log = label;
		    
// 		    if( input.length ) {
// 		        input.val(log);
// 		    } else {
// 		        // if( log ) alert(log);
// 		    }
	    
// 		});
// 		function readURL(input) {
// 		    if (input.files && input.files[0]) {
// 		        var reader = new FileReader();
		        
// 		        reader.onload = function (e) {
// 		            $('#img-upload').attr('src', e.target.result);
// 		        }
		        
// 		        reader.readAsDataURL(input.files[0]);
// 		    }
// 		}

// 		$("#imgInp").change(function(){
// 		    readURL(this);
// 		}); 	
// 	});


// $("#newJob").submit(function(event){
//   	event.preventDefault();
// });






//  $(document).ready(function(){  
//       $('#create_excel').click(function(){  
//            var excel_data = $('.table').html();  



// // console.log(excel_data);
//            var page = "excel.php/data=" + excel_data;  
//            	window.location.href = page; 
//       });  
//  });
 
 

 


// webkit-border-radius: 0!important