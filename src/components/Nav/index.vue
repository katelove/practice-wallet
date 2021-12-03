<template lang="">
  <header>
    <nav class="bg-darkColor-200 flex justify-start">
      <!-- pc -->
      <div>
        <img src="@/assets/icon/logo.png" />
      </div>
      <ul class="navigation">
        <li>
          <NavLink link="Home">Home</NavLink>
        </li>
        <li>
          <NavLink link="About">About</NavLink>
        </li>
        <li>
          <NavLink link="Article">Article</NavLink>
        </li>
      </ul>
      <!-- mobile -->
      <div class="icon">
        <img src="@/assets/icon/hamburger.png" alt="" />
      </div>
      <transition>
        <ul>
          <li>
            <NavLink link="Home">Home</NavLink>
          </li>
          <li>
            <NavLink link="About">About</NavLink>
          </li>
          <li>
            <NavLink link="Article">Article</NavLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>
<script>
import NavLink from '@/components/Nav/NavLink.vue'
export default {
  name: 'Nav',
  components: {
    NavLink
  }
}
</script>
<style lang=""></style>
