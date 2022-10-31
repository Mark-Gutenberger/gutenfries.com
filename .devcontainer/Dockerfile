# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.245.2/containers/rust/.devcontainer/base.Dockerfile
# [Choice] Debian OS version (use bullseye on local arm64/Apple Silicon): buster, bullseye
ARG VARIANT="buster"
FROM --platform=linux/amd64 mcr.microsoft.com/vscode/devcontainers/rust:0-${VARIANT}

# Install deno
ENV DENO_INSTALL=/deno
RUN mkdir -p /deno \
	&& curl -fsSL https://deno.land/x/install/install.sh | sh \
	&& chown -R vscode /deno

# Add deno to PATH
ENV PATH=${DENO_INSTALL}/bin:${PATH} \
	DENO_DIR=${DENO_INSTALL}/.cache/deno


# cache deno dependencies
RUN deno cache ./dev.ts
RUN deno cache ./main.ts
