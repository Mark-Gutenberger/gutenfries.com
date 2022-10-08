FROM denoland/deno:debian-1.26.1

# for deno & deno deploy
ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

# USER root

WORKDIR /app

COPY . .

# Update default packages
RUN apt-get -qq update

# Install dependencies
RUN apt-get -qq install -y \
	curl

# Get Rust nightly && wasm-32
RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly
ENV PATH="/root/.cargo/bin:${PATH}"
RUN rustup target add wasm32-unknown-unknown

# Cache deno dependencies
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 80

CMD ["task", "start"]
