<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  data: () => ({
    currentTesti: 0,
    
    testimonials: [
      { id: 1, user: 'Steve Nickey', message: 'We are stoked with the place, really enjoying it! Copping plenty of compliments on the design and the layout.', profile: '/1-1.jpg' },
      { id: 2, user: 'Kim Feenan', message: 'KTS Interior provided us with amazing tips & ideas for every room in our home, including window treatments.', profile: '/2-1.jpg' },
      { id: 3, user: 'Malia Wasson', message: 'I am really impressed with KTS Architecture.. they have very creative and beautiful design. Thankyou !!', profile: '/3-1.jpg' },
      { id: 4, user: 'Deb Wascher', message: 'Very good and committed people. What I like the most is that they Worked for us very passionately.', profile: '/4-1.jpg' },
    ]

  }),
  methods: {
    slideTo(val) {
      this.currentTesti = val
    },
  },
}
</script>

<template>
  <div class="w-full py-20">
    <div class="grid grid-cols-3 gap-x-6 gap-y-12">
      <div>
        <h2 class=" text-3xl leading-8 font-normal1 text-[#fa9f42]">Testimonials</h2>
      </div>
      <div class="relative col-span-2">
        <Carousel id="testimoni" class="slider" :items-to-show="1" :wrap-around="true" :transition="500" v-model="currentTesti">
          <Slide v-for="testimoni in testimonials" :key="testimoni.id">
            <div class="carousel__item">
              <p class="mb-10 text-4xl font-extrabold leading-tight text-left w-[80%] text-[#292b2c]">{{ testimoni.message }}</p>
            </div>
          </Slide>
        </Carousel>
        <Carousel
          id="testi__user"
          :items-to-show="4"
          :wrap-around="false"
          v-model="currentTesti"
          ref="carousel"
        >
          <Slide v-for="testimoni in testimonials" :key="testimoni.id">
            <div class="carousel__item" @click="slideTo(testimoni.id - 1)">
              <div class="relative group">
                <div class="flex items-center gap-3 pt-4">
                  <img :src="testimoni.profile" alt="" class="h-8 rounded-full ">
                  <p class="text-sm text-left">{{ testimoni.user }}</p>
                </div>
                <span class="absolute top-0 left-0 h-[1px] w-full bg-[#707070] opacity-20"></span>
                <span :class="{testi__active: testimoni.id == currentTesti+1 }" class="absolute top-0 left-0 h-[1px] w-0 group-hover:w-full bg-[#fa9f42] transition-all"></span>
              </div>
            </div>
          </Slide>
        </Carousel>
        <img class="absolute top-0 right-0 object-cover h-24" src="/shape-quote.png" alt="">
      </div>
      <a href="/" class="relative w-full group">
        <img src="/1.jpg" alt="object-cover h-full">
        <div class="absolute top-0 left-0 px-10 py-8 flex flex-col h-full w-[70%] justify-between">
          <div>
            <h2 class="text-[#292B2C99] text-base font-medium leading-6 tracking-tighter mb-2">Explore Careers</h2>
            <p class="text-[#292B2C] text-xl font-bold leading-7">Become part of our team!</p>
          </div>
          <div class="px-6 w-20 flex items-center justify-center bg-white text-[#fa9f42] group-hover:text-white group-hover:bg-[#fa9f42] transition-all shadow"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></div>
        </div>
      </a>
      <a href="/" class="relative w-full group">
        <img src="/2.jpg" alt="object-cover h-full">
        <div class="absolute top-0 left-0 px-10 py-8 flex flex-col h-full w-[70%] justify-between">
          <div>
            <h2 class="text-[#292B2C99] text-base font-medium leading-6 tracking-tighter mb-2">Portofolio</h2>
            <p class="text-[#292B2C] text-xl font-bold leading-7">See a selection of our works.</p>
          </div>
          <div class="px-6 w-20 flex items-center justify-center bg-white text-[#fa9f42] group-hover:text-white group-hover:bg-[#fa9f42] transition-all shadow"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></div>
        </div>
      </a>
      <a href="/" class="relative w-full group">
        <img src="/3.jpg" alt="object-cover h-full">
        <div class="absolute top-0 left-0 px-10 py-8 flex flex-col h-full w-[70%] justify-between">
          <div>
            <h2 class="text-[#292B2C99] text-base font-medium leading-6 tracking-tighter mb-2">Services</h2>
            <p class="text-[#292B2C] text-xl font-bold leading-7">The services that we offering.</p>
          </div>
          <div class="px-6 w-20 flex items-center justify-center bg-white text-[#fa9f42] group-hover:text-white group-hover:bg-[#fa9f42] transition-all shadow"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></div>
        </div>
      </a>
      <div class="col-span-3">
        <p class="text-center">When you participate in ESOP, you become an employee owner of the firm. <a href="/" class="hover:text-[#fa9f42] text-[#292b2c] transition-all"><strong>Find out more</strong></a></p>
      </div>
    </div>
  </div>
</template>

<style>
#testi__user .carousel__item {
  cursor: pointer;
  width: 100%;
  /* padding: 0 24px; */
}

#testi__user .carousel__track li {
  padding: 0 12px;
}

#testi__user .carousel__track li:last-child {
  /* padding-right: 0; */
}

#testi__user .carousel__viewport {
  margin: 0 -12px;
}

#testi__user .testi__active {
  @apply w-full
}
</style>