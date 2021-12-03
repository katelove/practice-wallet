<template lang="">
  <router-link
    :to="{ name: link }"
    class="text-darkColor-500 text-[20px] hover:text-primaryColor-300 active:border-b-4 active:text-darkColor-500 active:border-primaryColor-300 active:font-extrabold"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
</script>
