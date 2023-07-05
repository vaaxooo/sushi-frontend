<template>
    <div class="container">
        <h1>{{ category.name }}</h1>
        <div class="catalog__list row">
            <div class="catalog__item col col-xl-3" v-for="product in products" :key="product.id">
                <div class="product-card " data-component="product">
                    <a :href="'/menu/product/' + product.slug" class="product-card__picture" tabindex="0">
                        <img :src="'https://sushistore.ru/' + product.small_image" :alt="product.name" class="product-card__img lozad" data-loaded="true">
                    </a>
                    <div class="product-card__body">
                        <h5 class="product-card__title">
                            <a :href="'/menu/product/' + product.slug" class="product-card__title-link link-inherit" tabindex="0">{{ product.name }}</a>
                        </h5>
                        <div class="product-card__info product-info">
                            <span class="product-info__portion">{{ product.short_description }}</span>
                            <ul class="product-info__features" v-html="product.features"></ul>
                        </div>
                        <div class="product-card__price product-price">
                            <span class="product-price__value text-xl">{{ product.price }} ₽</span>
                        </div>
                        <div class="product-card__footer">
                            <button addings_name="" class="product-card__button product-card__button--cart button button--white basket125730" @click="addCart(product)" v-if="products_in_cart.findIndex(item => item.id === product.id) === -1">
                                <i class="button__icon icon-cart"></i> <span class="button__text">В корзину</span>
                            </button>
                            <button addings_name="" class="product-card__button button button--primary more125730"  @click="addCart(product)" v-else>
                                <span class="button__text">Добавить еще</span>
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
            products: [],
            category: [],
            products_in_cart: []
        }
    },
    async mounted() {
        await this.fetchProducts()
        if(localStorage.getItem('cart')) {
            this.products_in_cart = JSON.parse(localStorage.getItem('cart'))
        }

        for(let product of this.products) {
            product.isAddedToCart = this.checkProductInCart(product)
        }
    },
    methods: {
        async fetchProducts() {
            const slug = this.$route.params.slug
            const { data: res } = await this.$axios.get('/categories/' + slug)
            if(res.success) {
                this.products = res.data.products
                this.category = res.data.category
            }
        },


        checkProductInCart(product) {
            if(this.products_in_cart) {
                let index = this.products_in_cart.findIndex(item => item.slug === product.slug)
                if(index !== -1) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        },

        async addCart(product) {
            if(localStorage.getItem('cart')) {
                let cart = JSON.parse(localStorage.getItem('cart'))
                let index = cart.findIndex(item => item.id === product.id)
                if(index !== -1) {
                    cart[index].quantity++
                } else {
                    cart.push({
                        id: product.id,
                        name: product.name,
                        slug: product.slug,
                        price: product.price,
                        small_image: product.small_image,
                        short_description: product.short_description,
                        features: product.features,
                        quantity: 1
                    })
                }
                localStorage.setItem('cart', JSON.stringify(cart))
            } else {
                let cart = []
                cart.push({
                    id: product.id,
                    name: product.name,
                    slug: product.slug,
                    price: product.price,
                    small_image: product.small_image,
                    short_description: product.short_description,
                    features: product.features,
                    quantity: 1
                })
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            this.products_in_cart = JSON.parse(localStorage.getItem('cart'))
            product.isAddedToCart = true
            this.$root.$emit('updateCart')
        }
    }
}
</script>