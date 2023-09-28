import { hideContent, showContent } from './common.js';

// Initialize
var toggle = true

//---------------------------------------------------------------------------------------
//		Popup Button Functions
//---------------------------------------------------------------------------------------
// When the Toggle button is clicked, hide/unhide unneeded elements
toggleElementsButton.addEventListener("click", async () => {
	// Wait until the current tab and window are active / in focus
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

	// If content is shown, run the hideContent function in the current tab
	if (!toggle) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: hideContent,
		});
		toggle = !toggle;	// Update Toggle
	}
	// If content is hidden, run the showContent function in the current tab
	else {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			function: showContent,
		});
		toggle = !toggle;	// Update Toggle
	}
});

// When user clicks on the exit button, close the popup menu
exitLink.addEventListener("click", async () => {
	window.close();
});
