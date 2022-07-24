# Cache application with REDIS

In this application I learn about backend caching using Redis, a fast and scalable NoSQL Database based in key-value.

### How to run this project:

1. Clone this repository in your machine;
2. Fill variables in a `.env` file;
3. After type your `DATABASE_URL` in `.env` file, run the command: `npx prisma db push`;
4. With docker installed, run the following command: `docker-compose up`;
5. Then execute a prisma command in your container following these commands:
> `docker exec -it <name_of_app_container> sh`
> `npx prisma generate`

##### Done, now you can enjoin of this code. :D
