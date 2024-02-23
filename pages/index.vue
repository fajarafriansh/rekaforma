<template>
  <LayoutsAppHeader />
  <div class="w-full bg-[#fa9f42] relative z-10">
    <div class="absolute w-full h-20 bg-white -bottom-4 -z-10"></div>
    <div class="container mx-auto">
      <div class="grid grid-cols-3 pt-20 gap-x-6 gap-y-8">
        <div class="">
          <h2 class="text-3xl font-normal leading-tight text-white ">Expertise</h2>
        </div>
        <div class="flex flex-col col-span-2 gap-y-10">
          <h2 class="text-5xl font-bold leading-tight tracking-tight text-white">Experience & expertise combine to create timeless detail.</h2>
          <div class="grid grid-cols-4 gap-x-6">
            <a v-for="nav in navigations" href="#" class="text-lg font-medium leading-loose text-white">{{ nav.title }}</a>
          </div>
        </div>
        <div class="h-64 bg-[url('/slider6.jpg')] bg-cover px-12 py-16 drop-shadow-xl">
          <div class="font-bold text-center text-white text-8xl drop-shadow-xl">35K</div>
          <div class="text-xl font-medium text-center text-white drop-shadow-xl">Clients Around the World</div>
        </div>
        <div class="h-64 bg-[url('/slider7.jpg')] bg-cover"></div>
        <div class="h-64 bg-[url('/p16.jpg')] bg-cover"></div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="w-full pt-20">
      <div class="grid grid-cols-3 gap-x-2 gap-y-10">
        <h2 class=" text-3xl font-normal leading-none text-[#fa9f42]">About us</h2>
        <h2 class="col-span-2 text-5xl font-bold text-[#272a30]">We create design that resonates & shape spaces that reflect your individual story.</h2>
        <div class="col-span-3 border-b border-[#707070]/20 pb-6">
          <ul class="grid grid-cols-2 gap-16">
            <li v-for="strong in strongs" class="flex items-center justify-between gap-8 border-t-[0.8px] border-[#707070]/20 pt-7 hover:border-[#fa9f42] transition-all">
              <div class="flex w-full gap-7">
                <div class="w-[40%] text-lg leading-6 tracking-tighter text-[#292B2C]">
                  <span class=" mr-3 text-[#fa9f42]">0{{ strong.id }}</span>
                  <span class="font-extrabold ">{{ strong.title }}</span>
                </div>
                <div class="w-[60%]">
                  <p class="text-lg leading-6 tracking-tighter ">{{ strong.desc }}</p>
                </div>
              </div>
              <Icon :name="strong.icon" size="72px" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <Testimonial />
  </div>
  <div class="bg-[#f4f4f4] bg-[url('/bg.jpg')] bg-cover bg-center py-20 c-2">
    <div class="flex flex-col items-center gap-4 mb-10">
      <h2 class="text-3xl font-normal leading-8">It's Showtime!</h2>
      <h2 class="text-5xl font-extrabold leading-tight text-[#292b2c] w-[50%] text-center tracking-tight">The works are the most tangible measure of our success.</h2>
    </div>
    <Carousel :autoplay="10000" :items-to-show="2" :wrap-around="true">
      <Slide v-for="galery in galeries" :key="galery.id">
        <div class="carousel__item">
          <div class="w-full h-[500px] drop-shadow-xl mb-9">
            <img :src="galery.image" alt="Image Placeholder" class="object-cover w-full h-full" />
          </div>
          <div class="carousel__text">{{ galery.title }}</div>
        </div>
      </Slide>
      <template #addons>
        <Pagination />
        <div class="absolute left-0 w-full top-1/2 isset-x-50">
          <div class="container flex items-center justify-between mx-auto">
            <Navigation />
          </div>
        </div>
      </template>
    </Carousel>
  </div>
  <div class="relative">
    <video id="background-video" class="absolute top-0 left-0 object-cover w-screen h-full -z-10" autoplay loop muted poster="/bg2.jpg">
      <!-- <source src="/video.mp4" type="video/mp4"> -->
    </video>
    <div class="w-screen h-full absolute top-0 left-0 -z-10 bg-[#292B2C] opacity-75"></div>
    <div class="container flex flex-col flex-wrap flex-grow flex-shrink py-20 mx-auto">
      <div class="mb-14">
        <div class="py-2 ">
          <h2 class="text-3xl font-normal leading-8 text-white">News and Events</h2>
        </div>
      </div>
      <div class="grid grid-cols-3 mb-10 gap-x-6">
        <div class="">
          <div class="mb-6">
            <h2 class=" text-lg font-medium leading-6 text-[#fff9]">Featured Post</h2>
          </div>
          <div class="text-[42px] font-bold leading-tight text-white mb-20">{{ featured.title }}</div>
          <a :href="featured.slug" class="font-bold text-[#292B2C] text-lg py-4 px-11 bg-white hover:bg-[#fa9f42] hover:text-white transition-all">Read full article</a>
        </div>
        <div class="col-start-3">
          <div class="mb-6">
            <h2 class=" text-lg font-medium leading-6 text-[#fff9]">Latest Posts</h2>
          </div>
          <div v-for="post in posts" class=" pt-4 pb-5 border-b border-[#707070]/40">
            <h2 class="text-xl font-normal leading-8 text-white">
              <a class="bg-[length:0_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-gradient-to-b from-transparent from-95% via-[#fa9f42] via-95% to-[#fa9f42] transition-all" :href="post.slug">{{ post.title }}</a>
            </h2>
          </div>
        </div>
      </div>
      <div class="w-auto py-3">
        <div class="flex items-center justify-center">
          <a href="/blog" class="flex items-center justify-center gap-8 text-lg font-bold leading-8 text-white group">
            <span>View all insights from out blog</span>
            <span class=" px-6 flex items-center justify-center text-white border-[1px] border-[#ffffff33] group-hover:border-[#fa9f42] group-hover:bg-[#fa9f42] transition-all"><Icon name="material-symbols:arrow-right-alt-rounded" size="24px" /></span>
          </a>

        </div>
      </div>
    </div>
  </div>
  <div class=" py-6 bg-[#fa9f42] text-white text-xl leading-tight">
    <TextMarquee :speed="60" />
  </div>
  <div class="">
    <div class="container py-20 mx-auto">
      <div class="flex flex-col self-auto justify-between flex-grow flex-shrink basis-auto">
        <div class="mb-12">
          <Tabs>
            <Tab title="Partners">
              <img class="object-cover w-full h-auto" src="/clientslogo.jpg" alt="">
            </Tab>
            <Tab title="Clients">
              <img class="object-cover w-full h-auto" src="/clientslogo.jpg" alt="">
            </Tab>
            <Tab title="Awards">
              <img class="object-cover w-full h-auto" src="/clientslogo.jpg" alt="">
            </Tab>
          </Tabs>
        </div>
        <div class="flex">
          <a href="/blog" class="flex items-center gap-8 text-lg font-bold leading-8 group">
            <span>Explore in more details</span>
            <span class=" px-6 flex items-center justify-center border-[1px] border-[#707070]/20 text-[#fa9f42] group-hover:text-white group-hover:border-[#fa9f42] group-hover:bg-[#fa9f42] transition-all"><Icon name="uil:arrow-right" size="24px" /></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue'
  import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  import 'vue3-carousel/dist/carousel.css'

  definePageMeta({
    layout: 'homepage'
  })
  
  useHead({
    title: 'Rekaforma'
  })

  const strongs = reactive([
    { id: 1, title: 'People', desc: 'Our people diligently work to bring your fantastic dreams to reality.', icon:'uil:vector-square-alt'},
    { id: 2, title: 'Commitment', desc: 'Provide the best possible service & ensure client satisfaction.', icon:'uil:diamond'},
    { id: 3, title: 'Creativity', desc: 'Creativity can transform a space into an attractive and unique experience.', icon:'uil:ruler'},
    { id: 4, title: 'Mission', desc: 'We aim to provide our clients with high quality products, on time and within budget.', icon:'uil:pen'},
    { id: 5, title: 'Vision', desc: 'A strong, successful and lasting firms depend on well based partnership.', icon:'uil:file-check-alt'},
    { id: 6, title: 'Awards', desc: 'A list of prizes our practice and projects have won over the years.', icon:'uil:trophy'},
  ])

  const navigations = reactive([
    { id: 1, title: 'About us', slug: '/about' },
    { id: 2, title: 'Meet the team', slug: '/about' },
    { id: 3, title: 'Careers', slug: '/blog' },
    { id: 4, title: 'Services', slug: '/blog' },
    { id: 5, title: 'News & events', slug: '/blog' },
    { id: 6, title: 'Explore our work', slug: '/blog' },
    { id: 7, title: 'FAQs', slug: '/blog' },
    { id: 8, title: 'Contact us', slug: '/blog' },
    { id: 9, title: 'Support central', slug: '/blog' },
    { id: 10, title: 'FAQs', slug: '/blog' },
    { id: 11, title: 'Contact us', slug: '/blog' },
    { id: 12, title: 'Support central', slug: '/blog' },
  ])

  const featured = reactive({ id:1, title: '6 Unique Island Designs for the Modern Kitchen', slug: '/about' })

  const posts = reactive([
    { id:1, title: 'How to Find The Right Interior Designers & Decorators', slug: '/about'},
    { id:1, title: 'Field Architecture clads flowing Sonoma house in copper', slug: '/about'},
    { id:1, title: 'Everything Your Children Will Love In Their Dream Space', slug: '/about'},
  ])

  const galeries = reactive([
    { id:1, title: 'Union Street House by Prior Barraclough', image: '/p16.jpg', slug: '/about'},
    { id:1, title: 'Art Gallery of Library & Members Lounge', image: '/slider6.jpg', slug: '/about'},
    { id:1, title: 'Westgarth House by Michael McKeon', image: '/slider7.jpg', slug: '/about'},
    { id:1, title: 'Renders for a Small Residential Complex', image: '/p16.jpg', slug: '/about'},
    { id:1, title: '3D Render for a University Building', image: '/slider6.jpg', slug: '/about'},
  ])
</script>

<style>
.c-2 .carousel__slide--sliding {
  transition: 0.5s;
}
.c-2 .carousel__slide {
  opacity: 0.5;
}
.c-2 .carousel__slide--active {
  opacity: 1;
}
.c-2 .carousel__pagination {
  margin-top: 50px;
}
.c-2 .carousel__pagination-button::after {
  height: 5px;
  width: 70px;
}
.c-2 .carousel__slide {
  padding: 0 15px;
  align-items: start;
}

.c-2 .carousel__text {
  @apply hidden
}

.c-2 .carousel__slide--active > .carousel__item > .carousel__text {
  @apply block
}

.c-2 .carousel__prev, .carousel__next {
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
}
</style>

