// Populate values from config on DomContentLoad

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("baseUrlTextArea").value = defaultBaseUrl;
	document.getElementById("jsonObjectTextArea").value = JSON.stringify(defaultJsonParam);
}, false);