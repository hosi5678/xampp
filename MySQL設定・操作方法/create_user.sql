drop user if exists user@localhost;
create user user@localhost identified by 'password';

grant all privileges on orinasu_db.* to user@localhost identified by 'password';

