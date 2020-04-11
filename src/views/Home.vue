<template>
  <div>
    <Header>
      <h1>Our Blog</h1>
    </Header>

    <div class="container" v-if="articles">
      
      <Card 
      v-for="article in articles" 
      :key="article.id" 
      :data="article"
      />


    </div>

    <div class="text-center">
      <button 
      class="load-more" 
      type="button" 
      @click="getMoreArticles()" 
      v-if="articles && articles.length < totalCount"
      >
        Load More
      </button>
    </div>

  </div>
</template>

<script>
import Header from '../components/_header.vue';
import Card from '../components/_card.vue';
import axios from 'axios';

export default {
  name: 'Home',

  data() {
    return {
      articles: null,
      page: 1,
      totalCount: null,
    }
  },

  components: {
    Header, Card
  },

  mounted() {
    this.getArticles(this.page);
  },

  methods: {
    getArticles(pageNumber) {
      axios.get(`http://localhost:3000/blog?_page=${pageNumber}&_limit=6`).then((response) => {
        this.articles = this.articles ? this.articles.concat(response.data) : response.data;
        this.totalCount = response.headers['x-total-count'];
      });
    },

    getMoreArticles() {
      this.page++;
      this.getArticles(this.page);
    }

  },

};
</script>

<style scoped>
  .container {
    padding: 0 30px;
    max-width: 1024px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
  }
  
  .load-more {
    color: #fff;
    background-color: #990099;
    border-radius: 5px;
    border: none;
    padding: 10px 25px;
    font-size: 18px;
    line-height: 1;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .text-center {
    text-align: center;
  }

</style>
