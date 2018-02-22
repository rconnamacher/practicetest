"use strict";

module.exports = {
    variables: {
        // How to load from URLs. below means "locale" query parameter in the
        // original HTML URL that loaded this, with the default "en"
        "locale": {
            type: "query",
            name: "lang",
            default: "en"
        },
        "environment": {
            type: "query",
            name: "env",
            default: "dev"
        }
    },
    moduleSpecifiers: {
        "localized": variables => `localized/${variables.locale}`,
        "environment": variables => `env/config.${variables.environment}.js`,
    }
};