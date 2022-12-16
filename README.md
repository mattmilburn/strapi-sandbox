# Strapi Sandbox

A Strapi application to help bootstrap a Strapi application that is pre-configured and pre-populated.

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
Clone the repo and navigate into the directory.

```
git clone https://github.com/mattmilburn/strapi-sandbox.git
cd strapi-sandbox
```

Next, run `yarn install`.

Then, start Strapi with either `yarn develop` or `yarn develop --watch-admin`.

Once Strapi has started you will be prompted to **register a user**.

*Happy testing!*


### Installed plugins

| Plugin | Version |
| -- | -- |
| [Menus](https://github.com/mattmilburn/strapi-plugin-menus) | 1.1.0 |
| [Preview Button](https://github.com/mattmilburn/strapi-plugin-preview-button) | 1.0.1 |
| [Transformer](https://github.com/ComfortablyCoding/strapi-plugin-transformer) | 2.0.2 |


### Extra customizations

#### Lifecycle Hooks
| Name | Description |
| -- | -- |
| **Lowercase Slug** | Ensure the `slug` field for an entity is always lowercase when creating or updating. |
| **Publish Date** | Ensure the `publish_date` field for an entity is always given a value, which defaults to the current time. |

#### Middlewares
| Name | Description |
| -- | -- |
| **Omit From Response** | Omit specific fields from the content API response to trim down payload size. |
