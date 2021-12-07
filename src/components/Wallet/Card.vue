<template lang="">
    <div class="flex justify-around items-center">
     <div
      v-for="(item,index) in cardTotal" :key="index+1"
      class="flex items-center flex-col justify-center rounded-xl bg-lightColor-100 p-[34px] shadow-lg w-[335px] h-[325px]">
        <div>
            <img :src="require(`@/assets/wallet/good0${index+1}.png`)" class="w-[90px] h-[90px]">
        </div>
        <div>
            <h2 class="font-bold">交易成本低</h2>
            <p>Taylor为每个地址提供了免费带宽，交易时优先消耗免费带宽，降低交易成本</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    cardTotal: {
      type: Number
    }
  }
}
</script>
