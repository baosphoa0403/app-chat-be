-- Create the database
SELECT 'CREATE DATABASE app_chat'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'app_chat')\gexec

-- Connect to the database
\connect app_chat;

-- Create the schema
CREATE SCHEMA IF NOT EXISTS dev;

CREATE SCHEMA IF NOT EXISTS prod;
