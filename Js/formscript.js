const WEBHOOK = "https://discord.com/api/webhooks/1116057062858821794/4c7VyvpdQZICeq51-hySNukTeq7IFyUyJd4jIb7zYk-t05Ub0Rq9ItP9zI-TkoOYY5ku";
var dnameValue = document.getElementById("dname").value;
var gnameValue = document.getElementById("gname").value;
var msgValue = document.getElementById("msg").value;
function sendtocord(){
fetch(WEBHOOK, {
  method: "POST",
  headers: {
      "Content-Type": "Application/json"
  },
  body: JSON.stringify({
    "embeds": [{
      "fields": [
        {
          "name": "Discord Username: "+dnameValue,
          "value": null,
          "inline": true
        },
        {
          "name": "GitHub Username: " +gnameValue,
          "value": null,
        },
        {
          "name": "Message: " +msgValue,
          "value": null
        },
        {
          "name": "Dog",
          "value": "yay"
        }
      ],
      "avatar_url": "https://static.thenounproject.com/png/223825-200.png",
      "username": "form_data",

    }]}
    )})
  }