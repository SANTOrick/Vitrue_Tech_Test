<template>
  <div>
    <div v-if="palindromeList != undefined && palindromeList.length == 0" data-test="no-result">Word has no possible Palindrome</div>
    <div v-for="x in palindromeList" :key="x" class="show-palindromes" data-test="has-result">
      <span>{{ palindromeList.indexOf(x) + 1 }}. {{ x }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    palindromeList: Array as PropType<string[]>,
  },
});
</script>

<style scoped>
.show-palindromes {
  display: flex;
  flex-direction: column;
}
</style>
