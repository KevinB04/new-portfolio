<template>
  <span>
    <img alt="nice fox" :src="fox" class="favorites-img" />
        <button @click="$emit('remove')" class="remove">Remove</button>
  </span>
</template>

<script>
  export default {
    props: {
      fox: {
        type: String
      }
    }
  };
</script>