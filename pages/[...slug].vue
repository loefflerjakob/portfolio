<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :story-name="story.name"
  />
</template>

<script setup>
let { slug } = useRoute().params;

// Render "home" story on root url (/)
if (slug === "") {
  slug = [`home`];
}

let story = null;

try {
  story = await useAsyncStoryblok(slug.join("/"), {
    version: "draft",
    resolve_links: "url",
  });
} catch (sbError) {
  const error = JSON.parse(sbError);

  throw createError({
    statusCode: error.status,
    statusMessage: error.response,
  });
}

</script>

<style>
  body {
    background-color: #EBEBEB;
  }

  .neuromorph-l {
    box-shadow:  8px 8px 20px #cccccc, -8px -8px 20px #fcfcfc;
  }

  .neuromorph-s {
    box-shadow:  2px 2px 5px #b6b6b6, -2px -2px 5px #ffffff;
  }

  .neuromorph-s:active {
    box-shadow: inset 2px 2px 5px #b6b6b6, inset -2px -2px 5px #ffffff;
    background-color: #EBEBEB;
  }

  .neuromorph-s:hover {
    cursor: pointer;
  }

  html {
	scroll-behavior: smooth;
}

.word-breaker {
  word-spacing: 50px;
  width: min-intrinsic;
  width: -webkit-min-content;
  width: -moz-min-content;
  width: min-content;
  display: table-caption;
  display: -ms-grid;
  -ms-grid-columns: min-content;
}
            
</style>