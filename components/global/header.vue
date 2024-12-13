<template>
  <header :class="globalStore.language == 'ar' ? 'translated' : ''">
    <div class="container flex items-center justify-between gap-8 ">
      <!-- big screens -->
      <div class="logo wrapper">
        <NuxtLink to="/">
          <img src="/main/hero/logo.png" alt="">
        </NuxtLink>
      </div>
      <ul class="links wrapper gap-8 flex justify-between ">
        <li class="link" v-for="(link, i) in links" :key="link.arName" @click="setActive(i)"
          :class="link.active ? 'active' : ''">
          <NuxtLink to="/">
            <span>{{ globalStore.language == 'ar' ? link.arName : link.enName }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="options wrapper flex justify-end gap-4 items-center">
        <div class="option allowed-clicking-currency-dropdown currency relative">
          <div class="icon" @click="showCurrencyDropdown">
            <img src="/main/hero/icons/currency.png" alt="">
          </div>
          <div class="dropdown allowed-clicking-currency-dropdown absolute" v-if="globalStore.currencyDropdown">
            <div class="option" v-for="(option, i) in currencyOptions" :key="i" @click="setActiveCurrency(i)">
              <div class="title">
                <span>{{ globalStore.language == 'ar' ? option.arName : (globalStore.language == 'en' ? option.enName :
                  '')
                  }}</span>
              </div>
              <div class="icon">
                <span>{{ option.currency }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="option allowed-clicking-language-dropdown language relative">
          <div class="icon" @click="showLangaugeDropdown">
            <img src="/main/hero/icons/language.png" alt="">
          </div>
          <div class="dropdown allowed-clicking-language-dropdown absolute" v-if="globalStore.languageDropdown">
            <div class="option" @click="setActiveLanguage(i)" :class="language.active ? 'active' : ''"
              v-for="(language, i) in languageOptions" :key="i">
              <div class="title">
                <span>{{ globalStore.language == 'ar' ? language.arName : (globalStore.language == 'en' ?
                  language.enName : '')
                  }}</span>
              </div>
              <div class="icon uppercase">
                <span>{{ language.language }}</span>
              </div>
            </div>
          </div>
        </div>
        <NuxtLink to="/">
          <div class="login flex gap-4 items-center">
            <div class="icon">
              <img src="/main/hero/icons/login.png" alt="">
            </div>
            <span>{{ globalStore.language == 'ar' ? 'تسجيل الدخول' : 'login' }}</span>
          </div>
        </NuxtLink>
      </div>
      <!-- small screens -->
      <div :class="['burgerMenu', globalStore.sidebar ? 'active' : '']" @click="setActiveSidebar">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </div>
      <div :class="['sidebar', globalStore.sidebar ? 'active' : '']">
        <div class="close" @click="globalStore.sidebar = false">
          <Icon name="material-symbols:cancel-outline" />
        </div>
        <div class="options">
          <div class="option language allowed-clicking-language-selections">
            <div class="current flex items-center justify-between" @click="showLanguageSelections">
              <span>{{ globalStore.language == 'ar' ? currentLanguage.arName : (globalStore.language == 'en' ?
                currentLanguage.enName
                : '')
                }}</span>
              <div class="icon flex items-center justify-center" :class="globalStore.selections ? 'active' : ''">
                <Icon name="material-symbols:keyboard-arrow-down" />
              </div>
            </div>
            <div class="selections" :class="globalStore.selections ? 'active' : ''">
              <div class="selection flex items-center justify-between" @click="setActiveLanguage(i)"
                v-for="(selection, i) in languageOptions" :key="i">
                <span>{{ globalStore.language == 'ar' ? selection.arName : (globalStore.language == 'en' ?
                  selection.enName : '') }}</span>
                <div class="icon uppercase">
                  <span>{{ selection.language }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="option currency allowed-clicking-currency-selections">
            <div class="current flex items-center justify-between" @click="showCurrencySelections">
              <span>{{ globalStore.language == 'ar' ? currentCurrency.arName :
                (globalStore.language ==
                  'en' ? currentCurrency.enName : '')
                }}</span>
              <div class="icon flex items-center justify-center"
                :class="globalStore.currencySelectoins ? 'active' : ''">
                <Icon name="material-symbols:keyboard-arrow-down" />
              </div>
            </div>
            <div class="selections" :class="globalStore.currencySelectoins ? 'active' : ''">
              <div class="selection flex items-center justify-between" @click="setActiveCurrency(i)"
                v-for="(selection, i) in currencyOptions" :key="i">
                <span>{{ globalStore.language == 'ar' ? selection.arName : (globalStore.language == 'en' ?
                  selection.enName : '') }}</span>
                <div class="icon uppercase">
                  <span>{{ selection.currency }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul class="links flex flex-col">
          <li class="link" v-for="(link, i) in links" :key="i">
            <NuxtLink to="/" :class="['w-full flex items-center gap-3', link.active ? 'active' : '']"
              @click="setActive(i)">
              <div class="icon flex items-center justify-center">
                <Icon :name="link.icon" />
              </div>
              <span>{{ globalStore.language == 'ar' ? link.arName : (globalStore.language == 'en' ? link.enName : '')
                }}</span>
            </NuxtLink>
          </li>
        </ul>
        <div class="login flex items-center justify-center">
          <button>{{ globalStore.language == 'ar' ? 'تسجيل الدخول' : (globalStore.language == 'en' ? 'Login' : '')
            }}</button>
        </div>
      </div>
      <div class="smallScreenLogo">
        <NuxtLink to="/">
          <img src="/favicon.ico" alt="">
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const globalStore = useMyGlobalStore()

const links = ref([
  {
    enName: 'Home',
    arName: 'الصفحة الرئيسية',
    path: '/',
    icon: 'material-symbols:home',
    active: true
  },
  {
    enName: 'Flights',
    arName: 'الرحلات الجوية',
    path: '/',
    icon: 'material-symbols:flight-rounded',
    active: false
  },
  {
    enName: 'Hotel',
    arName: 'الحجوزات الفندقية',
    path: '/',
    icon: 'material-symbols:hotel',
    active: false
  },
  {
    enName: 'Visa',
    arName: 'التأشيرات',
    path: '/',
    icon: 'material-symbols:airplane-ticket-rounded',
    active: false
  },
  {
    enName: 'Groups',
    arName: 'الكروبات',
    path: '/',
    icon: 'material-symbols:groups',
    active: false
  },
])

const currencyOptions = ref([
  {
    arName: 'دينار عراقي',
    enName: 'Iraqi dinar',
    currency: 'IQD',
    active: true
  },
  {
    arName: 'دولار امريكي',
    enName: 'United states dollar',
    currency: 'USD',
    active: false
  },
])

const languageOptions = ref([
  {
    arName: 'العربية',
    enName: 'Arabic',
    language: 'ar',
    active: false
  },
  {
    arName: 'الأنجليزية',
    enName: 'English',
    language: 'en',
    active: false
  },
])

const currentCurrency = ref({
  arName: 'دينار عراقي',
  enName: 'Iraqi dinar',
  currency: 'IQD',
  active: true
})

const currentLanguage = ref({})

onNuxtReady(() => {
  if (globalStore.language == 'ar') {
    currentLanguage.value = languageOptions.value.find(l => l.language = 'ar')
  } else if (globalStore.language == 'en') {
    currentLanguage.value = languageOptions.value.find(l => l.language = 'en')
  }
})

const showCurrencyDropdown = () => {
  globalStore.currencyDropdown = !globalStore.currencyDropdown
}

const showLangaugeDropdown = () => {
  globalStore.languageDropdown = !globalStore.languageDropdown
}

const showCurrencySelections = () => {
  globalStore.currencySelectoins = !globalStore.currencySelectoins
}
const showLanguageSelections = () => {
  globalStore.selections = !globalStore.selections
}

const setActiveCurrency = (i) => {
  currencyOptions.value.forEach(currency => () => {
    currency.active = false
    currencyOptions.value[i].active = true
  })
  globalStore.currencyDropdown = false
  globalStore.currencySelectoins = false
  currentCurrency.value = currencyOptions.value[i]
}

const setActiveLanguage = (i) => {
  languageOptions.value.forEach((lang) => {
    lang.active = false
    languageOptions.value[i].active = true
  })
  globalStore.languageDropdown = false
  globalStore.selections = false
  globalStore.language = languageOptions.value[i].language
  currentLanguage.value = languageOptions.value[i]
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    const allowedElements = document.querySelectorAll('.allowed-clicking-currency-dropdown')
    if (allowedElements) {
      let canClose = true
      allowedElements.forEach(el => {
        if (el.contains(e.target)) {
          canClose = false
        }
      })

      if (canClose) {
        globalStore.currencyDropdown = false
      }
    }
  })

  document.addEventListener('click', (e) => {
    const allowedElements = document.querySelectorAll('.allowed-clicking-language-dropdown')
    if (allowedElements) {
      let canClose = true
      allowedElements.forEach(el => {
        if (el.contains(e.target)) {
          canClose = false
        }
      })

      if (canClose) {
        globalStore.languageDropdown = false
      }
    } else {
      removeEventListener()
    }


  })

  document.addEventListener('click', (e) => {
    const allowedEls = document.querySelectorAll('.allowed-clicking-currency-selections')
    if (allowedEls) {
      let canClose = true
      allowedEls.forEach(el => {
        if (el.contains(e.target)) {
          canClose = false
        }
      })
      if (canClose) {
        globalStore.currencySelectoins = false
      }
    }
  })
  document.addEventListener('click', (e) => {
    const allowedEls = document.querySelectorAll('.allowed-clicking-language-selections')
    if (allowedEls) {
      let canClose = true
      allowedEls.forEach(el => {
        if (el.contains(e.target)) {
          canClose = false
        }
      })
      if (canClose) {
        globalStore.selections = false
      }
    }
  })
})

const setActive = (i) => {
  links.value.forEach(link => {
    link.active = false
    links.value[i].active = true
  })
}

const setActiveSidebar = () => {
  globalStore.sidebar = !globalStore.sidebar
}

</script>

<style scoped lang="scss">
header {
  background: $bg-color;
  color: white;
  font-weight: 700;
  user-select: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 80;
  padding: 10px 30px;

  .burgerMenu,
  .sidebar {
    @media (min-width: 991px) {
      display: none;
    }
  }

  &.translated {
    * {
      direction: rtl;
    }

    .options .dropdown {
      right: 0 !important;
    }

  }

  .container {
    padding: 5px;
    height: $header-height;

    @media (max-width: 991px) {
      justify-content: space-between !important;
    }

    // big screens
    .logo {
      @media (max-width: 991px) {
        display: none;
      }
    }

    >.options {
      @media (max-width: 991px) {
        display: none;
      }

      .currency,
      .language {
        transform: translateY(-2px);
      }

      .login {
        padding: 7px 14px;
        background: $main-color;
        border-radius: 4px;
        cursor: pointer;

        &:hover {
          background-color: $light-main-color;
        }

        span {
          font-size: 1rem;

        }
      }
    }

    >.links {
      @media (max-width: 991px) {
        display: none;
      }

      li {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
          a {
            &::before {
              width: 90%;
            }
          }
        }

        a {
          font-size: 18px;
          font-weight: 500;
          position: relative;

          &::before {
            content: '';
            width: 90%;
            height: 3px;
            background-color: rgb(255, 255, 255);
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 10px;
            width: 0;
            transition: .2s;
          }
        }
      }
    }

    >.options {
      >.option {
        cursor: pointer;
      }

      .currency>.icon,
      .language>.icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        transition: .2s;

        &:hover {
          background-color: rgba(211, 211, 211, 0.267);
        }
      }

      .dropdown {
        background-color: white;
        color: black;
        top: 130%;
        right: 0;
        border-radius: 5px;

        &::before {
          content: '';
          border-width: 10px 10px 10px 10px;
          border-color: transparent transparent rgb(255, 255, 255) transparent;
          position: absolute;
          top: -20px;
          right: 10px;
        }

        .option {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-radius: 5px;
          gap: 30px;
          text-wrap: nowrap;

          &.active {
            .icon {
              background-color: $main-color;
              color: white;
              border-color: transparent;
            }
          }

          &:hover {
            background-color: rgb(241, 241, 241);
          }

          .icon {
            padding: 5px 10px;
            border-radius: 4px;
            min-width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid lightgray;
          }
        }
      }
    }

    // small screens
    .smallScreenLogo {
      width: 60px;
      background-color: white;
      padding: 2px;
      border-radius: 10px;

      @media (min-width: 991px) {
        display: none;
      }
    }

    .burgerMenu {
      padding: 10px 5px;
      width: 50px;
      height: 50px;
      border-radius: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;

      @media (min-width: 991px) {
        display: none;
      }

      &.active {
        .line {
          width: 100% !important;
        }
      }

      span {
        width: 100%;
        height: 3px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        transition: .2s;


        &.line-1 {
          width: 40%;
          align-self: start;
        }

        &.line-3 {
          width: 40%;
          align-self: end;
        }
      }
    }

    .sidebar {
      position: fixed;
      width: calc(100% - 70px);
      max-width: 500px;
      top: 0;
      left: -100dvw;
      bottom: 0;
      background: white;
      color: black;
      transition: .3s;

      &.active {
        left: 0;
      }

      .close {
        font-size: 35px;
        padding: 15px;
        cursor: pointer;

        &:hover {
          color: rgba(0, 0, 0, 0.788);
        }
      }

      .options {
        .option {
          .current {
            font-size: 20px;
            cursor: pointer;
            padding: 15px;
            transition: .2s;

            &:hover {
              background-color: rgb(245, 245, 245);
            }

            .icon {
              font-size: 30px;
              transition: .2s;

              &.active {
                rotate: -90deg;
              }
            }
          }

          .selections {
            height: 0;
            overflow: hidden;
            transition: .2s;
            border-bottom: 1px solid rgb(226, 226, 226);

            &.active {
              height: 88px;
            }

            .selection {
              padding: 10px 15px;
              cursor: pointer;
              transition: .2s;

              &:hover {
                background-color: rgb(241, 241, 241);
              }
            }
          }
        }
      }

      .links {
        margin: 20px 0;

        li {
          a {
            padding: 15px;
            font-size: 17px;
            transition: .2s;

            &.active {
              background-color: rgb(241, 241, 241);

            }

            .icon {
              font-size: 25px;
            }
          }
        }
      }

      .login {
        width: 100%;
        margin-top: 20px;

        button {
          padding: 10px 20px;
          background-color: $main-color;
          color: white;
          border-radius: 6px;
          width: 90%;
          cursor: pointer;
          font-size: 18px;
        }
      }
    }
  }
}
</style>