<template lang="">
  <header>
    <nav class="bg-darkColor-200">
      <!-- pc -->
      <div class="sm:hidden mx-[15px] flex justify-start items-center">
        <div>
          <img src="@/assets/icon/logo.png" />
        </div>
        <ul class="flex justify-start">
          <li class="mx-[15px]">
            <NavLink link="Home">Home</NavLink>
          </li>
          <li class="mx-[15px]">
            <NavLink link="About">About</NavLink>
          </li>
          <li class="mx-[15px]">
            <NavLink link="Article">Article</NavLink>
          </li>
        </ul>
      </div>
      <!-- mobile -->
      <div class="lg:hidden md:hidden bg-lightColor-200">
        <div>
        <img src="@/assets/icon/hamburger.png" />
      </div>
      <!-- mobile page -->
        <transition name="fade">
          <ul >
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
         </div>
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
