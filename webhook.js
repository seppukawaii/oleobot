const axios = require('axios');
const secrets = require('./secrets/webhook.json');

const commands = [{
        "name": "homes",
        "description": "Find a random house listing to tour!",
        "options": [{
            "name": "zip",
            "description": "Limit the search to a specific zip code",
            "type": 4,
            "required": false
        }, {
            "name": "status",
            "description": "Show listings for sale, for rent, or sold",
            "type": 3,
            "required": false,
            "choices": [{
                "name": "For Sale",
                "value": "for_sale"
            }, {
                "name": "For Rent",
                "value": "for_rent"
            }, {
                "name": "Sold",
                "value": "sold"
            }]
        }]
    },
    {
        "name": "cats",
        "description": "cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats"
    },
    {
        "name": "dogs",
        "description": "dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs dogs"
    },
    {
        "name": "birds",
        "description": "birds birds birds birds birds birds birds birds birds birds birds birds birds birds birds"
    },
    {
        "name": "backstroke",
        "description": "star wars the third gathers: backstroke of the west"
    }
];

const headers = {
    headers: {
        "Authorization": `Bot ${secrets.BOT_TOKEN}`
    }
};


axios.put(
    `https://discord.com/api/v8/applications/${secrets.APPLICATION_ID}/commands`,
    commands,
    headers
).catch((err) => {
    console.log(err);
});