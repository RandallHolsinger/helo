create table users (
  id serial primary key,
  username varchar(30),
  password varchar(30),
  profile_pic text
);

create table posts (
  id serial primary key,
  title varchar(40),
  img text,
  content text,
  author_id integer REFERENCES users(id)
);