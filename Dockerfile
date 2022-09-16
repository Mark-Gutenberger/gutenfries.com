# FROM denoland/deno:latest
FROM denoland/deno:1.23.4

WORKDIR /app

COPY . .

# install rust toolchain
RUN curl -sSf https://sh.rustup.rs | sh -s -- -y --nightly-toolchain 1.65.0
RUN export PATH="$PATH:/home/rust/.cargo/bin"
RUN cargo install -f wasm-bindgen-cli

CMD ["task", "production"]
