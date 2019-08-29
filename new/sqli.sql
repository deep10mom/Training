set @x=1;
set @var=0;
select empno,sal, (@var:=@var+1) as counter from emp;