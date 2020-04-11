<template>
		
	<div class="blog-card">

		<div class="card-image">
			<div class="ratio-content">
				<img :src="data.image" alt="artical title">
			</div>
		</div>

		<div class="card-content">

			<h2 class="card-title">
			{{ data.title }}
			</h2>

			<p class="card-summary">
			{{ data.description }}
			</p>

			<router-link :to="`/article/${data.id}`" class="read-more">
			View More
			</router-link>

		</div>
	</div>


</template>


<style scoped>
  .blog-card{
    box-sizing: border-box;
    padding: 30px 10px 0;
    width: 33%;
    float: left;
  }
  .card-image{
    position: relative;
    }
    .card-image:before{
      content: '';
      display: block;
      padding-top: 66.5%;
    }
    .card-image .ratio-content{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      border-radius: 5px;
    }
    .card-image img{
      width: 100%;
      min-height: 100%;
    }

  .card-title{
    color: #990099;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 7px;
  }
  .card-summary{
    margin-top: 0;
    font-weight: 300;
    color: #333;
  }
  .read-more{
    color: #333;
    font-size: 14px;
    font-weight: 400;
    font-style: italic;
  }

  @media(max-width: 900px){
	.blog-card {
	width: 50%;
	}
  }
  @media(max-width: 600px){
	.blog-card {
	width: 100%;
	}
  }
</style>


<script>
export default {
  name: 'Card',
  props: {
    data: {
    required: true
    }
  }
};
</script>