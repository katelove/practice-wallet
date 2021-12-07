<template lang="">
  <div class="max-[1024px] mx-auto">
    <div v-for="(item,index) in proTotal" :key="index+1"
      class="flex flex-col justify-center items-center bg-lightColor-600"
      :class="[(index+1) === 1 || (index+1) === 3 ?'md:flex-row-reverse':'md:flex-row']"
    >
      <div>
        <img :src="require(`@/assets/wallet/pro0${index+1}.png`)"/>
      </div>
      <div>
        <h2 class="text-[32px] mb-[45px] font-bold">
          新一代的跨链交易操作钱包
        </h2>
        <p class="mb-[5px] text-[16px]">
          Taylor Wallet使用了Taylor去中心化的跨链操作系统<br />
          通过跨区转账和跨链转账<br />
          实现了资产从BTC链、ETH链等转入Taylor链
        </p>
        <img src="@/assets/wallet/line.png" class="mt-[40px] mb-[30px]" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SecThree',
  data () {
    return {
      proTotal: 4
    }
  }
}
</script>
<style lang=""></style>
