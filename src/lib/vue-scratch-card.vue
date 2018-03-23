<template>
  <div class="card" v-on:touchmove="dragStart($event)">
    <canvas class="card-box" ref="card" :style="bg_img" :width="c_width" :height="c_height">
    </canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card_canvas: '',
      scratch_status: true,
      bg_img: ''
    }
  },
  name:'ScratchCard',
  props: {
    c_width: {
      default: 320 //宽度
    },
    c_height: {
      default: 200 //高度
    },
    cricle_size: {
      default: 10 //刮圆的大小
    },
    percent: {
      default: 60 //刮去百分比
    },
    c_color: {
      default: "#77eaa4" //遮盖层颜色
    },
    imgUrl: {
      default: '' //默认路径
    }
  },
  mounted: function() {
    this.setBgImg();
    this.getCanvasDom();
  },
  methods: {
    getCanvasDom() {
      this.card_canvas = this.$refs.card.getContext("2d");
      this.card_canvas.fillStyle = this.c_color;
      this.card_canvas.fillRect(0, 0, this.c_width, this.c_height);
    },
    dragStart($event) {
      if (!this.scratch_status) {
        return;
      }
      let x = $event.changedTouches[0].pageX - $event.currentTarget.offsetLeft;
      let y = $event.changedTouches[0].pageY - $event.currentTarget.offsetTop;
      this.card_canvas.beginPath();
      this.card_canvas.globalCompositeOperation = 'destination-out';
      this.card_canvas.arc(x - 10, y - 10, this.cricle_size, 0, Math.PI * 2);
      this.card_canvas.fill();
      if (this.percent <= this.getPercent()) {
        this.card_canvas.beginPath();
        this.card_canvas.globalCompositeOperation = 'destination-out'
        this.card_canvas.fillRect(0, 0, this.c_width, this.c_height);
        this.scratch_status = false;
        this.SuccessFunc();
      }
    },
    getPercent() {
      var _thisCtx = this.card_canvas.getImageData(0, 0, this.c_width, this.c_height),
        　　_data = _thisCtx.data,
        　　_pixArr = 0,
        　　_dataLen = _data.length;　　
      for (var i = 0; i < _dataLen; i += 4) {　　　　 if (_data[i + 3] < 128) {　　　　 _pixArr++;　　　　 }　　 }
      return parseFloat((_pixArr / (_dataLen / 4)) * 100);
    },
    setBgImg() {
      this.bg_img = {
        background: 'url(' + this.imgUrl + ') no-repeat',
        'background-size': '100% 100%'
      }
    },
    SuccessFunc() {
      this.$emit('SuccessFunc');
    }
  }
}

</script>
<style scoped>
.card {
  display: inline-block;
}

</style>
