<script lang="ts">
  function goToFrontendMentor() {
    window.location.href = 'https://www.frontendmentor.io';
  }
</script>

<button class="bg-purple-600 py-4 px-10 text-preset-5 rounded-[1.8125rem] hover:bg-opacity-70 text-white w-fit" on:click={goToFrontendMentor}>
  <slot>
    What is it?
  </slot>
</button>
