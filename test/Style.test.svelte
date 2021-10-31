<script lang="ts">
  import { Style, visuallyHidden } from "../src";
  import { visuallyHidden as useVisuallyHidden } from "../src/visually-hidden";
  import { UseStyleType } from "../src/Style";

  const customStyle: UseStyleType = (node, enabled) => new Style(node, enabled, "").init();
</script>

<div use:visuallyHidden />
<div use:visuallyHidden={false} />
<div use:useVisuallyHidden />
<div use:customStyle />
