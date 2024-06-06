# ENGWEB2024-Normal

# Dataset

Havia alguns erros no nome das personagens, descrições e na forma como os arrays estavam a ser criados para resolver isso, fiz o script em python datasetFixer e criei o ficheiro datasetFinal.json com o resultado desse script. Para o correr é necessário ter o ficheiro dataset.json e um ficheriro como lugar de destino e invocar da seguinte forma no terminal: python datasetFixer.py > datasetFinal.json

# Importação para a base de dados

Primeiramente, criou-se um container para a mesma:
```bash
docker run -d -p 27017:27017 --name livros mongo
```

De seguida, importou-se o dataset para a base de dados:
```bash
docker cp datasetFinal.json livros:/datasetFinal.json
docker exec -it livros mongoimport -d livros -c livros --type json --file datasetFinal.json
```

# Queries

As queries solicitadas podem ser encontradas no ficheiro `queries.txt`.

# Ex1

Para colocar a API do primeiro exercício a correr, basta executar os seguintes comando, tendo em conta que a base de dados já se deve encontrar a correr:
```bash
npm install
npm start
```

# Ex2

Para colocar o frontend do segundo exercício a correr, basta executar os seguintes comando:
```bash
npm install
npm start
```

# Docker

A forma mais simples de correr as diversas componentes do projeto é através do Docker. Para tal, basta executar o seguinte comando, na raíz do repositório:
```bash
docker-compose up --build
```
