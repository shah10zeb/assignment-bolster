# assignment-bolster
REST assignment by bolster

# About
This is a NestJs template for REST API with JWT authentication.
It mainly has 3 entities
- Users
- Products
- Charts
##
Databse used for storing details of entities is Postgres.


## How to setup.
You will need a postgres server, port, db name, db user and its credentials with read and write access.
Node and github configured on your target machine where you want to run code.
Postman to hit APIs exposed in this service.

## Steps to Run Application.
- Clone the repository and checkout main branch.
- Add an ".env" file in root of repository and add following configs
DB_HOST=<postgres server> Example: aa.b.com||10.10.10.10
DB_PORT=<postgres port> Example: 5432
DB_NAME=<db name> Example: dbName
DB_USERNAME=<user name> Example: userA
DB_PASSWORD=<password> Example: pass
SERVICE_PORT=<port on which you want your service to run> Example: 3000
JWT_SECRET=<JWT secret used to sign token> Example: secret
JWT_TTL=<time for which a token should be valid> Example : 3600s
- Run the following commad to creat tables in your database : <npm run migration:run>
- Run the following command to start your service: <npm run start>
- Use the PostMan Collection Attached and import it.
- There a sampleData.json file which has seed data. Hit the <http://localhost:<SERVICE_PORT>/api/v1/seed> to populate tables with seed data.
- Now you are ready to test other APIs of the application.
/api/v1/login - POST
/api/v1/list-products - GET
/api/v1/my-products - GET
/api/v1/profile - GET
/api/v1/analytics - GET


## Stay in touch

- Author - [Mohammad Shahzeb Siddiui]
- Email - [shah10zeb@gmail.com]

## License

Nest is [MIT licensed](LICENSE).
