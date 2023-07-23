// document.getElementById("questionForm").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     const additionalProfilesSelect = document.getElementById("additionalProfiles");
//     const numOfProfilesInput = document.getElementById("numOfProfiles");
//     const additionalProfilesDataDiv = document.getElementById("additionalProfilesData");
//     const resultDiv = document.getElementById("result");
  
//     const additionalProfiles = additionalProfilesSelect.value;
//     let resultMessage = "";
  
//     if (additionalProfiles === "yes") {
//       const numOfProfiles = parseInt(numOfProfilesInput.value);
//       if (!isNaN(numOfProfiles) && numOfProfiles > 0) {
//         for (let i = 1; i <= numOfProfiles; i++) {
//           const profileName = prompt(`Additional Profile ${i}: Enter Name`);
//           const profileNumber = prompt(`Additional Profile ${i}: Enter Number`);
//           const profileBusinessType = prompt(`Additional Profile ${i}: Enter Business Type`);
  
//           resultMessage += `<h3>Additional Profile ${i}</h3>`;
//           resultMessage += `<p><strong>Name:</strong> ${profileName}</p>`;
//           resultMessage += `<p><strong>Number:</strong> ${profileNumber}</p>`;
//           resultMessage += `<p><strong>Business Type:</strong> ${profileBusinessType}</p>`;
//         }
//       }
//     } else {
//       resultMessage = "<p>You have no additional profiles.</p>";
//     }
  
//     resultDiv.innerHTML = resultMessage;
//     document.getElementById("questionForm").style.display = "none";
//     resultDiv.style.display = "block";
//   });

function showAdditionalProfilesFields() {
    const hasAdditionalProfiles = document.getElementById("hasAdditionalProfiles").value;
    const additionalProfilesFields = document.getElementById("additionalProfilesFields");

    if (hasAdditionalProfiles === "Yes") {
      additionalProfilesFields.style.display = "block";
    } else {
      additionalProfilesFields.style.display = "none";
    }
  }

  document.getElementById("questionnaireForm").onsubmit = function(event) {
    event.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const customerNumber = document.getElementById("customerNumber").value;
    const highRiskCountry = document.getElementById("highRiskCountry").value;
    const hasAdditionalProfiles = document.getElementById("hasAdditionalProfiles").value;
    const profileName = document.getElementById("profileName").value;
    const profileNumber = document.getElementById("profileNumber").value;
    const businessUnit = document.getElementById("businessUnit").value;

    const resultParagraph = document.getElementById("resultParagraph");
    resultParagraph.style.display = "inline";
    resultParagraph.textContent = `OCDD Cyclical Review triggered due to MEDIUM RISK customer type. Customer ${customerName} (${customerNumber}) has flagged as MEDIUM RISK due to holding a primary address in high-risk jurisdiction ${highRiskCountry}.\n\n`;

    if (hasAdditionalProfiles === "Yes" && profileName && profileNumber && businessUnit) {
      resultParagraph.textContent += `\n\nAdditional NAB DBG profiles identified:\n\n${profileName} (${profileNumber}) - ${businessUnit}\n\n`;
    }

    else{
        resultParagraph.textContent += "\nNo Additional NAB DBG profiles identified  for the customer."

    }
  };
  