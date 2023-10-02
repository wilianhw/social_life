CREATE TABLE post (
	id bigserial NOT NULL,
	user_id int8 NULL,
	texto varchar(255) NULL,
	CONSTRAINT post_pkey PRIMARY KEY (id)
);

ALTER TABLE post ADD CONSTRAINT fk7ky67sgi7k0ayf22652f7763r FOREIGN KEY (user_id) REFERENCES users(id);