module.exports = {
    "env": {
        "browser": true,
        "commonjs": false,
        "node": true,
        "es6": true,
        "jest": true,
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        'react/jsx-filename-extension': 'off',
        'no-console': [
          'error',
          {
            allow: ['warn', 'error', 'info'],
          },
        ]
    }
};
