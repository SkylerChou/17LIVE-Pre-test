<template>
  <div class="home">
    <h1>題目一</h1>
    <h2>Type 1</h2>
    <List :data="type1"/>
    <h2>Type 2</h2>
    <List :data="type2"/>
    <h2>Type 3</h2>
    <List :data="type3"/>
  </div>
</template>

<script>
import List from '@/components/List.vue';

export default {
  name: 'Home',
  components: {
    List,
  },
  data() {
    return {
      type1: [
        {
          name: 'Anna',
          year: 10,
          class: 'A',
        },
        {
          name: 'Mark',
          year: 10,
          class: 'M',
        },
      ],
      type2: [
        {
          title: 'Javascript Info',
          category: 'book',
          rating: 10,
        },
        {
          title: 'Fantasy',
          category: 'movie',
          rating: 5,
        },
      ],
      type3: [
        {
          winner: 'Amy',
          rank: 1,
        },
        {
          winner: 'Bob',
          rank: 2,
        },
        {
          winner: 'Jack',
          rank: 2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.home{
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
}
h1{
  text-align: center;
}
h2{
  text-align: left;
}
</style>
