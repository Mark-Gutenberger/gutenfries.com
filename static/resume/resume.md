<!-- Improved compatibility of back-to-top link: -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out gutenfries.com. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

[![GitHub Repo Size](https://img.shields.io/github/repo-size/gutenfries/gutenfries.com)]()
[![GitHub Contributors](https://img.shields.io/github/contributors/gutenfries/gutenfries.com)](https://github.com/gutenfries/gutenfries.com/graphs/contributors)
[![GitHub Stars](https://img.shields.io/github/stars/gutenfries/gutenfries.com)](https://github.com/gutenfries/gutenfries.com/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/gutenfries/gutenfries.com)](https://github.com/gutenfries/gutenfries.com/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/gutenfries/gutenfries.com.svg)](https://github.com/gutenfries/gutenfries.com/issues)
[![MIT License](https://img.shields.io/github/license/gutenfries/gutenfries.com.svg)](https://github.com/gutenfries/gutenfries.com/blob/main/LICENSE.md)
[![deno-tests](https://github.com/gutenfries/gutenfries.com/actions/workflows/deno-tests.yml/badge.svg)](https://github.com/gutenfries/gutenfries.com/actions/workflows/deno-tests.yml)
[![rust-tests](https://github.com/gutenfries/gutenfries.com/actions/workflows/rust-tests.yml/badge.svg)](https://github.com/gutenfries/gutenfries.com/actions/workflows/rust-tests.yml)
[![Production](https://github.com/gutenfries/gutenfries.com/actions/workflows/deno-deploy-dev.yml/badge.svg)](https://gutenfries.deno.dev)
[![made with fresh](../images/fresh-badge-dark.svg)](https://fresh.deno.dev)

<!-- PROJECT LOGO -->
<br />
<div align="center">
	<a href="https://github.com/gutenfries/gutenfries.com">
		<img src="../icons/logo.svg" alt="Logo" width="80" height="80">
	</a>
	<h1 align="center">gutenfries.com</h1>
	<p align="center">
	Welcome to the repository for my site!
		<br/>
		<br/>
		<a href="https://gutenfries.deno.dev">Production</a>
		·
		<a href="https://github.com/gutenfries/gutenfries.com/issues">Report Bug</a>
		·
		<a href="https://github.com/gutenfries/gutenfries.com/issues">Request Feature</a>
	</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
	<summary>Table of Contents</summary>
	<ol>
		<li>
			<a href="#getting-started">Getting Started</a>
			<ul>
				<li><a href="#built-with">Built With</a></li>
				<li><a href="#prerequisites">Prerequisites</a></li>
				<li><a href="#installation">Installation</a></li>
			</ul>
		</li>
		<li><a href="#usage">Usage</a></li>
		<li><a href="#roadmap">Roadmap</a></li>
		<li><a href="#contributing">Contributing</a></li>
		<li><a href="#license">License</a></li>
		<li><a href="#contact">Contact</a></li>
		<li><a href="#acknowledgments">Acknowledgments</a></li>
	</ol>
</details>

<!-- Overview -->

## Overview

<!-- TODO(@gutenfries): add screenshot -->

![gutenfries.com Screen Shot](../images/screenshot.png)

This is my website, built on [Fresh](https://fresh.deno.dev).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [Deno](https://deno.land/) - A secure runtime for JavaScript and TypeScript
- [Deno Deploy](https://deno.com/deploy) (Deployment)
- [Fresh](https://fresh.deno.dev) (Deno framework)
- [Preact](https://preactjs.org/) (JSX Library)
- [Tailwind CSS](https://tailwindcss.com/) ([Twind](https://twind.dev/)) (Styling)
- [GitHub Actions](https://github.com/featuers/actions) (CI/CD)
- [Rust](https://www.rust-lang.org/) (wasm FFI)
  - [wasm-bindgen](https://rustwasm.github.io/wasm-bindgen/) (wasm FFI tooling)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

Go ahead and clone the repo if you would like to be involved in development.

### Prerequisites

The environment required to get rust working correctly for this use case can be quite tricky, especially on windows. With that said, these are the system prerequisites:

- [Rust](https://www.rust-lang.org/tools/install)

You may or may not already have rust installed on your system, but you need to have the nightly toolchain installed. You can check if you have it installed by running:

```sh
rustup toolchain list
```

If you do not have the nightly toolchain installed, you can install it by running:

```sh
rustup toolchain install nightly
```

If you need to install rust, you can do so by running:

```sh
curl -sSf https://sh.rustup.rs | sh -s -- -y --nightly-toolchain 1.65.0
export PATH="$PATH:/home/rust/.cargo/bin"
```

Additionally, you will need to install the wasm-bindgen-cli tooling. You can do so by running:

```sh
cargo install wasm-bindgen-cli
```

That _should_ take care of the rust requirements.
I have found windows to be rather finicky with the rust environment, so if you run into issues, please let me know and I'll get back to you if I can help.

- [Deno](https://deno.land/manual/getting_started/installation)

Again, you may or may not already have deno installed on your system, You will need >v1.24.0 (v1.25.3 recommended) You can check if you have it installed by running:

```sh
deno --version
```

If you need to update deno, you can do so by running:

```sh
deno upgrade # will update to the latest stable version
```

If you do not have deno installed, you can install it by running:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Installation

1. Clone the repo.

   ```sh
   git clone https://github.com/gutenfries/gutenfries.com.git
   ```

2. There is no step two. _No_ dependency installation. Rust and Deno are God-tier languages.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- ### Done
- [x] Modern gradient/glass card UI
- [x] Modern repository structure
- [x] CD with GitHub Actions & Deno Deploy
- [x] CI testing
- ### Partially Done
- [ ] Tests
  - [x] Typescript tests
  - [x] Rust tests
  - [ ] JSX/Preact tests
- ### Planned
- [ ] Search engine
- [ ] Resume page
- [ ] SEO
- ### Potential
- [ ] Blog

See the [open issues](https://github.com/gutenfries/gutenfries.com/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are _**greatly appreciated**_.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Open sourced under the MIT License. See [LICENSE.md](https://github.com/gutenfries/gutenfries.com/blob/main/LICENSE.md) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Marcus Gutenberger

<!-- TODO(@gutenfries): add this when appropriate -->
<!-- -   [gutenfries.deno.dev](https://gutenfries.deno.dev) -->

- [@gutenfries](https://twitter.com/gutenfries)
- [gutenfries@gmail.com](mailto:gutenfries@gmail.com)

Project Link: [https://github.com/gutenfries/gutenfries.com](https://github.com/gutenfires/gutenfries.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Helpful resources used to get this project off the ground:

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Octo Icons](https://primer.style/octicons/)
- [Fresh docs](https://fresh.deno.dev/docs)
- [Preact docs](https://preactjs.com/guide/v10/getting-started)
- [Deno docs](https://deno.land/manual)
- [Deno Deploy docs](https://deno.com/deploy/docs)
- [Rust docs](https://doc.rust-lang.org/book/)
- [wasm-bindgen docs](https://rustwasm.github.io/wasm-bindgen/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
