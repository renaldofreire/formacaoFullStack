USE sucos;

ALTER TABLE tbCliente ADD PRIMARY KEY (CPF);

ALTER TABLE tbCliente ADD COLUMN (DATA_NASCIMENTO DATE);

INSERT INTO tbCliente (
CPF, NOME, ENDERECO1, ENDERECO2, BAIRRO, CIDADE, ESTADO, CEP, IDADE, SEXO, LIMITE_CREDITO, VOLUME_COMPRA, PRIMEIRA_COMPRA, DATA_NASCIMENTO)
VALUES ('1298371298', 'Frederico Joaquim', 'Rua Paulo Alves, 11', '', 'Pajuçara', 'Maracanaú', 'Ceará', '61900000', 45, 'M', 10000.00, 2000,0,'1974-10-05');

 SELECT * FROM tbCliente;