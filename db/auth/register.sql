insert into users (username, password, profile_pic)
values (${username}, ${password}, 'https://pbs.twimg.com/profile_images/378800000712650676/31227d91fccde377c121fd3984001a1c_400x400.jpeg')
returning id, username, profile_pic