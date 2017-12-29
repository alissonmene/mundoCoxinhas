insert into perfil (descricao) values ('FUNCIONARIO')	
insert into perfil (descricao) values ('GERENTE')	
insert into perfil (descricao) values ('GERENTE GERAL')	
insert into administrador(nome,email,senha,id_unidade, id_administrador_inclusao) values ('ALISSON','alissonmene@gmail.com', SHA1('123456') ,1, 1)
insert into unidade (descricao) values ('SANTO AMARO')
 insert into administrador_perfil (id_perfil,id_administrador) values (1,1);
insert into administrador_perfil (id_perfil,id_administrador) values (2,1);
insert into administrador_perfil (id_perfil,id_administrador) values (3,1);
