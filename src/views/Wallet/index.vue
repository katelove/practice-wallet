<template lang="">
    <div class="wallet-home">
        <Nav/>
        <section>
        <SecOne/>
        </section>
        <section>
          <SecTwo/>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
    </div>
</template>
<script>
import Nav from '@/components/Nav/index.vue'
import SecOne from '@/components/Wallet/SecOne.vue'
import SecTwo from '@/components/Wallet/SecTwo.vue'
export default {
  name: 'WalletPage',
  components: {
    Nav,
    SecOne,
    SecTwo
  }

}
</script>
<style lang="scss" scope>
.wallet-home{
  width: 100%;
  section{
    height: 100%;
    width: 100%;
  }
}
</style>
