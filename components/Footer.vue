<template>
  <footer class="footer-wrap">
    <div
      class=" grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center md:justify-items-stretch mb-4"
    >
      <div>
        <a href="https://twitter.com/Ittisafur" target="_blank">
          <fa :icon="['fab', 'twitter']" class="mr-6 h-3.5" />
        </a>
        <a href="https://github.com/ittisafur" target="_blank">
          <fa :icon="['fab', 'github']" class="mr-6 h-3.5" />
        </a>
        <a href="https://www.linkedin.com/in/ittisafur/" target="_blank">
          <fa :icon="['fab', 'linkedin']" class="mr-6 h-3.5" />
        </a>
        <a href="https://www.facebook.com/ittisafur95/" target="_blank">
          <fa :icon="['fab', 'facebook']" class="mr-6 h-3.5" />
        </a>
      </div>
      <div class="text-sm font-bold text-center md:text-right">
        {{ currentYear }} &copy; All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
