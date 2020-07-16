import React from "react";
import ReactDOM from "react-dom";
import google from "GoogleApis";
import authentication from "./authentication";

function getData(auth,sheetId) {
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: sheetId,
      range: 'Sheet1!A2:C', 
    }, (err, response) => {
      if (err) {
        console.log('The API returned an error: ' + err);
        return;
      } 
      var rows = response.values;
      if (rows.length === 0) {
        console.log('No data found.');
      } else {
        for (var i = 0; i <rows.length; i++) {
          var row = rows[i];
          console.log(row.join(", "));
        }
      }
    });
  }
  
  authentication.authenticate().then((auth)=>{
      getData(auth,"1zS2pgKSDJqtTrHYoYoTBPHE_ZOla9vygV1iaIOEqpLU");
  });
