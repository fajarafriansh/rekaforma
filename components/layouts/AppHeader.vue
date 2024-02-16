<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  data: () => ({
    currentSlide: 0,
    galeries: [
      { id:1, title: 'Sky Building', image: '/slider1.jpg', description: 'In a complete gut renovation of a 120 year old 3-story Brooklyn brownstone', slug: '/', category: 'Featured Work'},
      { id:2, title: 'Wix Factory', image: '/slider2.jpg', description: 'In a complete gut renovation of a 120 year old 3-story Brooklyn brownstone', slug: '/', category: 'Interior Design'},
      { id:3, title: 'Park Flower', image: '/slider3.jpg', description: 'In a complete gut renovation of a 120 year old 3-story Brooklyn brownstone', slug: '/', category: 'Private House'},
    ],
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
}
</script>

<template>
  <div class="max-h[750px] h-[750px] w-full slider relative">
    <Carousel id="gallery" class="slider" :items-to-show="1" :wrap-around="true" :transition="500" v-model="currentSlide">
      <Slide v-for="slide in galeries" :key="slide.id">
        <div class="carousel__item">
          <img :src="slide.image" alt="Image Placeholder" class="object-cover w-full h-full" />
          <!-- <div class="absolute w-full bottom-20">
            <div class="container mx-auto">
              <p class="text-3xl font-bold leading-none text-[#292b2c] mb-3">{{ slide.category }}</p>
              <p class=" text-7xl font-bold leading-none text-[#fa9f42] mb-8">{{ slide.title }}</p>
              <p class=" text-lg font-medium text-[#707070] w-80 leading-snug mb-10">{{ slide.description }}</p>
              <a href="/" class="text-lg font-bold text-[#292b2c] mb-8 group hover:text-[#fa9f42] transition-all">Explore in more detail
                <span class=" px-6 text-[#fa9f42] border-[1px] border-[#ffffff33] group-hover:text-white group-hover:border-[#fa9f42] group-hover:bg-[#fa9f42] transition-all"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></span>
              </a>
              <div class=" w-[400px] h-2 bg-[#fa9f42]"></div>
            </div>
          </div> -->
        </div>
      </Slide>
    </Carousel>

    <div class="absolute bottom-0 w-full">
      <div class="container mx-auto">
        <div class="grid items-end grid-cols-5">
          <div class="col-span-5 -mb-10">
            <div v-for="slide in galeries">
              <div v-show="slide.id == currentSlide+1">
                <p class="text-3xl font-bold leading-none text-[#292b2c] mb-3">{{ slide.category }}</p>
                <p class=" text-7xl font-bold leading-none text-[#fa9f42] mb-8">{{ slide.title }}</p>
                <p class=" text-lg font-medium text-[#707070] w-80 leading-snug">{{ slide.description }}</p>
                
              </div>
            </div>
          </div>
          <div class="col-span-2 mb-20">
            <div v-for="slide in galeries">
              <div v-show="slide.id == currentSlide+1">
                <a href="/" class="text-lg font-bold text-[#292b2c] group hover:text-[#fa9f42] transition-all">Explore in more detail
                  <span class=" px-6 text-[#fa9f42] border-[1px] border-[#707070]/50 group-hover:text-white group-hover:border-[#fa9f42] group-hover:bg-[#fa9f42] transition-all ml-6"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></span>
                </a>
                <div class=" w-full mt-8 h-2 bg-[#fa9f42]"></div>
              </div>
            </div>
          </div>
          <Carousel
            id="thumbnails"
            class="col-span-3 col-end-6 thumb"
            :items-to-show="3"
            :wrap-around="false"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide v-for="slide in galeries" :key="slide.id">
              <div :class="{slide__active: slide.id == currentSlide+1}" class="carousel__item" @click="slideTo(slide.id - 1)">
                <img :src="slide.image" alt="Image Placeholder" class="object-cover h-24 w-44" />
              </div>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slider .carousel.slider,
.slider .carousel.slider .carousel__viewport,
.slider .carousel.slider .carousel__track,
.slider .carousel.slider .carousel__item {
  height: 100%;
}

.slider .carousel.slider .carousel__item {
  width: 100%;
}

.slider .carousel.slider {
  text-align: left;
}

/* .slider .carousel.thumb {
  position: absolute !important;
  bottom: 0px;
} */

#thumbnails .img {
  
}

#thumbnails .carousel__item {
  cursor: pointer;
  box-shadow: 0 2px 2px rgba(0,0,0,.055), 0 4px 4px rgba(0,0,0,.055), 0 8px 8px rgba(0,0,0,.055), 0 16px 16px rgba(0,0,0,.055), 0 32px 32px rgba(0,0,0,.055);
  @apply transition-all border border-transparent duration-500
}

#thumbnails .slide__active {
  @apply border-white;
  box-shadow: 0 15px 30px rgba(0,0,0,.35);
}

#thumbnails .carousel__track {
  justify-content: flex-end;
}

#thumbnails .carousel__slide {
  justify-content: flex-start;
}

#thumbnails li {
  width: auto !important;
  height: auto;
  margin: 80px 0;
}

#thumbnails ol {
  gap: 1.5rem;
  /* overflow: visible; */
  padding-right: 80px !important;
  /* margin-right: -80px !important; */
  /* padding-left: 80px !important; */
  /* margin-left: -80px !important; */
}

#thumbnails {
  margin-right: -80px !important;
}

</style>  