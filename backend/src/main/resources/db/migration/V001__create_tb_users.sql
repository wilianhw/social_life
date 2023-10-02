CREATE TABLE users (
	"role" int2 NULL,
	id bigserial NOT NULL,
	"password" varchar(255) NULL,
	username varchar(255) NULL,
	CONSTRAINT users_pkey PRIMARY KEY (id),
	CONSTRAINT users_role_check CHECK (((role >= 0) AND (role <= 1)))
);