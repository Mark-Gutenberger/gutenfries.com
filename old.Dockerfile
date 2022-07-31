FROM ubuntu:21.10
# FROM denoland/deno:1.23.4

RUN apt-get update && apt-get install -y \
	curl \
	unzip

WORKDIR /app

# These steps will be re-run upon each file change in your working directory:
ADD . .

RUN bash ./scripts/install.sh

CMD ["/root/.deno/bin/deno", "task", "production"]

EXPOSE 1234:1234
