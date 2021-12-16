## Seja bem-vindo(a) ao meu projeto 

## Observação ||
              \/

No desafio de node js, pediram para que não desse tanto foco para o front-end, mas tive a liberdade de pelo menos implementar um design um pouco responsivo! Obs: tinha uma tecnologia que era obrigatória, mas eu não tenho tanta familiaridade com ela, que no caso é o typescrypt. É uma tecnologia incrível, mas no momento, não sei como implementá-la! Mas eu não desisti, e isso não me empediu de completar o desafio! Aprendi muito com o desafio, e isso só tem a acrescentar na minha vida commo dev!!

## Descrição do meu projeto ||
                            \/

Focando no backend, comecei dando um npm init, e baixando o meu arquivo package.json, no qual ficará todas as dependências do projeto! Logo em seguida, baixei todas as dependências necessárias para o meu projeto. As dependências que foram baixadas foram o mongoose, para fazer a conexão ao meu banco de dados, o body-parser, para fazer a leitura dos dados que foram digitados no input do formulário, o bcrypt, para criptografar as senhas do usuários, assim fornecendo mais segurança à eles. Logo depois, temos o passport, para fazer a autenticação do usuário cadastrado, o express-session, para adicionar o usuário a uma sessão, assim fazendo que quando um usuário saia do website, enquanto ele não estiver deslogado, o usuário estará ativo! O express-flash, exibindo para o usuário as mensagens de erro e de sucesso, o ejs, para o front-end conseguir pegar os dados do backend, e por último, mas não menos importante, o express, que é ele que fará com que toda a nossa aplicação funcione, dando vida para o nosso backend. Logo em seguida, criei um script chamad start, para inicializar o projeto.

Criei um servidor chamado servidor.js, no qual hospeda as dependências necessárias para dar vida ao projeto. 

## Passo a passo ||
                 \/

#1 => Primeiramente devemos dar um start em nosso projeto para que ele rode!

#2 => Após darmos o npm start no projeto, digitaremos o seguinte código na aba do navegador: http://localhost:8080, em seguida, terá na tela no canto canto superior direito um ícone, Clique nele! Após isso, terá um formulário cadastro, no qual o usuário irar preencher com o seu nome de usuário, senha, e E-mail!

#3 => Depois de ter se registrado, cligue no botão de login que aparece logo abaixo do botão de se registrar no formulário. Após ter logado com o mesmo nome de usuário, e a mesma senha registrada, o usuário será redirecionado para a tela inicial! Com uma mensagem na tela dizendo Seja bem vindo, e mais o nome do usuário cadastrado!

#4 => Agora, se o usuário olhar para o canto superior direito, ele irá ver dois ícones! Um tem uma forma de engrenagem, e o outro tem uma forma de uma porta. O que tem uma forma de porta, serve para o usuário dar log-out, ou seja, quando o usuário clicar ele irá se deslogar! Agora, o que tem uma forma de engrenagem, serve para alterarmos o nome de usuário cadastrado, a senha, e o E-mail caso desejar!! Logo após 2 segundos o usuário será redirecionado para o home do website, e iremos perceber que o usuário foi alterado com sucesso.  



