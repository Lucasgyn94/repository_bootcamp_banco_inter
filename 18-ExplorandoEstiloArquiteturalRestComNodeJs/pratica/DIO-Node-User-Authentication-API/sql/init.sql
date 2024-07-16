/**essa extensao habilita o uso do uuid_generate_user*/
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
/*essa extensão habilita o uso do crypt*/
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)

INSERT INTO application_user (username, password) VALUES ('Lucas', crypt('admin', 'my_salt'));
/*crypt faz com que a senha seja criptografada*/