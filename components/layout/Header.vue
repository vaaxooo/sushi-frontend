<template>
    <div class="header" data-component="header">
        <div class="header__main">
            <div class="header__main-container container">
                <div class="header__row row align-xs-center">
                    <div class="header__col header__col--company col">
                        <a href="/" class="header__logo">
                            <img src="/assets/images/logo-sushistore.svg" alt="СушиСтор logo" class="header__logo-img">
                        </a>
                        <a href="#" class="header__location" data-element="modal-trigger" v-if="$cookies.get('city')">{{ $cookies.get('city') }}</a>
                    </div>
                    <div class="header__col header__col--contacts col hidden-md-down">
                        <a href="tel:+74952300000" class="header__phone link-hidden h5">+7 (495) 230-00-00</a>                    
                    </div>
                    <div class="header__col header__col--nav col hidden-md-down">
                        <ul class="header__nav nav">
                            <li class="nav__item">
                                <a href="https://sushistore.ru/actions/" class="nav__link ">Акции</a>
                            </li>
                            <li class="nav__item">
                                <a href="https://sushistore.ru/delivery/" class="nav__link ">Доставка</a>
                            </li>
                            <li class="nav__item">
                                <a href="https://sushistore.ru/contacts/" class="nav__link ">Контакты</a>
                            </li>
                            <li class="nav__item">
                                <a href="https://sushistore.ru/SushiStore%202023.pdf" class="nav__link " target="_blank">Франшиза</a>
                            </li>
                            <li class="nav__item">
                                <a href="https://sushistore.ru/cashback/" class="nav__link ">Кэшбэк</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__col header__col--menu col hidden-xl-up">
                        <ul class="header__menu icon-menu row">
                            <li class="icon-menu__item  col">
                                <a href="https://sushistore.ru/personal/cart/" class="icon-menu__link icon-cart" title="Корзина" id="cartmobile"><span>4</span></a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__col header__col--session col hidden-lg-down">
                        <div class="header__cart" data-element="cart-mini-toggle">
                            <a href="/cart" class="header__cart-button button button--primary">
                                <i class="button__icon icon-cart"></i>
                                <span class="button__text"><span class="cart-mini__total-cnt">{{ cart.totalCnt || 0 }}</span> / <span class="cart-mini__total-sum">{{ cart.totalSum || 0 }} р.</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__menu ">
            <div class="container">
                <ul class="menu header__menu-list row">
                    <li class="menu__item col" v-for="category in categories" :key="category.id">
                        <a :href="'/menu/' + category.slug" class="menu__link ">{{ category.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            cart: {
                totalCnt: 0,
                totalSum: 0
            }
        }
    },

    mounted() {
        this.refreshCart()
        this.$root.$on('updateCart', () => {
            this.refreshCart()
        })
    },

    methods: {
        refreshCart() {
            const products = localStorage.getItem('cart')
            if (products) {
                const productsParsed = JSON.parse(products)
                this.cart.totalCnt = productsParsed.length
                this.cart.totalSum = productsParsed.reduce((acc, product) => {
                    const priceString = product.price;
                    const price = parseInt(priceString.replace(/\s/g, ''), 10);
                    return acc + +price * +product.quantity
                }, 0)
            }
        }
    }
}

</script>