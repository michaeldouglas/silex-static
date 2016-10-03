## Silex Skeleton Application Static - 0.1

Essa aplicação foi criada para ser utilizada no curso de Silex do PHP Conference Brasil.

Os arquivos do Silex encontram-se no repositório: [https://github.com/michaeldouglas/Silex-Docker](https://github.com/michaeldouglas/Silex-Docker)

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg?maxAge=2592000)](https://github.com/michaeldouglas/Silex-Docker)
[![npm](https://img.shields.io/npm/v/npm.svg?maxAge=2592000)](https://github.com/michaeldouglas/silex-static)

## Instalação

Na estrutura da aplicação `Silex` execute o build do Docker para começar a utilizar:


    docker-compose up --build

Depois que realizar o build da aplicação você não precisa mais executar o comando com a flag `--build` nas próxima execução
basta utilizar o comando sem a flag:


    docker-compose up

## Executar em segundo plano


    docker-compose up -d

## Testando seu Silex Static

Abra uma nova aba no seu terminal e então execute o comando:

```
curl localhost:3000
```

![](http://gifsec.com/wp-content/uploads/GIF/2015/06/Dance-With-Me-Cat.gif?gs=a)

## Debug Vue

Para debugar a sua aplicação Vuejs, você pode utilizar essa extensão para Google Chrome:

  [https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

## Remover Containers

Para remover todos os containers você pode executar em seu terminal o comando:

```
docker rm $(docker ps -a -q)
```

## Remover Imagens

Para remover todos as imagens você pode executar em seu terminal o comando:

```
docker rmi $(docker images -q)
```

## Parar o ambiente

Para realizar a parada do ambiente, você deve executar em seu terminal o comando:

```
docker stop silex-app silex-redis
```

## Para criar uma Machine Docker
Para realizar criar uma Machine Docker, você deve executar em seu terminal o comando:

```
docker-machine create --driver virtualbox default
docker-machine env default
eval "$(docker-machine env default)"
```

## SSH Machine 
Para entrar em SSH em sua Machine Docker, você deve executar em seu terminal o comando:

```
docker-machine ssh default
```