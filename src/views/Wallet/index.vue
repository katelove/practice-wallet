<template lang="">
  <div class="wallet-home">
    <Nav />
    <section>
      <SecOne />
    </section>
    <section>
      <SecTwo />
    </section>
    <section>
      <SecThree />
    </section>
    <section>
      <div class="bg-violetColor-500 h-[460px] ">
        <h1 class="text-center text-lightColor-100 font-bold pt-[110px] pb-[80px] text-[24px]">为何选择 Taylor Wallet</h1>
        <Card :cardTotal=3 />
      </div>
    </section>
    <section></section>
    <section></section>
  </div>
</template>
<script>
import Nav from '@/components/Nav/index.vue'
import SecOne from '@/components/Wallet/SecOne.vue'
import SecTwo from '@/components/Wallet/SecTwo.vue'
import SecThree from '@/components/Wallet/SecThree.vue'
import Card from '@/components/Wallet/Card.vue'
export default {
  name: 'WalletPage',
  components: {
    Nav,
    SecOne,
    SecTwo,
    SecThree,
    Card
  }
}
</script>
<style lang="scss" scope>
.wallet-home {
  width: 100%;
  section {
    height: 100%;
    width: 100%;
  }
}
</style>
