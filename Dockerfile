FROM denoland/deno:debian-1.27.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .

RUN deno cache main.ts --unstable

EXPOSE 80

CMD ["task", "start"]
