# FROM denoland/deno:latest
FROM denoland/deno:1.23.4

WORKDIR /app

COPY . .

# install rust toolchain
RUN sudo apt-get update && sudo apt-get -y install wabt
RUN curl -sSf https://sh.rustup.rs | sh -s -- -y --nightly-toolchain 1.65.0
RUN export PATH="$PATH:/home/rust/.cargo/bin"

CMD ["task", "production"]
