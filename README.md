# Strapi Sandbox

### Requirements
* postgres
* psql

### Create database and database user
Run `psql` to enter the postgres interface, then separately run each command below with the `;` included at the end.

```
CREATE DATABASE sandbox_db;
CREATE ROLE sandbox_user WITH LOGIN PASSWORD 'sandbox_pass' CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE sandbox_db TO sandbox_user;
```

### Installation and startup
Clone the repo.

```
git clone https://github.com/mattmilburn/strapi-sandbox.git
```

Next, run `yarn install`.

Then, start Strapi with either `yarn develop` or `yarn develop --watch-admin`.

Once Strapi has started you will be prompted to **register a user**.
