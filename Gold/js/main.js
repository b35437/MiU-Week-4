// JavaScript Document
/*
Name: Nathan Byarley
GOLD
Project: MiU Week 3
Term: 1307
*/
	function byId(b) {
		var elementBy = document.getElementById(b);
		return elementBy;
	}
	
$('#goldPg').on('pageinit', function(){

/*
		//variables for document ID
		var equipmentBtn = byId('equipmentBtn'),
			slotBtn = byId('slotBtn'),
			rarityBtn = byId('rarityBtn'),
			levelBtn = byId('levelBtn'),
			dateBtn = byId('dateBtn');
		
		//add listener to the accordian style layout
		equipmentBtn.addEventListener('click', createAccordian('equipmentHori', 'equipmentList', 'equipmentName'));
		slotBtn.addEventListener('click', createAccordian('slotHori', 'slotList', 'itemList'));
		rarityBtn.addEventListener('click', createAccordian('rarityHori', 'rarityList', 'rarity'));
		levelBtn.addEventListener('click', createAccordian('levelHori', 'levelList', 'levelSlide'));
		dateBtn.addEventListener('click', createAccordian('dateHori', 'dateList', 'date'));
		
		//accordian function, 3 variables assigned
		function createAccordian (var1, var2, var3){
			
			if (! byId(var1)) {
				var	selectDiv = byId(var2);
				
				//Cycle thru the JSON data and create the accordian
				for (var n in json) {
					
					//variables for HTML
					var createHori = document.createElement('li');
					var createImg = document.createElement('img');
					
					//creating the new attributes for the HTML holding the images within JSON 
					createImg.setAttribute("src","img/" + json[n]["itemList"][1] + ".jpg");
					createImg.setAttribute("alt",json[n]["itemList"][1]);
					createImg.setAttribute("height","60px");
					createImg.setAttribute("width","60px");
					createHori.setAttribute("value",json[n][var3][1]);
					createHori.innerHTML=json[n][var3][1];
					createHori.setAttribute("id", var1);
					
					//slect the div and append the results.
					selectDiv.appendChild(createHori);
					createHori.appendChild(createImg);
				
				}
			}
		}
		*/
});	

$('#addItem').on('pageinit', function(){
		
	var myForm = $('#equipmentForm');
		myForm.validate({
		invalidHandler: function(form, validator) {
			},
		submitHandler: function() {
			var data = myForm.serializeArray();
			saveData(this.key);//data
			//dateToday();
		}
		
	});	
	//cleardata event
	var cleardata = byId("cleardata");
	cleardata.addEventListener("click", clearLocal);
	
});
	

	//function allows for today's date to automaticly populate the date field
	//if user removes date error will execute notifying the user that a valid date is required
	//if user wishes to change the date they may do so.
	$(function() {
		var nDate = new Date();
		var month = nDate.getMonth()+1;
		var day = nDate.getDate();
		var year = nDate.getFullYear();
		var dateCom = year + "/" + month + "/" + day;
		
		//populates the datefield filed with the current date by way of the date-picker class.
		$('.date-picker').val(dateCom);
		
	});
	
	//save data function
	var saveData = function(data, key) {
		if(!key) {
		    //if there is no key it means this is a new items and needs a new key.
			var randomID = Math.floor(Math.random()*10000001);
		}else {
		//set the id to the existing key were editing so that it will save over the data
		//the key is the same key thats been passed alon fron the edit buttin even handler
		//to the validate funtion, and then pass here into the store data function.
			randomID = key;
		}
		
		//get form information and store within an object
		var equipment = {};
			equipment.equipmentName = ["Equipment Name:", $("#ename").val()];
			equipment.itemList = ["Item Slot:", $("#itemList").val()];
			equipment.rarity = ["Rarity:", $("input:radio[name=rarity]:checked").val()];
			equipment.levelSlide = ["Item Level:", $("#islide").val()];
			equipment.date = ["Date:", $("#date").val()];
			equipment.savegear = ["Save to List:", $("input:checkbox[name=rarity]:checked").val()];
			equipment.addNote = ["Notes:", $("#note").val()];
			
			//convert object to string
			localStorage.setItem(randomID, JSON.stringify(equipment));
			
			//notify the user, equipment has been added
			alert("Equipment has been Added");
			
	};
	
	var clearLocal = function(){
		if(localStorage.length === 0) {
			    alert("There is no data to clear.");
		    } else {
			    localStorage.clear();
			    alert("All Equipment has been removed");
			    window.location.reload();
			    return false;
		    }
    };
    

    
$('#equipmentNameSearch').on('pageinit', function(){

});	

$('#slotSearch').on('pageinit', function(){
	
});

$('#levelSearch').on('pageinit', function(){
	
});

$('#dateSearch').on('pageinit', function(){
		
});

$('#about').on('pageinit', function(){
	<!-- Tab function on about page -->
	$('#about').delegate('.ui-navbar a', 'click', function () {
    	$(this).addClass('ui-btn-active');
    	$('.content_div').hide();
    	$('#' + $(this).attr('data-href')).show();
	});
});

$('#recent').on('pageinit', function(){
	
});

$('#showdata').on('pageinit', function(){
});
