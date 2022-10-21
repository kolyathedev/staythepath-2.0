<template>
  <div>
    <Renderer
      ref="rendererC"
      antialias
      :orbit-ctrl="{ enableDamping: true }"
      resize="window"
    >
      <Camera :position="{ z: 10, x: 0, y: 0 }" />
      <Scene>
        <AmbientLight></AmbientLight>
        <GltfModel src="src/assets/models/arrow.glb" @load="onLoad" />
      </Scene>
    </Renderer>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Camera, Renderer, Scene, GltfModel, AmbientLight } from "troisjs";
import type { RendererPublicInterface } from "troisjs";

console.log(GltfModel);

const rendererC = ref();
const onLoad = () => {
  console.log("load3d");
};
onMounted(() => {
  const renderer = rendererC.value as RendererPublicInterface;
  console.log(renderer.canvas);

  renderer.onBeforeRender(() => {});
});
</script>
<style lang="scss"></style>
