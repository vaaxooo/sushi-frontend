<template>
    <div class="container">
        <div class="section section--transition product" id="bx_117848907_364" itemscope="" itemtype="http://schema.org/Product">
            <img :src="'https://sushistore.ru/' + product.big_image" :alt="product.name" class="product__img" itemprop="image">
            <div class="product__container container">
                <div class="product__body">
                    <div class="product__section">
                        <h1 class="product__title" itemprop="name">{{ product.name }}</h1>
                        <div class="product__description" itemprop="description">{{ product.description }}</div>
                        <div class="product__info product-info">
                            <span class="product-info__portion">{{ product.short_description }}</span>
                            <ul class="product-info__features" v-html="product.features"></ul>
                        </div>
                        <div class="product__price product-price" itemprop="offers" itemscope="" itemtype="http://schema.org/Offer">
                            <span class="product-price__value text-2xl">{{ product.price }} ₽</span>
                        </div>
                        <div class="product__footer">
                            <button class="product__button button button--white button--lg" data-id="364" id="addBasketBtn">
                            <i class="button__icon icon-cart"></i>
                            <span class="button__text">В корзину</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product: [],
        }
    },
    async mounted() {
        await this.fetchProduct()
    },
    methods: {
        async fetchProduct() {
            const { data: res } = await this.$axios.get(`/products/${this.$route.params.slug}`)
            if(res.success) {
                this.product = res.data
            }
        }
    }
}
</script>