var validateButton = document.getElementById("validateButton");
                var xmlInput = document.getElementById("xmlInput");
                var validationResult = document.getElementById("validationResult");

                validateButton.addEventListener("click", function() {
                    // Your JavaScript code to validate XML
                    var parser = new DOMParser();
                    var xmlDoc = parser.parseFromString(xmlInput.value, "application/xml");

                    if (xmlDoc.documentElement.nodeName === "parsererror") {
                        validationResult.textContent = alert("Invalid XML!");
                    } else {
                        validationResult.textContent = alert("XML is valid!");
                    }
                });