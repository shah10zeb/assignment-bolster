import { config } from 'dotenv'
import { Chart } from 'src/client/db-client/postgres/charts/charts.entity'
import { Product } from 'src/client/db-client/postgres/products/products.entity'
import { User } from 'src/client/db-client/postgres/users/users.entity'
import {DataSource, DataSourceOptions} from 'typeorm'
require('dotenv').config()
export const dataSourceOptions : DataSourceOptions= {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Chart, Product, User],
        // TODO: PREFER MIGRATION RATHER THAN SYNC: TRUE
        migrations: ['**/*migrations.js']

      }
      const dataSource=new DataSource(dataSourceOptions);
      export default dataSource;