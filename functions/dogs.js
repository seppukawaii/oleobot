const axios = require('axios');

module.exports = {
    "interaction": (req, res) => {
        const helpers = require('../helpers')(req, res);

        axios.get(
                "https://dog.ceo/api/breeds/image/random"
            )
            .then((response) => {
                helpers.respond({
                    "content": response.data[0].url
                });
            });
    }
};