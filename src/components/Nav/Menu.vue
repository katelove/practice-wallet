<template>
    <transition name="fade">
        <div class="bg-lightColor-200 fixed w-[350px] h-[100vh] right-0 top-0">
            <div class="w-[36px] h-[36px] cursor-pointer" @click="closeMenu">
                <img src="@/assets/icon/close.png">
            </div>
            <ul class="flex flex-col justify-items-start py-[24px] border-b-[1px] border-lightColor-500">
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
        </div>
    </transition>
</template>
<script>
import NavLink from '@/components/Nav/NavLink.vue'
export default {
  name: 'Nav',
  components: {
    NavLink
  },
  methods: {
    closeMenu () {
      this.$emit('closeModel')
    }
  }
}
</script>
