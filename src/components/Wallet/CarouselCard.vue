<template lang="">
    <div class="flex flex-col justify-around items-center lg:flex-row">
     <div
      v-for="(item,index) in cardTotal" :key="index+1"
      class="flex items-center flex-col justify-between rounded-xl bg-lightColor-100  mb-[30px] p-[50px] shadow-lg w-[228px] h-[325px]">
        <div>
            <img :src="require(`@/assets/wallet/carousel0${index+1}.png`)" class="w-[90px] h-[90px]">
        </div>
        <div>
            <h2 class="font-bold text-[32px] text-darkColor-200">{{moneyList[index]}}</h2>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'CarouselCard',
  data () {
    return {
      moneyList: ['BTC', 'USDT', 'ETH', 'LTC', 'TRX']
    }
  },
  props: {
    cardTotal: {
      type: Number
    }
  }
}
</script>
