CREATE TABLE comment_post (
	id bigserial NOT NULL,
	post_id int8 NULL,
	user_id int8 NULL,
	"comment" varchar(255) NULL,
	CONSTRAINT comment_post_pkey PRIMARY KEY (id)
);

ALTER TABLE comment_post ADD CONSTRAINT fkjup02upcrvjg62q3um2altlt FOREIGN KEY (post_id) REFERENCES post(id);