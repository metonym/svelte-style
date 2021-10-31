# svelte-style

[![NPM][npm]][npm-url]

> Style utilities as Svelte actions

<!-- REPO_URL -->

`svelte-style` provides Svelte actions that conditionally apply styles as an alternative to writing CSS.

Try it in the [Svelte REPL](https://svelte.dev/repl/f759197ad49348b1bb4e181e735e08bc).

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-style
```

**NPM**

```bash
npm i -D svelte-style
```

**pnpm**

```bash
pnpm i -D svelte-style
```

## Available actions

### Visually hidden

Use the `visuallyHidden` action to hide content without breaking screen readers.

```svelte
<script>
  import { visuallyHidden } from "svelte-style";
</script>

<div use:visuallyHidden>Text</div>
```

The action accepts an argument that conditionally toggles the style.

```svelte
<script>
  import { visuallyHidden } from "svelte-style";

  let toggled = false;
</script>

<button on:click={() => (toggled = !toggled)}>
  Toggle <span style="color: red" use:visuallyHidden={toggled}>Text</span>
</button>
```

## API

### Style class

Create your own Svelte action that conditionally applies styles using the `Style` class.

**JavaScript**

```svelte no-eval
<script>
  import { Style } from "svelte-style";

  const style = "color: red";

  const colorRed = (node, enabled) => new Style(node, enabled, style).init();
</script>

<div use:colorRed>Red text</div>
```

**TypeScript**

If your set-up includes TypeScript, use `UseStyleType` to statically type the action.

```ts
import { Style } from "svelte-style";
import { UseStyleType } from "svelte-style/src/Style";

const style = "color: red";

const colorRed: UseStyleType = (node, enabled) => new Style(node, enabled, style).init();
```

## TypeScript

Svelte version 3.31 or greater is required to use this component with TypeScript.

TypeScript definitions are located in the [types folder](types/).

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-style.svg?style=for-the-badge&color=%23ff3e00
[npm-url]: https://npmjs.com/package/svelte-style
