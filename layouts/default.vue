<template>
    <div class="content">
        <Layout-Header :categories="categories" />
        <!-- <Layout-HeaderMobile /> -->
        <main class="main mt-5">

            <!-- <Categories :categories="categories" /> -->

            <Nuxt />

            <section class="section mt-5">
                <div class="container">
                    <h1 class="c-advantages__title">Заказать суши с доставкой на дом</h1>
                    <p class="c-advantages__text">
                        СушиСтор - это сеть из более, чем 70-и суши-баров, службы доставки суши, роллов, сетов, wok (лапши и риса). Что отличает СушиСтор от остальных?
                    </p>
                    <div class="c-advantages__row">
                        <div class="c-advantages__col">
                            <ul class="c-advantages__list">
                                <li>Качество продуктов. Доставка продуктов в наши суши-бары, происходит ежедневно, этим обусловлена исключительная свежесть наших суши и роллов.
                                </li>
                                <li>Качество приготовления. Генеральный директор СушиСтор, когда-то сам работал шеф-поваром, поэтому все сотрудники СушиStore - настоящие профессионалы и фанаты своего дела. Секрет вкуса наших блюд, кроется в основательной разработке рецептуры, строгому следованию технологии приготовления и свежайшим продуктам, на чем основана японская кухня.
                                </li>
                                <li>Доступность и удобство. Многие суши-бары находятся в прикассовых зонах супермаркетов, поэтому пока вы делаете покупки в магазине, мы приготовим ваш заказ. Так же вы можете сделать заказ к удобному для вас времени.
                                </li>
                                <li>Так же вы можете сделать заказ по телефону, через сайт или мобильное приложение и самостоятельно забрать его в удобное для вас время.
                                </li>
                                <li>Быстрая доставка.
                                </li>
                                <li>Профессиональные операторы примут и обработают ваш заказ, проинформируют о текущих акциях, порекомендуют и подробно расскажут, как происходит доставка роллов.</li>
                            </ul>
                        </div>
                        <div class="c-advantages__col">
                            <ul class="c-advantages__list">
                                <li>Среднее время приготовления заказа – от 15 минут.
                                </li>
                                <li>Доставка суши в среднем занимает около 60-90 минут, в зависимости от удаленности адреса от ближайшего суши-бара и загруженности конкретного суши бара и дорожной ситуации.
                                </li>
                                <li>Заказ можно оплатить, как наличными, так и кредитной картой курьеру.
                                </li>
                                <li>Минимальная сумма заказа нет
                                </li>
                                <li>Мы честны со своими покупателями, поэтому не включаем расходы на доставку в стоимость суши, доставка оплачивается отдельно: Стоимость услуг доставки:<br> 
                                    до 500 рублей = 200 рублей<br>
                                    от 500 до 999 рублей  = 100 рублей<br>
                                    от 1 000 рублей доставка бесплатная!<br>
                                </li>
                                <li>В Instagram @sushistore.ru  проводятся различные привлекательные акции анонсируются прмокода с скидками на роллы и сеты.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Layout-Footer :categories="categories" />
    </div>
</template>


<script>
export default {
    data() {
        return {
            categories: []
        }
    },
    async mounted() {
        await this.fetchCategories()
        if(this.$route.query.city) {
            this.$cookies.set('city', this.$route.query.city)
        }

        if(this.$cookies.get('ref')) {
            this.$cookies.set('ref', this.$route.query.ref)
        }
    },
    methods: {
        async fetchCategories() {
            const { data: res } = await this.$axios.get('/categories')
            if(res.success) {
                this.categories = res.data
            }
        }
    }
}

</script>