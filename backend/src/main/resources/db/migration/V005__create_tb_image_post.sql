CREATE TABLE image_post (
	id bigserial NOT NULL,
	post_id int8 NULL,
	image_bytes bytea NULL,
	CONSTRAINT image_post_pkey PRIMARY KEY (id)
);

ALTER TABLE image_post ADD CONSTRAINT fkpx20dhvcfhuuy583yejbs05pk FOREIGN KEY (post_id) REFERENCES post(id);