
//not used anymore but kept becuase its a nice script so imma keep just in case i ever use it
const WEBHOOK = "https://discord.com/api/webhooks/bibbitybobbityboo"
async function sendtocord(event) {
    event.preventDefault();
    var dnameValue = document.getElementById("dname").value;
    var gnameValue = document.getElementById("gname").value;
    var msgValue = document.getElementById("msg").value;

    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "avatar_url": "https://i.imgur.com/Vb75hdB.png",
            "username": "form_submits",
            "content": null,
            "embeds": [{
                "fields": [
                    {
                        "name": "Discord Username",
                        "value": dnameValue,
                        "inline": true
                    },
                    {
                        "name": "GitHub Username",
                        "value": gnameValue,
                    },
                    {
                        "name": "Message",
                        "value": msgValue,
                    },
            
                ],
                
            }]
        })
    })
}