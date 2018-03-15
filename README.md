Create a config/config.json file in project, adding

```javascript
{
    "test": {
        "PORT": 3000,
        "JWT_SECRET": "YOUR-TEST-SECRET",
        "MONGODB_URI": "mongodb://user:password@host:port/db-test"
    },
    "development": {
        "PORT": 3000,
        "JWT_SECRET": "YOUR-DEVELOPMENT-SECRET",
        "MONGODB_URI": "mongodb://user:password@host:port/db-dev"
    }
}