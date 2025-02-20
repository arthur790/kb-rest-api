

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS roles_id_seq;

-- Table Definition
CREATE TABLE roles (
    "id" int4 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
    "description" varchar(255),
    "status" int4 DEFAULT 1,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now(),
    PRIMARY KEY ("id")
);


-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE users (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    "password" varchar(255) NOT NULL,
    "roleId" int4,
    "status" int4 DEFAULT 1,
    "createdAt" timestamptz DEFAULT now(),
    "updatedAt" timestamptz DEFAULT now(),
    CONSTRAINT "users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON UPDATE CASCADE,
    PRIMARY KEY ("id")
);




INSERT INTO "public"."roles" ("id", "description", "status", "createdAt", "updatedAt") VALUES
(1, 'ADMINISTRADOR', 1, '2025-02-19 22:44:54.926276+00', '2025-02-19 22:44:54.926276+00');
INSERT INTO "public"."roles" ("id", "description", "status", "createdAt", "updatedAt") VALUES
(2, 'USUARIO REGULAR', 1, '2025-02-19 22:45:09.49407+00', '2025-02-19 22:45:09.49407+00');