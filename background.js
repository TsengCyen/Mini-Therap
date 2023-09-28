import { hideContent } from './common.js';

//---------------------------------------------------------------------------------------
//		Automatic Functions
//---------------------------------------------------------------------------------------
// Functions to run after the application is installed
// Currently not much use
chrome.runtime.onInstalled.addListener(() => {
	console.log("Mini-Therap Installed!");
	
	chrome.storage.sync.set({'toggle': true}, function() {
		console.log("Default View: Automatic");
	});
});

// Ensure to change content by Default on page open
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	// Wait for page to fully load and be active/focused on,
	// then run the hideContent function on the current tab.
	// Also check for new toggle status
		
	if (changeInfo.status == 'complete' && tab.active) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: hideContent,
		});
	}
})