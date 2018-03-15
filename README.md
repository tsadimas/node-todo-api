Create a server/config/config.json file in project, adding

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
```
To deploy in gCloud, add in app.yaml the following enviromental variables

```yaml
env_variables:
    MONGODB_URI: "mongodb://user:password@host:port/db-prod"
    JWT_SECRET: "YOUR-PRODUCTION-SECRET"
```