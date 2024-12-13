<template>
    <div class="title">
        <h1>
            <span>{{ globalStore.language == 'ar' ? arTitle : (globalStore.language == 'en' ? enTitle : '') }}</span>
        </h1>
        <p class="p1">{{ globalStore.language == 'ar' ? arP1 : (globalStore.language == 'en' ? enP1 : '') }}</p>
        <p class="p2">{{ globalStore.language == 'ar' ? arP2 : (globalStore.language == 'en' ? enP2 : '') }}</p>
    </div>
    <div class="ctaButton flex items-center gap-2 py-2 px-4" :class="globalStore.language == 'en' ? 'en' : ''">
        <span>{{ globalStore.language == 'ar' ? arCtaButtonContent : (globalStore.language == 'en' ? enCtaButtonContent
            : '') }}</span>
        <div class="icon">
            <img src="/main/hero/icons/arrow-left.png" alt="">
        </div>
    </div>
</template>

<script setup>

const globalStore = useMyGlobalStore()
const arTitle = ref('عالم من الوجهات بين يديك')
const enTitle = ref('Airline Ticket Hotels - Visas Tourst Group')
const arP1 = ref('الإصدار بسعر البنك المركزي العراقي')
const enP1 = ref('Booking at the Central Bank of Iraq rate (132.000) Dinar is Available')
const arP2 = ref('والت كارد - فيزا نيو - الرافدين - زين كاش الافتراضية - ماستر التنمية - ماستر TPI')
const enP2 = ref('')
const arCtaButtonContent = ref('اختر وجهتك الأن')
const enCtaButtonContent = ref('Select your destination now')

onMounted(() => {
    const tl = useGsap.timeline()
    tl.to('.title h1 span', {
        y: '0%',
        opacity: 1,
        duration: 0
    }, 1.3)
    tl.to('.title p', {
        y: 0,
        opacity: 1,
        duration: 0,
        stagger: .2
    }, 1.5)
    tl.to('.ctaButton', {
        y: 0,
        opacity: 1,
        duration: 0,
        stagger: .2
    }, 1.6)
})
</script>

<style scoped lang="scss">
.title {
    overflow: hidden;

    @media (max-width: 991px) {
        text-align: center;
    }

    * {
        transition: .2s;
    }

    h1 {
        font-size: 80px;
        line-height: 120%;
        width: 100%;
        max-width: 700px;
        margin-bottom: 25px;
        overflow: hidden;

        span {
            transition: 1s;
            transform: translateY(60%);
            opacity: 0;
            display: inline-block;
        }

        @media (max-width: 991px) {
            font-size: 60px;
            margin-bottom: 0px;
            text-align: center;
            margin: auto;
        }
    }

    p {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.842);
        transition: 1s;
        transform: translateY(70%);
        opacity: 0;

        &.p1 {
            font-size: 18px;
            color: white;
            font-weight: 700;
        }
    }
}

.ctaButton {
    background-color: $main-color;
    width: fit-content;
    margin-top: 20px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
    transform: translateY(60%);
    opacity: 0;
    transition: 1s;

    @media (max-width: 767px) {
        width: 100%;
        justify-content: center;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &.en {
        span {
            font-weight: 400;
        }

        .icon {
            rotate: 180deg;
            transform: translateY(-7%);
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>