<template>
  <header>
    <h1>Text</h1>
  </header>
  <div class="method" id="truncate">

    <DocItem
        name="Truncate"
    >
      <template #description>
        <p>This mixin is used to truncate text after a specified number of lines or apply single-line truncation with
          ellipsis. It conditionally applies either multi-line truncation using <code>-webkit-line-clamp</code> or
          single-line truncation
          using <code>text-overflow: ellipsis</code>.</p>
      </template>
    </DocItem>

    <h3>Params</h3>
    <div class="params">
      <div class="params_head">Name</div>
      <div class="params_head">Description</div>
      <div class="params_head">Type</div>
      <div>
        <code>$line</code>
      </div>
      <div>
        optional, default: <code>false</code>
      </div>
      <div>boolean | number</div>
    </div>
    <div class="code">
      <Shiki code="@use 'scss-toolkit/mixins/text';

.text {
  @include text.truncate(2);
}"/>
    </div>
    <h3>Result</h3>
    <div class="result">
      <p :class="$style.text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
    </div>
  </div>
</template>

<style lang="scss" module>
@use 'scss-toolkit/mixins/text';

.text {
  @include text.truncate(2);
}
</style>

<script setup lang="ts">

useHead({
  title: 'Text mixins - SCSS Toolkit',
  titleTemplate: 'Text mixins - SCSS Toolkit'
})

</script>