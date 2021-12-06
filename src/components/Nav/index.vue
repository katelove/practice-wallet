<template lang="">
  <header class="fixed absolute w-full">
    <nav class="flex justify-between mx-auto z-1 items-center h-[40px] p-[30px]">
      <!-- pc -->
      <div class="flex items-center justify-start">
        <div>
          <router-link to="Home"><img src="@/assets/icon/logo.png" /></router-link>
        </div>
        <ul class="lg:flex hidden">
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
      <div class="lg:hidden flex items-center cursor-pointer" @click="openMenu">
        <img src="@/assets/icon/hamburger.png" />
      </div>
    </nav>
    <!-- mobile page -->
    <Menu v-show="showMenu" @closeModel="close"/>
  </header>
</template>
<script>
import NavLink from '@/components/Nav/NavLink.vue'
import Menu from '@/components/Nav/Menu.vue'
export default {
  name: 'Nav',
  data () {
    return {
      showMenu: false
    }
  },
  components: {
    NavLink,
    Menu
  },
  methods: {
    openMenu () {
      this.showMenu = true
    },
    close () {
      this.showMenu = false
    }
  }
}
</script>
