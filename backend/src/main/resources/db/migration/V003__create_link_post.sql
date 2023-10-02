CREATE TABLE link_post (
	id bigserial NOT NULL,
	post_id int8 NULL,
	url varchar(255) NULL,
	CONSTRAINT link_post_pkey PRIMARY KEY (id)
);

ALTER TABLE link_post ADD CONSTRAINT fk30vgpwtjbxtnrmmknt3vqrhge FOREIGN KEY (post_id) REFERENCES post(id);