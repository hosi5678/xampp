drop user if exists user;
create user user identified by 'orinasu_user';

drop database if exists orinasu_db;

create database orinasu_db;

grant all on orinasu_db.* to user identified by 'orinasu_user';