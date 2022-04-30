# Como instalar e executar o projeto

 - Primeiro, é necessário criar os containers do Docker para executar o backend:
  - Vá para a pasta `/laradock` e crie um arquivo .env com o conteúdo de `.env.example`
  - Configure as portas do mysql, do nginx e do php my admin.
  - Execute `docker-compose up -d nginx mysql phpmyadmin`
  - Entre no container e execute `sudo docker-compose exec --user=laradock workspace bash`
  - Rode o comando `php artisan migrate` e `php artisan db:seed --class=ContactTypeSeeder`
