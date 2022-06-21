use sucos;

select MATRICULA, NOME FROM tabela_vendedores;

select MATRICULA, NOME FROM tabela_vendedores LIMIT 2;

SELECT * FROM tabela_vendedores WHERE NOME = 'Cláudia Morais';

SELECT * FROM tabela_vendedores WHERE PERCENTUAL_COMISSAO > 0.10;

SELECT * FROM tabela_vendedores WHERE YEAR(DATA_ADMISSAO) >= 2015;

SELECT * FROM tabela_vendedores WHERE YEAR(DATA_ADMISSAO) < 2016 AND DE_FERIAS = 1;