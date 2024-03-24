FROM denoland/deno:debian-1.38.3

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

# install chrome
RUN apt-get install -y google-chrome-stable

WORKDIR /app

COPY . .

RUN deno cache main.ts --unstable

EXPOSE 8000

CMD ["task", "start"]
