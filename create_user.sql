drop user if exists 'user01'@'192.168.1.3';

create user 'user01'@'192.168.1.3' identified by 'hosi3162';
grant all privileges on myapp.* to user01@'192.168.1.3' identified by 'hosi3162';

drop user if exists 'user02'@'192.168.1.7';

create user 'user02'@'192.168.1.7' identified by 'hosi3162';
grant all privileges on myapp.* to user02@'192.168.1.7' identified by 'hosi3162';

