# comment
-- comment
/*
	comment
*/
drop database if exists myapp;
create database myapp;
grant all on myapp.* to dbuser01@192.168.1.3 identified by 'password';
grant all on myapp.* to myapp_user@192.168.1.3 identified by 'password';
