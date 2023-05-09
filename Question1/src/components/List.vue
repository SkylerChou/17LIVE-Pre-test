<template>
  <div
    class="lists__wrap"
    :class="{ 'lists__wrap--rank': typeMode === 3 }"
    v-if="data.length"
  >
    <div class="list" v-if="typeMode === 1">
      <div class="list__item" v-for="(item, index) in data" :key="index">
        <div class="list__item__field">
          <span class="field__txt">Student: {{ item.name }}</span>
        </div>
        <div class="list__item__field">
          <span class="field__txt">Year: {{ item.year }}, </span>
          <span class="field__txt">Room: {{ item.class }}</span>
        </div>
      </div>
    </div>

    <div class="list" v-else-if="typeMode === 2">
      <div class="list__item" v-for="(item, index) in data" :key="index">
        <div class="list__item__field">
          <span class="field__txt">Title: {{ item.title }}</span>
        </div>
        <div class="list__item__field">
          <span class="field__txt"
            >Category: {{ item.category }} | {{ item.rating }} likes</span
          >
        </div>
      </div>
    </div>

    <div class="list" v-else-if="typeMode === 3">
      <h3 class="list__rankTitle">Top 3 Winners</h3>
      <div class="list__item" v-for="(item, index) in data" :key="index">
        <div class="list__item__field">
          <span class="field__txt">{{ item.rank }} {{ item.winner }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      keysArr: Object.keys(this.data[0]),
      type1: ['name', 'year', 'class'],
      type2: ['title', 'category', 'rating'],
      type3: ['winner', 'rank'],
      /** type1 為 1，type2 為 2，type3 為 3 */
      typeMode: -1,
    };
  },
  mounted() {
    /** 判斷完全符合格式的資料 */
    const type = JSON.stringify(this.keysArr);
    switch (type) {
      case JSON.stringify(this.type1):
        this.typeMode = 1;
        break;
      case JSON.stringify(this.type2):
        this.typeMode = 2;
        break;
      case JSON.stringify(this.type3):
        this.typeMode = 3;
        break;
      default:
        break;
    }
  },
};
</script>

<style scoped>
.lists__wrap {
  background-color: #efefef;
  padding: 20px;
  margin-bottom: 20px;
}
.list {
  list-style-type: none;
}
.list__item {
  padding: 20px;
  background-color: #fff;
  text-align: left;
  font-size: 24px;
  line-height: 1.8;
  border-radius: 10px;
}
.list__item:not(:last-child) {
  margin-bottom: 10px;
}
.lists__wrap--rank {
  background-color: #222;
}
.list__rankTitle {
  font-size: 36px;
  font-weight: 600;
  text-align: left;
  color: #fff;
}
</style>
