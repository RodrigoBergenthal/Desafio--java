# 🚗 Projeto Carros

Este projeto é um sistema simples para gerenciamento de carros, cores e marcas. Ele é desenvolvido com Java, Spring Boot e PostgreSQL no backend, e utiliza tecnologias modernas para o frontend.

## 🛠️ Tecnologias Utilizadas

### Backend

#### Java
- **Versão:** 17
- **Descrição:** Linguagem de programação utilizada para o desenvolvimento da aplicação backend.
- ![Java](https://img.shields.io/badge/Java-11-orange)

#### Spring Boot
- **Versão:** 2.6.4
- **Descrição:** Framework utilizado para criar a aplicação Java baseada em Spring, facilitando a configuração e o desenvolvimento de aplicações.
- ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-2.6.4-brightgreen)

#### Spring Data JPA
- **Descrição:** Abstração para o acesso a dados, que simplifica a implementação de repositórios baseados em JPA.
- ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-2.6.4-blue)

#### h2
- **Descrição:** Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados da aplicação.


### Frontend

> Detalhes sobre as tecnologias de frontend podem ser adicionados aqui quando disponíveis.

## 📁 Estrutura do Projeto

```plaintext
projeto-carros/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── carros/
│   │   │               ├── controller/
│   │   │               │   └── CarroController.java
│   │   │               ├── model/
│   │   │               │   ├── Carro.java
│   │   │               │   ├── Cor.java
│   │   │               │   └── Marca.java
│   │   │               └── repository/
│   │   │                   ├── CarroRepository.java
│   │   │                   ├── CorRepository.java
│   │   │                   └── MarcaRepository.java
│   │   └── resources/
│   │       └── application.properties
└── pom.xml

## #🚀 Como Executar o Projeto
Pré-requisitos
java17
Maven instalado
PostgreSQL configurado
Configuração do Banco de Dados
No arquivo application.properties, configure a URL do banco de dados, nome de usuário e senha:
##
spring.datasource.url=jdbc:postgresql://localhost:5432/seu_banco_de_dados
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
###Rodando a Aplicação
Clone o repositório:

#git clone https://github.com/RodrigoBergenthal/Desafio--java

## Navegue até o diretório do projeto:

#cd projeto-carros

##Endpoints da API
Criar Marca
URL: /api/marcas
Método: POST
#{
  "nome": "Toyota"
}
##Criar Cor
URL: /api/cores
Método: POST
#{
  "nome": "Vermelho"
}
##Criar Carro
URL: /api/carros
Método: POST
#{
  "nome": "Corolla",
  "modelo": "Sedan",
  "marca": {
    "nome": "Toyota"
  },
  "cor": {
    "nome": "Vermelho"
  }
}
Listar Marcas
URL: /api/marcas
Método: GET
Listar Cores
URL: /api/cores
Método: GET
Listar Carros
URL: /api/carros
Método: GET
📝 Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.

Este README fornece uma visão completa do projeto, incluindo as tecnologias utilizadas, estrutura do projeto, configuração, e exemplos de uso dos endpoints da API. Adapte os links e informações pessoais conforme necessário.



