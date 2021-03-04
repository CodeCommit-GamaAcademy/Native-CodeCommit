<div align="center"> 
<img  src="https://assets.website-files.com/5ff79f3ebebf6b12f6b7747f/5ffe04fc6284b7e90070d985_logo-gama-academy.png" width="300" />
</div>
<h1 align="center"> GamaBank - Versão Mobile (React Native)</h1>

<p align="center">Desenvolvido pela equipe da <strong>CodeCommit

<p align="center"> 
    <a  href="#equipe-da-codecommit">Equipe</a> |
    <a  href="#libs">Libs</a> |
    <a  href="#features">Features</a> |
    <a  href="#arquitetura-de-pastas">Arquit. de pastas</a> |
    <a  href="#arquitetura-flux">Arquit. Flux - Redux</a> |
    <a  href="#mindmap">Mindmap</a> |
    <a  href="#como-usar">Como usar</a> |
    <a  href="#licença">Licença</a>
</p>
<div align="center">
    <img src="https://i.imgur.com/JBBd0Bx.png" width="250" />
</div>

<p align="center">Projeto desenvolvido na academia da <a href="https://www.gama.academy/" target="_blank">Gama Academy</a> em parceria com a <a href="https://www.accenture.com/br-pt" target="_blank">Accenture</a> com objetivo de aplicar todos os conceitos aprendidos durante o curso e apresentar para banca como projeto final!</p>

## Equipe da CodeCommit
<div align="center">
    <a href="https://cutt.ly/blOnLPV" target="_blank"> 
    <img src="https://cutt.ly/glOknQX" width="90"/></a>     
    <a href="https://cutt.ly/7lOQfzv" target="_blank"> 
    <img src="https://cutt.ly/MlOkJaB" width="90"/></a>     
    <a href="https://cutt.ly/SlOQcBf" target="_blank"> 
    <img src="https://cutt.ly/1lOlfra" width="90"/></a>     
    <a href="https://cutt.ly/LlOQCM4" target="_blank"> 
    <img src="https://cutt.ly/3lOj5ZR" width="90"/></a>      
    <a href="https://cutt.ly/NlOm8Tm" target="_blank"> 
    <img src="https://cutt.ly/jlOlWa2" width="90"/></a>
    <a href="https://cutt.ly/slOQ5xI" target="_blank"> 
    <img src="https://cutt.ly/JlOvHsQ" width="90"/>
    </a>
</div>

<div align="center">
    &nbsp;&nbsp;<a href="https://cutt.ly/blOnLPV" rel="nofollow">Alisson O.</a>&nbsp; | &nbsp;<a href="https://cutt.ly/7lOQfzv" rel="nofollow">Ana Laura</a>&nbsp; | &nbsp;<a href="https://cutt.ly/SlOQcBf" rel="nofollow">Gabriel M.</a> | &nbsp;<a href="https://cutt.ly/LlOQCM4" rel="nofollow">Gabriel N.</a>&nbsp; | &nbsp;<a href="https://cutt.ly/NlOm8Tm" rel="nofollow">Glauber A.</a>&nbsp; | <a href="https://cutt.ly/slOQ5xI" rel="nofollow">Igor Santos</a>
</div>


## Libs

- React Native
- Typescript
- axios
- lottie-react-native
- react-redux
- react-router-dom
- styled-components
- jsonwebtoken
- yup
- react-native-svg
- unform

## Features

Conexão com API para:

- Cadastro e autenticação de usuários
- Recuperação de senha do usuário
- Busca das informações do usuário e da sua conta
- Transferências entre contas de usuários
- Fazer depósitos
- Fazer pagamentos
- Cadastrar planos

Outras características:

- Componentização de elementos da interface para o reaproveitamento de código
- Responsividade
- Validação de input com unform
- Alertas de mensagens com Yup e React Toastify
- Arquitetura de Design: Atomic Design para organização dos componentes

## Arquitetura de pastas

```
├── src
│   ├── @types
│   ├── assets
│   |   ├── svgs
|   ├── components
|   |   ├── Balance
|   |   ├── Dashboard
|   |   ├── Bottom
|   |   ├── Input
|   |   ├── Launchs
|   |   ├── LeftMenu
|   |   ├── Loader
|   |   ├── LogoutModal
|   |   ├── Plans
|   |   ├── User
|   ├── interfaces
|   ├── routes
|   ├── screens
|   |   ├── Dashboard
|   |   |   ├── Plans
|   |   |   ├── Releases
|   |   |   ├── Transactions
|   |   ├── ForgotPassword
|   |   ├── Home
|   |   ├── Login
|   |   ├── Register
|   |   |   ├── Succeded
|   ├── services
|   ├── store
|   |   ├── user
|   ├── styles
|   ├── types
|   ├── utils
│   ├── routes.tsx
```

## Arquitetura Flux

<img  src="https://raw.githubusercontent.com/CodeCommit-GamaAcademy/React-CodeCommit/prod/src/docs/redux.png?token=ALJFOQHMY7WPIQOBX5A7LQTAHPHKO" />
<p align="center">Foi utilizado o Redux para globalização dos dados do usuário, necessário para requisições em API e para impedir requisições desnecessárias na API, melhorando significativamente a experiencia do usuário durante a utilização do GamaBank.
</p>

## Mindmap

<img src="https://cutt.ly/llGiL2b" />

## Como Usar

#### Clonando o repositório

```bash
git clone https://github.com/igorsantos97/bank-acc-react.git
```

#### Entrando no diretório do projeto

```bash
cd bank-acc-react
```

#### Instalando as Dependências

```bash
yarn install
```

#### Iniciando a Aplicação

```bash
yarn start
```

## Licença

Esse projeto utiliza a <a href="https://cutt.ly/olGu4ds">LICENÇA</a> MIT.
