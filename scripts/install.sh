#!/bin/bash
# Copyright 2019 the Deno authors. All rights reserved. MIT license.

set -e

if ! command -v unzip >/dev/null; then
        echo "Error: unzip is required to install Deno (see: https://github.com/denoland/deno_install#unzip-is-required)." 1>&2
        exit 1
fi

if [ "$OS" = "Windows_NT" ]; then
        target="x86_64-pc-windows-msvc"
else
        case $(uname -sm) in
        "Darwin x86_64") target="x86_64-apple-darwin" ;;
        "Darwin arm64") target="aarch64-apple-darwin" ;;
        *) target="x86_64-unknown-linux-gnu" ;;
        esac
fi

deno_uri="https://github.com/denoland/deno/releases/latest/download/deno-${target}.zip"
deno_install="${DENO_INSTALL:-$HOME/.deno}"
bin_dir="$deno_install/bin"
exe="$bin_dir/deno"

if [ ! -d "$bin_dir" ]; then
        mkdir -p "$bin_dir"
fi

curl --fail --location --progress-bar --output "$exe.zip" "$deno_uri"
unzip -d "$bin_dir" -o "$exe.zip"
chmod +x "$exe"
rm "$exe.zip"

echo "Deno was installed successfully to $exe"
if command -v deno >/dev/null; then
        echo "Run 'deno --help' to get started"
else
        # echo "Manually add the directory to your \$HOME/$shell_profile (or similar)"
        echo "export DENO_INSTALL=\"$deno_install\"" >> $HOME/".bashrc"
        echo "export PATH=\"\$DENO_INSTALL/bin:\$PATH\"" >> $HOME/".bashrc"
        source $HOME/".bashrc"
        # echo "Run '$exe --help' to get started"
fi

/root/.deno/bin/deno --version
