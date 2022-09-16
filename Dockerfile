# FROM denoland/deno:latest
FROM denoland/deno:1.25.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .

# Update default packages
RUN apt-get -qq update

# Get Ubuntu packages
RUN apt-get install -y -q \
	build-essential \
	curl \
	pkg-config \
	libssl-dev

# NOTE: no need to run update again at this point
# RUN apt-get update

# Get Rust; NOTE: using sh for better compatibility with other base images
RUN curl https://sh.rustup.rs -sSf | sh -s -- --default-toolchain nightly -y
# Add .cargo/bin to PATH
ENV PATH="/root/.cargo/bin:${PATH}"
# Check cargo is visible
RUN cargo --help
# Add wasm32 target
RUN rustup target add wasm32-unknown-unknown
# Install wasm-bindgen
RUN cargo install -f wasm-bindgen-cli
# Check to see if wasm-bindgen is visible
RUN wasm-bindgen --help

# Cache deno dependencies
RUN deno cache main.ts --import-map=import_map.json

EXPOSE 80

CMD ["task", "production"]
