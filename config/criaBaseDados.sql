CREATE SEQUENCE pagamentos_seq
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE pagamentos_seq
  OWNER TO postgres;


CREATE TABLE pagamentos
(
  id integer NOT NULL DEFAULT nextval('pagamentos_seq'::regclass),
  forma_de_pagamento character varying(255),
  valor decimal,
  moeda character varying(3) NOT NULL,
  status varchar(255) not null,
  data timestamp,
  descricao text,
  CONSTRAINT pagamentos_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE pagamentos
  OWNER TO postgres;
