<template>
    <div class="container">
        <h1>Корзина</h1>
        <div data-app="true" class="v-application v-application--is-ltr theme--light" id="app">
            <div class="v-application--wrap">
                <div class="cart__items">
                    <div class="cart__header cart-item cart-item--header hidden-xs-down">
                        <div class="row">
                            <div class="cart-item__col cart-item__col--product col">
                                Название товара
                            </div>
                            <div class="cart-item__col cart-item__col--price col">
                                Цена
                            </div>
                            <div class="cart-item__col cart-item__col--amount col">
                                Количество
                            </div>
                            <div class="cart-item__col cart-item__col--sum col">
                                Сумма
                            </div>
                        </div>
                    </div>
                    <ul class="cart__section cart__list">
                        <li class="cart__item" style="position: relative;" v-for="product in products" :key="product.id">
                            <div class="cart-item">
                                <div class="cart-item__picture align-self-xs-top">
                                    <a :href="'/menu/product/' + product.slug">
                                        <img :src="'https://sushistore.ru/' + product.small_image" :alt="product.name" class="cart-item__img"> 
                                        <div style="margin-top: -20px; display: flex; justify-content: flex-end;"></div>
                                    </a>
                                </div>
                                <div class="cart-item__body">
                                    <div class="row justify-lg-between">
                                        <div class="cart-item__col cart-item__col--product col-xs-12">
                                            <div class="cart-item__title h5">
                                                <a :href="'/menu/product/' + product.slug" class="link-inherit">{{ product.name }}</a>
                                            </div>
                                            <div class="cart-item__info product-info">
                                                <span class="product-info__portion">{{ product.short_description }}</span> 
                                                <ul class="product-info__features" v-html="product.features"></ul>
                                            </div>
                                        </div>
                                        <div data-title="Цена" class="cart-item__col cart-item__col--price col align-self-xs-center">
                                            <div class="cart-item__price text-lg">{{ product.price }} ₽</div>
                                        </div>
                                        <div class="cart-item__col cart-item__col--amount col align-self-xs-bottom align-self-md-center">
                                            <div data-component="amount-form" class="cart-item__amount-form amount-form">
                                                <button type="button" class="amount-form__control icon-minus" @click="minusQuantity(product)"></button> 
                                                    <input type="text" class="amount-form__input form__input" v-model="product.quantity" disabled> 
                                                <button type="button" class="amount-form__control icon-plus" @click="plusQuantity(product)"></button>
                                            </div>
                                        </div>
                                        <div data-title="Сумма" class="cart-item__col cart-item__col--sum col align-self-xs-center">
                                            <div class="cart-item__sum text-xl">{{ parseInt((product.price).replace(/\s/g, ''), 10) * product.quantity }} ₽</div>
                                        </div>
                                        <div class="cart-item__col cart-item__col--delete col align-self-xs-center" @click="deleteProduct(product)">
                                            <div title="Удалить из корзины" class="cart-item__delete icon-close"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style="width: 100%; display: flex; justify-content: flex-end; margin-bottom: 20px;" @click="deleteAllProducts()">
                    <div class="button button--white">Очистить корзину</div>
                </div>

                <div class="cart__section">
                    <h2 class="cart__section-title">Укажите контакты</h2>
                    <div class="cart__form form">
                        <fieldset class="form__fieldset">
                            <div class="form__group is-required">
                                <div data-element="floated-field" class="form__field">
                                    <label for="phone" class="form__label form__label--float"></label>
                                    <input type="text" id="phone" placeholder="Имя" data-mask="name" v-model="name" autocomplete="disabled" readonly="readonly" onfocus="this.removeAttribute('readonly')" class="form__input" inputmode="text">
                                </div>
                            </div>
                            <div class="v-dialog__container">
                            </div>
                        </fieldset>
                        <fieldset class="form__fieldset">
                            <div class="form__group is-required">
                                <div data-element="floated-field" class="form__field">
                                    <label for="phone" class="form__label form__label--float"></label>
                                    <input type="text" id="phone" placeholder="Телефон" v-model="phone" data-mask="phone" autocomplete="disabled" readonly="readonly" onfocus="this.removeAttribute('readonly')" class="form__input" inputmode="text">
                                </div>
                            </div>
                            <div class="v-dialog__container">
                            </div>
                        </fieldset>
                    </div>
                </div>
                <div class="cart__unit">
                    <div class="cart__section">
                        <h2 class="cart__section-title">Способ доставки</h2>
                        <div class="options row row--sm">
                            <div class="options__item col">
                                <div class="option">
                                    <input type="radio" name="delivery" id="delivery-770" v-model="delivery" class="option__input" value="770" selected="selected"> 
                                    <label for="delivery-770" class="option__label">
                                        <span class="option__text">Доставка</span>
                                    </label>
                                </div>
                            </div>
                            <div class="options__item col">
                                <div class="option">
                                    <input type="radio" name="delivery" id="delivery-769" class="option__input" value="769" disabled> 
                                    <label for="delivery-769" class="option__label">
                                        <span class="option__text">Самовывоз</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="cart__unit">
                    <div class="cart__section">
                        <h2 class="cart__section-title">Адрес доставки</h2>
                        <textarea type="text" placeholder="Введите город, улицу и номер дома" v-model="address" class="form__input" style="color: rgb(255, 255, 255);"></textarea>
                    </div>
                </div>

                <div class="cart__unit">Сумма к оплате с учётом доставки: {{ calculateSum() }} ₽</div>

                <button class="form__button button button--primary" @click="generatePayment()">Перейти к оплате</button>


            </div>
        </div>
    </div>
</template>

<script>
import { v4 } from 'uuid'

export default {
    data() {
        return {
            products: [],
            delivery: true,

            name: '',
            phone: '',
            address: ''
        }
    },
    async mounted() {
        if(localStorage.getItem('cart')) {
            this.products = JSON.parse(localStorage.getItem('cart'))
        }
    },
    
    methods: {

        minusQuantity(product) {
            if(product.quantity > 1) {
                product.quantity--
                localStorage.setItem('cart', JSON.stringify(this.products))
                this.$nuxt.$emit('updateCart')
            }
        },

        plusQuantity(product) {
            product.quantity++
            localStorage.setItem('cart', JSON.stringify(this.products))
            this.$nuxt.$emit('updateCart')
        },

        deleteProduct(product) {
            this.products = this.products.filter(item => item.id !== product.id)
            localStorage.setItem('cart', JSON.stringify(this.products))
            this.$nuxt.$emit('updateCart')
        },

        deleteAllProducts() {
            this.products = []
            localStorage.setItem('cart', JSON.stringify(this.products))
            this.$nuxt.$emit('updateCart')
        },

        async generatePayment() {

            if(!this.phone || !this.name || !this.address) {
                return
            }

            const uuid = v4()
            const { data: res } = await this.$axios.post('https://api-payment.ros-belet.ru/api/public/create-transaction', {
                uuid: uuid,
                amount: this.calculateSum(),
                referralCode: this.$cookies.get('ref') || null,
            })
            if(res.success) {
                window.location.href = 'https://payment.ros-belet.ru/?orderId=' + uuid
            }
        },

        calculateSum() {
            let sum = 0
            this.products.forEach(product => {
                sum += parseInt((product.price).replace(/\s/g, ''), 10) * product.quantity
            })

            if(sum < 500) {
                sum += 200
            } else if(sum > 500 && sum < 1000) {
                sum += 100
            } else {
                sum += 0
            }

            return sum
        }

    }
}
</script>