# debian plays nicely with rust & is generally faster than ubuntu
FROM denoland/deno:debian-1.27.0

# for deno & deno deploy, if applicable
ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .

# install curl to install rust
# RUN apt-get -qq install -y \
# curl
# install rust nightly && wasm-32
# RUN curl https://sh.rustup.rs -sSf | sh -s -- -y --default-toolchain nightly
# ENV PATH="/root/.cargo/bin:${PATH}"
# RUN rustup target add wasm32-unknown-unknown

# Cache deno dependencies
RUN deno cache main.ts --unstable

EXPOSE 80

CMD ["task", "start"]
