# Vite boilerplate for Vanilla.js with Dart-Sass
 ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  &nbsp; ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) &nbsp; ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) <br>
Vite boilerplate to build MPA/static websites

## Description

Use dart-sass to style your products and save files each component folders which are under scss folder.
Save main JS files to "main" under js folder. For some features, make new js files under "library folder".

## Getting Started

Clone files to your direction

### Dependencies

- pnpm need to be installed<br>
  To use npm or yarn, change "pnpm" in package.json > scripts to "npm".

### Installing

node modules installation <br>
$pnpm install

### Executing program

dev: development mode
```$ pnpm dev```

build: build mode
```$ pnpm build```

## Help

No specification

```

```

## Authors

Masaknd:
[@Masaknd_dsgn](https://twitter.com/Masaknd_dsgn)

## Version History

- 0.1
  Problem: inconsistency of the result of running dev mode and build
  details: running dev mode doesn't compile scss link directory to css on html thus changes are not reflected on HRM

  - See [commit change]() or See [release history]()

- 0.2
  The problem above was solved by fixing "vite.config.js", also customized index.js and scss root src
  https://github.com/vitejs/vite/issues/4556

## License

## Acknowledgments

Inspiration, code snippets, etc.

- [https://github.com/vitejs/vite/issues/4556](https://github.com/vitejs/vite/issues/4556)
