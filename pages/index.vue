<template>
  <div>
    <main>
      <h1 class="font-mont text-4xl mb-2 font-bold">MD Ittisafur Rahman</h1>
      <div class="grid grid-col-1 md:grid-cols-6 gap-6">
        <div class="col-span-3">
          <h2 class="index-h2 my-3">Bio</h2>
          <blockquote class="px-2 quote">
            <p class="mb-2 text-lg">"Don't just take, give something back".</p>
            <cite>
              -
              <a
                href="https://www.linkedin.com/pulse/20141009214920-11705063-arnold-schwarzenegger-my-5-rules-for-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Arnold Schwarzenegger
              </a>
            </cite>
          </blockquote>
          <p class="tracking-wider">
            It's been a while i've been tinkering with programming. Started with
            HTML/CSS in 2013 slowly moved in WordPress in 2015. Made some small
            projects and did some small contract jobs.But, this is the time I
            want to really contribute to the society, to the community, using my
            academic knowledge, self taught knowledge and work experience. A
            dedicated person who's willing to get out of his comfort zone in
            order to finish the task and the responsibility that I was assigned.
          </p>
        </div>
        <div class="col-span-3">
          <h2 class="index-h2 text-center lg:text-left my-3">Skills</h2>
          <div class="flex flex-wrap justify-center lg:justify-start gap-10">
            <img
              class="w-12 h-14 inline-block"
              src="../static/img/vectors/html5.svg"
              alt="HTML 5"
            />
            <img
              class="w-12 h-14 inline-block"
              src="../static/img/vectors/css3.svg"
              alt="CSS 3"
            />
            <img
              class="w-12 h-14 inline-block"
              src="../static/img/vectors/sass.svg"
              alt="Sass"
            />
            <img
              class="w-12 h-14 inline-block"
              src="../static/img/vectors/js.svg"
              alt="Javascript"
            />
            <img
              class="w-12 h-14 inline-block"
              src="../static/img/vectors/php.svg"
              alt="PHP"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/wordpress.svg"
              alt="WordPress"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/laravel.svg"
              alt="Laravel"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/vue.svg"
              alt="Vue JS"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/ubuntu.svg"
              alt="Ubuntu"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/ps.svg"
              alt="Adobe Photoshop"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/ai.svg"
              alt="Adobe Illustrator"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/xd.svg"
              alt="Adobe XD"
            />
            <img
              class="inline-block w-12 h-14"
              src="../static/img/vectors/figma.svg"
              alt="Figma"
            />
          </div>
        </div>
      </div>
    </main>
    <section>
      <h3 class="my-10 text-3xl uppercase text-center">Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div class="bg-dark-darker px-10 py-14 text-center">
          <h4 class="mb-7 uppercase text-2xl font-bold">Web Development</h4>
          <p>
            Any Kind of Development or Maintanance. It may be a simple blog to
            an entire management system.
          </p>
        </div>

        <div class="bg-dark-darker px-10 py-14 text-center">
          <h4 class="mb-7 uppercase text-2xl font-bold">Web Optimization</h4>
          <p>
            Optimization is crucial for SEO. I do WordPress, Laravel or any kind
            of PHP based optimization.
          </p>
        </div>
        <div class="bg-dark-darker px-10 py-14 text-center">
          <h4 class="mb-7 uppercase text-2xl font-bold">Fast Delivery</h4>
          <p>
            Time is essential and when pressure comes to get out the MVP. You'll
            get it in shortest timeline.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-1 justify-items-center">
        <a
          href="#"
          class="
            hover:bg-yellow hover:text-dark
            transition
            duration-300
            mt-5
            py-2
            px-6
            hidden
          "
          >Visit Services</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import {
  auth,
  loginWithGoogle,
  onAuthStateChanged,
  logout
} from "../plugins/firebase";
export default {
  /* data() { */
  /*   return { */
  /*     appname: process.env.NAME */
  /*   }; */
  /* }, */
  mounted() {
    onAuthStateChanged(auth, user => {
      console.log(user);
    });
  },
  methods: {
    handleClick() {
      loginWithGoogle();
    },
    handleLogout() {
      logout();
    }
  },
  head: {
    title: "Ittisafur - Your Web Guy | Home Page",
    meta: [
      {
        name: "description",
        content: `Laravel, Vue, Tailwind and Wordpress developer`
      },
      {
        name: "keywords",
        content: `web design, website design, website builder, wordpress, wordpress developer, web developer, web designer, website creator, responsive web design, linux, linux adminstrator, database, upwork, fiverr, ecommerce`
      },
      {
        property: "og:title",
        content: `Ittisafur - Your Web Guy`
      },
      {
        property: "og:url",
        content: "https://www.ittisafur.com"
      },
      {
        property: "og:description",
        content: `Let's look around`
      },
      {
        property: "og:image",
        content:
          "https://res.cloudinary.com/techdiary-dev/image/fetch/c_scale,f_auto,q_auto,w_1200/https://user-images.githubusercontent.com/7611746/82744130-38b0fd80-9d96-11ea-8223-62d62a56566f.png"
      },
      {
        property: "og:image:width",
        content: "1200"
      },
      {
        property: "og:image:height",
        content: "630"
      }
    ]
  }
};
</script>
