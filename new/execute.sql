use dbs;
select * from products where quantity>500
into outfile 'C:/new/high.csv'
fields enclosed by '"'
terminated by ';'
escaped by '*'
lines terminated by '\r\n';