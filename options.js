// Wait for document to load
document.addEventListener('DOMContentLoaded', function() {
	// Define buttons to wait for click on
	var autoButton = document.getElementById('optionAuto');
	var manualButton = document.getElementById('optionManual');
	
	//Initialize selection based on current settings
	autoButton.addEventListener('click', function(){
		chrome.storage.sync.set({'toggle': true}, function() {
			console.log("Default View: Automatic");
		});
	});
	
	manualButton.addEventListener('click', function(){
		chrome.storage.sync.set({'toggle': false}, function() {
			console.log("Default View: Manual");
		});
	});
});