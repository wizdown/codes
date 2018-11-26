function hasWhiteSpace(s) {
  return s.indexOf(' ') >= 0;
}

function isValidBaseUrl(baseUrl) {
	if(baseUrl === undefined || baseUrl === null || baseUrl.length === 0 || hasWhiteSpace(baseUrl)) {
		return false;
	}
	return true;
}

function isValidJsonParam(jsonParam) {
    try {
        JSON.parse(jsonParam);
    } catch (e) {
        return false;
    }
    return true;
}

function generateLink() {
	document.getElementById("result").innerHTML = "Evaluating";

	var baseUrl = document.getElementById("baseUrlTextArea").value;
	if(!isValidBaseUrl(baseUrl)) {
		alert("Please enter a proper baseUrl");
		return;
	}

	var jsonParam = document.getElementById("jsonObjectTextArea").value;
	if(!isValidJsonParam(jsonParam)) {
		alert("Entered value is not a valid json");
		return;
	}

	var deeplinkUrl = baseUrl;
	var encodedJsonParam = encodeURIComponent(JSON.stringify(jsonParam));
	deeplinkUrl = deeplinkUrl + encodedJsonParam;

	document.getElementById("result").innerHTML = deeplinkUrl;
}

// Populate values from config on DomContentLoad

document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("baseUrlTextArea").value = defaultBaseUrl;
	document.getElementById("jsonObjectTextArea").value = JSON.stringify(defaultJsonParam);
}, false);