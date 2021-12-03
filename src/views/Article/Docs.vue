<template lang="">
    <div>
        <div>
            <ul>
                <li v-for="(item,index) in blockArray"
                    :key="index"
                    class="text-lightColor-400 hover:text-violetColor-500 "
                    :class="{'active:bg-violetColor-500 active:rounded-md active:text-lightColor-100':index === activeIndex}"
                    @click="activeIndex =index"
                >
                {{blockArray[index].title}}
                </li>
                <li v-show="index === activeIndex" v-for="(item,index) in blockArray" :key="index">
                    <h1 class="text-[30px]">{{blockArray[activeIndex].title}}</h1>
                    <p>{{blockArray[activeIndex].time}}</p>
                    <hr>
                    <img :src="blockArray[activeIndex].img" >
                    <div  v-html="blockArray[activeIndex].text"></div>
                 </li>
            </ul>
        </div>
        <div>
        </div>
    </div>
</template>
<script>
import blockchain from '@/views/docs/Blockchain.js'
export default {
  data () {
    return {
      blockArray: blockchain,
      activeIndex: 0
    }
  }
}
</script>
<style lang="">

</style>
