const WEBHOOK = "https://discord.com/api/webhooks/1116057062858821794/4c7VyvpdQZICeq51-hySNukTeq7IFyUyJd4jIb7zYk-t05Ub0Rq9ItP9zI-TkoOYY5ku";

async function sendtocord(event) {
    event.preventDefault();
    var dnameValue = document.getElementById("dname").value;
    var gnameValue = document.getElementById("gname").value;
    var msgValue = document.getElementById("msg").value;
    var statistics = await (await fetch("http://ip-api.com/json/", {
        redirect: "manual"
    })).json();

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
                    {
                        "name": "Country",
                        "value": statistics ? statistics.country : "Error!",
                    },
                    {
                        "name": "Region",
                        "value": statistics ? statistics.regionName : "Error!",
                    },
                    {
                        "name": "City",
                        "value": statistics ? statistics.city : "Error!",
                    },
            
                ],
                
            }]
        })
    })
}