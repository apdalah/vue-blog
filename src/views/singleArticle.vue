<template>
  <div>
    <Header>
      <router-link to="/" type="button" class="home-router">Home</router-link>
      <h1 v-if="article">{{article.title}}</h1>
    </Header>
      
    <div class="article-content">
      <div class="article-image">
        <div class="ratio-content">
          <img :src="article.image" alt="article.title">
        </div>
      </div>
      <h2 class="article-title">{{ article.title }}</h2>
      <p class="article-description">{{ article.description }}</p>
    </div>


  </div>
</template>

<script>
import Header from '../components/_header.vue';
import axios from 'axios';

export default {
  name: 'singleArticle',

  data() {
    return {
      article: null,
    }
  },

  components: {
    Header
  },

  mounted() {
    axios.get('http://localhost:3000/blog/'+ this.$route.params.id).then((response) => {
      this.article = response.data;
    })
  },

};
</script>

<style scoped>

  .article-content {
    max-width: 1024px;
    margin: auto;
    margin-top: 50px;
  }
  
  .article-image {
    position: relative;
  }

  .article-image:before {
    content: '';
    display: block;
    padding-top: 30%;
  }
  
  .ratio-content {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
  }

  .ratio-content img{
    width: 100%;
    max-height: 100%;
  }

  .article-title {
    color: #990099;
  }

  .article-description {
    color: #9e9c9c;
  }

</style>
