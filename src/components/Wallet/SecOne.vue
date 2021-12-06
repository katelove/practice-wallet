<template >
<div>
    <div>
        <div class="absolute top-[25%] px-[50px] w-full">
            <p class="text-6xl">Taylor Wallet，跨链交易</p>
            <div class="flex justify-start mt-[30px] mb-[80px]">
                <img src="@/assets/wallet/arrow.png" class="mr-[15px]">
                <p>全新转账模式，跨链交易，一步到位</p>
            </div>
            <div class="flex justify-start w-full">
                <div class="mr-[30px]">
                    <div class="w-[200px] bg-violetColor-500 rounded-2xl flex justify-center justify-items-center mb-[20px] p-[10px]">
                        <img src="@/assets/wallet/apple.png" alt="">
                        <p class="text-lightColor-100 ml-[20px]">iOS</p>
                    </div>
                    <div class="w-[200px] bg-violetColor-500 rounded-2xl flex justify-center justify-items-center mb-[20px] p-[10px]">
                        <img src="@/assets/wallet/android.png" alt="">
                        <p class="text-lightColor-100 ml-[20px]">Android</p>
                    </div>
                </div>
                <div>
                    <img src="@/assets/wallet/qrCode.png" class="w-[80px]">
                    <p class="text-lightColor-300 text-[18px]">扫二维码下载</p>
                </div>
            </div>
        </div>
        <div class="bg-img h-screen lg:hidden">
        </div>
        <div class="bg-img">
            <div class="bg01 lg:flex hidden "></div>
            <div class="bg02 lg:flex hidden "></div>
            <div class="bg03 lg:flex hidden "></div>
            <div class="bg04 lg:flex hidden "></div>
        </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss" scope>
.bg-img{
    background: linear-gradient(#ffffff 20%, #9198e5 );
    .bg01{
        background-image: url("./bg01.png");
        background-size: 100% 100%;
        height: 242px;
        width: 100%;
    }
    .bg02{
        background-image: url("./bg02.png");
        background-size: 100% 100%;
        height: 242px;
        width: 100%;
    }
    .bg03{
        background-image: url("./bg03.png");
        background-size: 100% 100%;
        height: 242px;
        width: 100%;
    }
    .bg04{
        background-image: url("./bg04.png");
        background-size: 100% 100%;
        height: 242px;
        width: 100%;
    }
}

</style>
