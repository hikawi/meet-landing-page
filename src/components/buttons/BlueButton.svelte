<script lang="ts">
function goToFrontendMentor() {
  window.location.href = 'https://www.frontendmentor.io';
}
</script>

<button class="py-4 px-10 text-preset-5 bg-cyan-600 rounded-[1.8125rem] hover:bg-opacity-70 text-white min-w-fit overflow-visible" on:click={goToFrontendMentor}>
  <slot>
    <span>
    Download
    </span>
    <span class="text-cyan-300">
      v1.3
    </span>
  </slot>
</button>
