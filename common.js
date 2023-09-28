//---------------------------------------------------------------------------------------
//		Hide Function
//---------------------------------------------------------------------------------------
// Function to hide all elements we define
// Also add in new elements to simplify work
export function hideContent(){
	//--------------------------
	//		Main Login Page
	//--------------------------
	if(document.URL == "https://secure.therapservices.net/auth/login"){
		// Define elements to hide
		var hideMe = [
			document.querySelector(".leftPaneContainer"),	// Login Page
			document.querySelector(".rightPaneContainer"),
			document.querySelector("#leftPaneFrame")
		];
		
		// Initialize and place a new Div for reorganizing content
		var newLoginDiv = document.createElement("div");
		newLoginDiv.id = "newDiv";
		newLoginDiv.style.width = "65%";
		newLoginDiv.style.margin = "auto";
		document.body.insertBefore(newLoginDiv, document.getElementById("pageContent"));
		
		// Hide elements listed in the hideMe array
		hideMe.forEach(
			function(foundElement){
				foundElement.style.display = 'none';
			}
		);
		
		// Move significant element(s) to new Div for reorganization
		oldParent = document.querySelector(".loginContainer");
		newParent = newLoginDiv;
		while (oldParent.childNodes.length > 0) {
			newParent.appendChild(oldParent.childNodes[0]);
		}
		
	}
	
	//--------------------------
	//		Dashboard Page
	//--------------------------
	if(document.URL == "https://secure.therapservices.net/ma/newfpage/worklist" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/individual" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/health" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/agency" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/admin" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/report" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/ih" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/settings"){
		
		// Define elements to hide
		var hideMe = [
			document.querySelector("#crossProvider > div:nth-child(3)"),		// Dashboard Page Items
			document.querySelector("#rightMenu > div:nth-child(1)"),
			document.querySelector("#rightMenu > div:nth-child(3)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(3)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(5)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(6)"),
			document.querySelector("#rightMenu > div.calendar"),
			document.querySelector("#footer_top")
		];
		
		if(document.URL == "https://secure.therapservices.net/ma/newfpage/health"){
			hideMe.push(
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(13)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(14)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(19)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(20)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(21)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(22)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(23)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(24)")
			)
		}
		
		// Hide all elements
		hideMe.forEach(
			function(foundElement){
				foundElement.style.display = 'none';
			}
		);
		
		// Determine if the user has admin privileges or not (Default false)
		var isAdmin = false;
		
		if(document.getElementById('leftTab').innerHTML.indexOf("admin") !== -1 || document.URL == "https://secure.therapservices.net/ma/newfpage/admin"){
			isAdmin = true;
		}
		
		if(isAdmin){
			// After hiding unneeded items, create a new item for admins
			var currentMenu = document.querySelector("#rightMenu");
			var newItem = document.createElement("div");
			newItem.className = "newRightBox";	// Add Class
			
			// Add new HTML
			newItem.innerHTML = `
				<style>
					.newRightBox {
						border: 1px solid #b0c6d3;
						background-color: #f2f5f7;
						margin-bottom: 10px;
					}
					.newRightBoxHeader {
						background-color: #bf9e00;
						background-image: url(../images/newfpage/rightBox_bull.gif);
						background-repeat: no-repeat;
						background-position: right center;
						color: #FFFFFF;
						font-weight: bold;
						padding: 5px;
						margin-bottom: 5px;
					}
				</style>
				<div class="newRightBoxHeader">Admin</div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/ma/admin2/userForm">
				1 Create New User</a></div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/admin/privilege/user/userList.xhtml?listType=USER_PRIVILEGE">
				2 User Privileges</a></div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/ma/schedule/scheduleStaffList">
				3 Service Codes</a></div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/admin/privilege/user/userList.xhtml?listType=SELF_PASS_RESET">
				4 Self PW Reset</a></div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/ma/schedule/hha/api/configurationStaffList">
				5 HHA Staff</a></div>
				<br/>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/admin/privilege/user/userList.xhtml?listType=ALL_USER">
				User List</a></div>
				<div class="rightBoxLink" id="newLink"><a href="https://secure.therapservices.net/admin/privilege/user/userList.xhtml?nextPageUrl=%2fadmin2%2fchangePassword&listType=USER_PASSWORD_CHANGE">
				Change User PW</a></div>
				<div class="rightBoxLink" id="newLink"><a href=""></a></div>
			`;
			currentMenu.insertAdjacentElement("beforeend",newItem);	// Insert newItem
		}
	}
	
	//-------------------------------
	//		User Privilege Page
	//-------------------------------
	// Create a new menu 
	if(window.location.href.indexOf("userPrivilege.xhtml") > -1){
		var permissionMenu = document.querySelector("#profilesSection");
		var autoSelectMenu = document.createElement("div");
		autoSelectMenu.className = "autoRoleSection"	// Add Class
		
		autoSelectMenu.innerHTML = `
		<br/>
		<br/>
		<style>
		#selectSubmit {
			padding: 10px;
			margin-top: 10px;
		}
		
		#selectSubmit:hover {
			background-color: #2e6da4;
			border-color: #1E88E5;
			color: #ffffff;
		}
		
		#selectSubmit:active {
			background-color: #1976D2;
			border-color: #1E88E5;
			color: #ffffff;
		}
		</style>
		<div id="j_idt310" class="ui-datagrid ui-widget">
			<div class="ui-datagrid-header ui-widget-header ui-corner-top">Role Selector</div>
			
			<div id="j_idt310_content" class="ui-datagrid-content ui-widget-content">
				<table>
					<tbody>
						<tr><td>
							<label for="job-title">Select job title</label>
							<select name="job-title" id="selectJob">
								<option id="optionDD" value="NAN"></option>
								<option id="optionDD" value="DSP">DSP/BHT/ES/RT</option>
								<option id="optionDD" value="RS">RS/PM/SPM</option>
								<option id="optionDD" value="RRM">RRM</option>
								<option id="optionDD" value="Empower">Empower Team</option>
								<option id="optionDD" value="CLD">CLD</option>
								<option id="optionDD" value="DD">DD</option>
								<option id="optionDD" value="RED">RED</option>
								<option id="optionDD" value="Outreach">Outreach</option>
								<option id="optionDD" value="HR">HR</option>
								<option id="optionDD" value="RUMIExp">RUMI Exp. Manager</option>
								<option id="optionDD" value="ESM">ES Manager</option>
								<option id="optionDD" value="ESD">ES Director</option>
								<option id="optionDD" value="Finance">Finance</option>
								<option id="optionDD" value="HSM">Health Services Manager</option>
								<option id="optionDD" value="QAC">QAC</option>
								<option id="optionDD" value="SA">Super Admin</option>
							</select>
						</td></tr>
					</tbody>
				</table>
			</div>
			
		</div>
		`;
		permissionMenu.insertAdjacentElement("beforebegin",autoSelectMenu);
		
		// Define Data Area
		var configId = document.getElementsByClassName("ui-datagrid-data")[0].querySelectorAll('input')[0].id.substr(0,8);
		var configInputId = document.getElementsByClassName("ui-datagrid-data")[0].querySelectorAll('input')[0].id.substr(11,8);
		
		document.getElementById("selectJob").addEventListener("click",function doRoleSelection(){
			var role = document.getElementById("selectJob").value;
			
			// Reset Selections for all Roles (They might change? the idt variables)
			// Administrative Roles
			for(var i = 0; i < 16; ++i){
				var newElementIterator = configId + ":0:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			// Module Roles
			for(var i = 0; i < 21; ++i){
				var newElementIterator = configId + ":1:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			// TMS Roles
			for(var i = 0; i < 12; ++i){
				var newElementIterator = configId + ":2:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			// SComm Roles
			for(var i = 0; i < 4; ++i){
				var newElementIterator = configId + ":3:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			// Common Roles
			for(var i = 0; i < 5; ++i){
				var newElementIterator = configId + ":4:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			// Electronic Billing
			for(var i = 0; i < 6; ++i){
				var newElementIterator = configId + ":5:" +  configInputId + ":" + i;
				document.getElementById(newElementIterator).checked = false;
			}
			
			// Select roles based on role selected in dropdown
			switch(role){
				case "DSP":
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					break;
				case "RS":
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":10").checked = true;	// Assigned Report View
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "RRM":
					document.getElementById(configId + ":0:" + configInputId + ":7").checked = true;	// Shared Contact
					document.getElementById(configId + ":0:" + configInputId + ":10").checked = true;	// Personal Finance
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":0:" + configInputId + ":15").checked = true;	// Schedule Admin
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "Empower":
					document.getElementById(configId + ":0:" + configInputId + ":5").checked = true;	// Caseload
					document.getElementById(configId + ":0:" + configInputId + ":7").checked = true;	// Shared Contact
					document.getElementById(configId + ":0:" + configInputId + ":14").checked = true;	// Scoring Method
					document.getElementById(configId + ":0:" + configInputId + ":15").checked = true;	// Schedule Admin
					document.getElementById(configId + ":1:" + configInputId + ":6").checked = true;	// ISP Program Template Submit
					document.getElementById(configId + ":1:" + configInputId + ":7").checked = true;	// ISP Program Template Approve
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":1:" + configInputId + ":14").checked = true;	// Agency Documents Add/Edit
					document.getElementById(configId + ":1:" + configInputId + ":17").checked = true;	// Provider Questionnaire Form Submit
					document.getElementById(configId + ":1:" + configInputId + ":18").checked = true;	// Provider Questionnaire Form Update
					document.getElementById(configId + ":1:" + configInputId + ":20").checked = true;	// Behavior
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "CLD":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":0:" + configInputId + ":7").checked = true;	// Shared Contact
					document.getElementById(configId + ":0:" + configInputId + ":10").checked = true;	// Personal Finance
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":6").checked = true;	// ISP Program Template Submit
					document.getElementById(configId + ":1:" + configInputId + ":7").checked = true;	// ISP Program Template Approve
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":11").checked = true;	// Time Tracking Template Management
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "DD":
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":0:" + configInputId + ":15").checked = true;	// Schedule Admin
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "RED":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":0:" + configInputId + ":4").checked = true;	// Admin Report
					document.getElementById(configId + ":0:" + configInputId + ":5").checked = true;	// Caseload
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":1:" + configInputId + ":14").checked = true;	// Agency Documents Add/Edit
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":3:" + configInputId + ":1").checked = true;	// Multi Provider SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "Outreach":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":0:" + configInputId + ":7").checked = true;	// Shared Contact
					document.getElementById(configId + ":0:" + configInputId + ":10").checked = true;	// Personal Finance
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":6").checked = true;	// ISP Program Template Submit
					document.getElementById(configId + ":1:" + configInputId + ":7").checked = true;	// ISP Program Template Approve
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "HR":
					document.getElementById(configId + ":0:" + configInputId + ":0").checked = true;	// User
					document.getElementById(configId + ":0:" + configInputId + ":6").checked = true;	// User Privilege
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":0:" + configInputId + ":15").checked = true;	// Schedule Admin
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "RUMIExp":
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "ESM":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":0:" + configInputId + ":9").checked = true;	// Custom User Group
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":6").checked = true;	// ISP Program Template Submit
					document.getElementById(configId + ":1:" + configInputId + ":7").checked = true;	// ISP Program Template Approve
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "ESD":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":0:" + configInputId + ":9").checked = true;	// Custom User Group
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":0:" + configInputId + ":14").checked = true;	// Scoring Method
					document.getElementById(configId + ":0:" + configInputId + ":15").checked = true;	// Schedule Admin
					document.getElementById(configId + ":1:" + configInputId + ":6").checked = true;	// ISP Program Template Submit
					document.getElementById(configId + ":1:" + configInputId + ":7").checked = true;	// ISP Program Template Approve
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// Employer Management ???
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// Job Development ???
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "Finance":
					document.getElementById(configId + ":0:" + configInputId + ":1").checked = true;	// IDF Admin
					document.getElementById(configId + ":1:" + configInputId + ":2").checked = true;	// ISP Billing Conversion
					document.getElementById(configId + ":1:" + configInputId + ":3").checked = true;	// Case Note Billing Conversion
					document.getElementById(configId + ":1:" + configInputId + ":4").checked = true;	// EVV Billing Conversion
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					// Electronic Billing
					for(var i = 0; i < 6; ++i){
						var newElementIterator = configId + ":5:" +  configInputId + ":" + i;
						document.getElementById(newElementIterator).checked = true;
					}
					break;
				case "HSM":
					document.getElementById(configId + ":0:" + configInputId + ":7").checked = true;	// Shared Contact
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":12").checked = true;	// Global Care Plan Template Library
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":4:" + configInputId + ":0").checked = true;	// Enable 13 Months Search (T-Log, GER)
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					break;
				case "QAC":
					document.getElementById(configId + ":0:" + configInputId + ":4").checked = true;	// Admin Report
					document.getElementById(configId + ":0:" + configInputId + ":10").checked = true;	// Personal Finance
					document.getElementById(configId + ":0:" + configInputId + ":11").checked = true;	// Reset Password
					document.getElementById(configId + ":0:" + configInputId + ":12").checked = true;	// Data Driven Outcome
					document.getElementById(configId + ":1:" + configInputId + ":8").checked = true;	// ISP Program Template View
					document.getElementById(configId + ":1:" + configInputId + ":9").checked = true;	// Report Library
					document.getElementById(configId + ":1:" + configInputId + ":10").checked = true;	// Assigned Report View
					document.getElementById(configId + ":1:" + configInputId + ":13").checked = true;	// Agency Documents View
					document.getElementById(configId + ":1:" + configInputId + ":14").checked = true;	// Agency Documents Add/Edit
					document.getElementById(configId + ":1:" + configInputId + ":20").checked = true;	// Behavior
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":3:" + configInputId + ":1").checked = true;	// Multi Provider SComm
					document.getElementById(configId + ":4:" + configInputId + ":1").checked = true;	// Create Data on Inactive Individuals
					document.getElementById(configId + ":4:" + configInputId + ":2").checked = true;	// Access to Multi-Individual Event
					document.getElementById(configId + ":4:" + configInputId + ":3").checked = true;	// Export Excel
					document.getElementById(configId + ":4:" + configInputId + ":4").checked = true;	// Signature Delete
					break;
				case "SA":
					// Administrative Roles
					for(var i = 0; i < 16; ++i){
						var newElementIterator = configId + ":0:" +  configInputId + ":" + i;
						document.getElementById(newElementIterator).checked = true;
					}
					// Module Roles
					for(var i = 0; i < 21; ++i){
						var newElementIterator = configId + ":1:" +  configInputId + ":" + i;
						document.getElementById(newElementIterator).checked = true;
					}
					// TMS Roles
					document.getElementById(configId + ":2:" + configInputId + ":0").checked = true;	// TMS Trainee
					// SComm Roles
					document.getElementById(configId + ":3:" + configInputId + ":0").checked = true;	// Enable Full SComm
					document.getElementById(configId + ":3:" + configInputId + ":1").checked = true;	// Multi Provider SComm
					// Common Roles
					for(var i = 0; i < 5; ++i){
						var newElementIterator = configId + ":4:" +  configInputId + ":" + i;
						document.getElementById(newElementIterator).checked = true;
					}
					// Electronic Billing
					for(var i = 0; i < 6; ++i){
						var newElementIterator = configId + ":5:" +  configInputId + ":" + i;
						document.getElementById(newElementIterator).checked = true;
					}
					break;
				default:
					break;	// Do Nothing
			}
		});
	}
	
	//---------------------------------------
	//		User Personal Details Page
	//---------------------------------------
	// Hide unneeded inputs
	if(window.location.href.indexOf("loginDetail") > -1){
		// Define elements to hide
		var hideUserDetails = [
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(2)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(3) > div.form-group.col-sm-2.col-sm-offset-2"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(9)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(10)"),
			document.querySelector("#loginAdditionalIdNumbersSection"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(2)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(5)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(6)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(7)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(8)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(9)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(10)"),
			document.querySelector("#loginDetailCmd > section:nth-child(4)"),
			document.querySelector("#loginDetailCmd > section:nth-child(5)"),
			document.querySelector("#loginDetailCmd > section:nth-child(6)")
		];
		
		// Hide all elements
		hideUserDetails.forEach(
			function(foundElement){
				foundElement.style.display = 'none';
			}
		);
		
		// Auto-fill inputs
		document.querySelector("#licenseNumber").value = "999999999999";
		document.querySelector("#address\\.state").value = "MN";
	}
}

//---------------------------------------------------------------------------------------
//		Revert Hide Function (Show)
//---------------------------------------------------------------------------------------
// Function to show all elements
// A near mirror of hideContent to bring back elements we've hidden
// Everything is just reversed here, thus less documentation
export function showContent(){
	if(document.URL == "https://secure.therapservices.net/auth/login"){
		var hideMe = [
			document.querySelector(".leftPaneContainer"),	// Login Page
			document.querySelector(".rightPaneContainer"),
			document.querySelector("#leftPaneFrame"),
		];
		
		hideMe.forEach(
			function(foundElement){
				foundElement.style.display = 'block';
			}
		);
		
		newParent = document.querySelector(".loginContainer");
		oldParent = document.querySelector("#newDiv");
		while (oldParent.childNodes.length > 0) {
			newParent.appendChild(oldParent.childNodes[0]);
		}
		while(oldParent != null){
			oldParent.parentElement.removeChild(oldParent)
		}
	}
	
	if(document.URL == "https://secure.therapservices.net/ma/newfpage/worklist" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/individual" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/health" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/agency" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/admin" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/ih" ||
	document.URL == "https://secure.therapservices.net/ma/newfpage/settings"){
		
		var hideMe = [
			document.querySelector("#crossProvider > div:nth-child(3)"),		// Dashboard Page
			document.querySelector("#rightMenu > div:nth-child(1)"),
			document.querySelector("#rightMenu > div:nth-child(3)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(3)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(5)"),
			document.querySelector("#rightMenu > div:nth-child(2) > div:nth-child(6)"),
			document.querySelector("#rightMenu > div:nth-child(4) > div:nth-child(3)"),
			document.querySelector("#rightMenu > div.calendar"),
			document.querySelector("#footer_top"),
		];
		
		try {
			var newHideMe = document.querySelector(".newRightBox");
			newHideMe.remove();
		} catch(e) {
			console.log("Error: ",e);
		}
		
		if(document.URL == "https://secure.therapservices.net/ma/newfpage/health"){
			hideMe.push(
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(13)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(14)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(19)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(20)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(21)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(22)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(23)"),
			document.querySelector("#centerHolder > table > tbody > tr:nth-child(24)")
			);
		}
		
		if(window.location.href.indexOf("https://secure.therapservices.net/ma/common/loginDetail") > -1){
			hideMe.push(
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(2)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(3) > div.form-group.col-sm-2.col-sm-offset-2"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(9)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(1) > div:nth-child(10)"),
			document.querySelector("#loginAdditionalIdNumbersSection"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(2)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(5)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(6)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(7)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(8)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(9)"),
			document.querySelector("#loginDetailCmd > section:nth-child(3) > div.panel-body > fieldset:nth-child(2) > div:nth-child(10)"),
			document.querySelector("#loginDetailCmd > section:nth-child(4)"),
			document.querySelector("#loginDetailCmd > section:nth-child(5)"),
			document.querySelector("#loginDetailCmd > section:nth-child(6)")
			);
		}
		
		hideMe.forEach(
			function(foundElement){
				foundElement.style.display = 'block';
			}
		);
	}
	
	if(window.location.href.indexOf("https://secure.therapservices.net/admin/privilege/user/userPrivilege.xhtml") > -1){
		try {
			var newHideMe = document.querySelector(".autoRoleSection");
			newHideMe.remove();
		} catch(e) {
			console.log("Error: ",e);
		}
	}
}