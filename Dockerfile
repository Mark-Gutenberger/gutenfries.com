# FROM denoland/deno:latest
FROM denoland/deno:1.23.4

WORKDIR /app

COPY . .

CMD ["task", "production"]
