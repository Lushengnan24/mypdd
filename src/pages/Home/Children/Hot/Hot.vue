<template>
  <div class="hot">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../imgs/rowing/s1.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s2.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s3.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s4.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s5.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s6.png" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../imgs/rowing/s7.png" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default {
  name: "HomHot",
  mounted() {
    new Swiper(".swiper", {
      autoplay: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style lang="stylus" ref="stylesheet/stylus" scoped>
.hot {
  width: 100%;
  background: purple;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>