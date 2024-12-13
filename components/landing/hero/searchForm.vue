<template>
  <div class="searchForm">
    <div class="filters">
      <div class="filter" @click="setActive(i)" :class="filter.active ? 'active' : ''" v-for="(filter, i) in filters"
        :key="i">
        <div class="icon">
          <Icon :name="filter.icon" />
        </div>
        <div class="name">
          <span>{{ globalStore.language == 'ar' ? filter.arName : (globalStore.language == 'en' ? filter.enName :
            '') }}</span>
        </div>
      </div>
    </div>
    <form @submit.prevent="">
      <div class="content">
        <div class="options flex items-center gap-8">
          <label :for="option.option" class="option flex items-center gap-2" v-for="(option, i) in options" :key="i">
            <input type="radio" class="flight-type-options" :value="option.option" name="flight-options"
              :id="option.option" :checked="option.option == 'oneWay'">
            <div class="radioInput"></div>
            <div class="title">
              <span>{{ globalStore.language == 'ar' ? option.arName : (globalStore.language ==
                'en' ? option.enName : '') }}</span>
            </div>
          </label>
        </div>
        <div class="inputs h-fit flex gap-3 ">
          <div class="input from-to-input flex items-center gap-3">
            <div class="from flex-auto">
              <div class="current flex items-center gap-2 justify-between">
                <span>{{ globalStore.language == 'ar' ? 'من' : (globalStore.language == 'en' ? 'From' : '')
                  }}</span>
                <div class="icon">
                  <Icon name="ic:outline-flight-takeoff" />
                </div>
              </div>
            </div>
            <div class="icon flex items-center justify-center">
              <Icon name="material-symbols:sync-alt" />
            </div>
            <div class="to flex-auto">
              <div class="current flex items-center gap-2 justify-between">
                <span>{{ globalStore.language == 'ar' ? 'الى اين' : (globalStore.language == 'en' ? 'To' : '')
                  }}</span>
                <div class="icon">
                  <Icon name="ic:outline-flight-land" />
                </div>
              </div>
            </div>
          </div>
          <div class="input departure flex-1 ">
            <div class="current">
              <span>{{ globalStore.language == 'ar' ? 'المغادرة' : (globalStore.language == 'en' ? 'Departure' : '')
                }}</span>
              <div class="icon">
                <Icon name="material-symbols:calendar-month" />
              </div>
            </div>
          </div>
          <div class="input passangers-class flex items-center gap-4">
            <div class="passangers flex-auto">
              <div class="current">
                <span> 1 {{ globalStore.language == 'ar' ? 'عدد المسافرين' : (globalStore.language == 'en' ?
                  'Passanger'
                  : '') }}</span>
                <div class="icon">
                  <Icon name="material-symbols:family-restroom" />
                </div>
              </div>
            </div>
            <div class="class flex-auto">
              <div class="current">
                <span>{{ globalStore.language == 'ar' ? 'درجة' : (globalStore.language == 'en' ?
                  'Class'
                  : '') }}</span>
                <div class="icon">
                  <Icon name="material-symbols:hotel-class" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="submitButton">
          <button>Search</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>

const globalStore = useMyGlobalStore()

const filters = ref([
  {
    enName: 'flight',
    arName: 'رحلات الطيران',
    icon: 'ic:sharp-flight-takeoff',
    filter: 'flight',
    active: true
  },
  {
    enName: 'Hotel',
    arName: 'الحجوزات الفندقية',
    icon: 'ic:baseline-bed',
    filter: 'hotel',
    active: false
  },
  {
    enName: 'Package',
    arName: 'عروض متكاملة',
    icon: 'ic:twotone-local-offer',
    filter: 'packagte',
    active: false
  },
  {
    enName: 'Visa',
    arName: 'تأشيرة',
    icon: 'ic:twotone-airplane-ticket',
    filter: 'visa',
    active: false
  },
])

const options = ref([
  {
    arName: 'ذهاب فقط',
    enName: 'One way',
    option: 'oneWay',
  },
  {
    arName: 'ذهاب و عودة',
    enName: 'Round trip',
    option: 'roundTrip',
  },
  {
    arName: 'وجهات متعددة',
    enName: 'Multiple destinations',
    option: 'multipleDestinations',
  },
  {
    arName: 'عودة مفتوحة',
    enName: 'Open return',
    option: 'openReturn',
  },
])

const setActive = (i) => {
  filters.value.forEach((filter) => {
    filter.active = false
    filters.value[i].active = true
  })
}

onMounted(() => {
  const tl = useGsap.timeline()
  tl.to('.searchForm', {
    y: 0,
    opacity: 1,
    duration: 0,
    stagger: .2
  }, 2)
})

</script>

<style scoped lang="scss">
.searchForm {
  margin-top: 30px;
  border-radius: 17px;
  overflow: hidden;
  transform: translateY(5%);
  transition: 1s;
  opacity: 0;

  .filters {
    display: flex;
    width: fit-content;
    border-top-right-radius: 17px;
    border-top-left-radius: 17px;
    overflow: auto;
    max-width: 100%;

    .filter {
      display: flex;
      align-items: center;
      background-color: $bg-color;
      padding: 20px 40px;
      gap: 10px;
      font-size: 20px;
      cursor: pointer;
      user-select: none;
      color: rgba(255, 255, 255, 0.719);
      transition: .2s ease-out;

      &.active {
        background-color: rgb(240, 240, 240);
        color: $bg-color;
      }

      .icon {
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  form {
    background-color: rgb(240, 240, 240);

    .content {
      .options {
        color: black;
        padding: 8px 16px;
        padding-top: 16px;
        border-bottom: 1px solid lightgray;
        flex-wrap: wrap;

        .option {
          user-select: none;
          cursor: pointer;

          span {
            color: rgba(0, 0, 0, 0.514);
            transition: .1s;
          }

          * {
            cursor: pointer;
          }

          input {
            display: none;
            appearance: none;

            &:checked+.radioInput::before {
              opacity: 1;
            }

            &:checked+.radioInput {
              border-color: $bg-color;
            }

            &:checked+.radioInput+.title span {
              color: $bg-color !important;
            }
          }

          .radioInput {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.514);
            position: relative;

            &::before {
              content: '';
              width: 80%;
              height: 80%;
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background-color: $bg-color;
              opacity: 0;
              transition: .1s;
            }
          }
        }
      }

      .inputs {
        padding: 0 16px;
        margin-top: 40px;
        width: 100%;

        @media (max-width: 991px) {
          flex-wrap: wrap;
        }

        .input {
          width: 100%;
          max-width: 100%;
          flex-wrap: wrap;
        }

        .current {
          border: 1px solid rgba(0, 0, 0, 0.404);
          padding: 12px 17px;
          color: rgba(0, 0, 0, 0.705);
          border-radius: 12px;
          cursor: pointer;
          transition: .2s;
          display: flex;
          align-items: center;
          justify-content: space-between;
          user-select: none;
          gap: 20px;

          &:hover {
            background-color: rgb(228, 228, 228);
          }

          span {
            font-size: 20px;
          }

          .icon {
            font-size: 30px;
          }
        }

        .input.from-to-input {
          >.icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid rgba(0, 0, 0, 0.404);
            color: rgba(0, 0, 0, 0.705);
            font-size: 30px;
          }


        }
      }
    }

    .submitButton {
      padding: 10px;
      padding-top: 30px;

      button {
        padding: 10px 100px;
        background-color: $main-color;
        border-radius: 10px;
      }
    }
  }
}
</style>