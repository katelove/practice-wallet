<template >
    <div class="bg-img">
        <div class="bg01"></div>
        <div class="bg02"></div>
        <div class="bg03"></div>
        <div class="bg04"></div>
    </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scope>
.bg-img{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    .bg01{
        background-image: url("./bg01.png");
        height: 242px;
        width: 100%;
        z-index: 10;
    }
    .bg02{
        background-image: url("./bg02.png");
          height: 242px;
        width: 100%;
    }
    .bg03{
        background-image: url("./bg03.png");
          height: 242px;
        width: 100%;
    }
    .bg04{
        background-image: url("./bg04.png");
          height: 242px;
        width: 100%;
    }
}

</style>
