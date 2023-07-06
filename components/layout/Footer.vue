<template>
    <div class="footer bg-light">
        <div class="footer__main">
            <div class="container">
                <div class="footer__row row">
                    <div class="footer__col footer__col--company col-xs-12 col-md-4">
                        <a href="https://sushistore.ru/" class="footer__logo">
                            <img src="/assets/images/logo-sushistore.svg" alt="СушиСтор logo" class="footer__logo-img">
                        </a>
                        <div class="footer__copyright text-sm">2023 © «СушиСтор»</div>
                        <div class="footer__links">
                            <p><a href="https://sushistore.ru/cpfc.pdf" class="footer__links-item link-underline" target="_blank">Полное меню</a></p>
                            <p><a href="https://t.me/SushiStore_Help" class="footer__links-item link-underline" target="_blank">Служба контроля качества</a></p>
                        </div>
                        <div class="footer__contacts">
                            <a href="tel:+74952300000" class="footer__phone link-hidden h5">+7 (495) 230-00-00</a>
                            <a href="mailto:delivery@sushistore.ru" class="footer__email link-underline">delivery@sushistore.ru</a>
                        </div>
                        <ul class="footer__social social">
                            <li class="social__item">
                                <a href="https://vk.com/sushistore" class="social__link icon-vkontakte" title="Вконтакте" target="_blank"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="footer__col footer__col--content col-xs-12 col-md-8">
                        <div class="row footer__menu">
                            <div class="footer__menu-section col-xs-6">
                                <h5 class="footer__menu-title">Меню</h5>
                                <ul class="footer__menu-list">
                                    <li class="footer__menu-item" v-for="category in categories" :key="category.id">
                                        <a :href="'/menu/' + category.slug" class="footer__menu-link link-inherit ">{{ category.name }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer__menu-section col-xs-6">
                                <h5 class="footer__menu-title">Компания</h5>
                                <ul class="footer__menu-list">
                                    <li class="footer__menu-item">
                                        <a href="delivery" class="footer__menu-link link-inherit ">Доставка</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a href="contacts" class="footer__menu-link link-inherit ">Контакты</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a href="https://sushistore.ru/SushiStore%202023.pdf" class="footer__menu-link link-inherit " target="_blank">Франшиза</a>
                                    </li>
                                    <li class="footer__menu-item">
                                        <a href="cashback" class="footer__menu-link link-inherit ">Кэшбэк</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- <div class="footer__app">
                            <a href="https://play.google.com/store/apps/details?id=ru.sushistore.deliveryapp" class="footer__app-link">
                            <img src="/assets/images/-google-play-.svg" alt="" title="Google Play" class="footer__app-img" target="_blank">
                            </a>
                            <a href="https://apps.apple.com/us/app/%D1%81%D1%83%D1%88%D0%B8%D1%81%D1%82%D0%BE%D1%80/id1548722550?platform=iphone" class="footer__app-link" target="_blank">
                            <img src="/assets/images/-app-store.svg" alt="" title="App Store" class="footer__app-img">
                            </a>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>

        <div class="footer__bottom">
            <div class="container">
                <div class="footer__row row align-md-center">
                    <div class="footer__col footer__col--disclaimer col-xs-12 col-md-9">
                        <div class="footer__disclaimer">Обращаем Ваше внимание на то, что информация в т.ч. изображения размещенные на сайте, носят исключительно информационно-рекламный характер, и не является офертой или публичной офертой. Указанные на сайте цены не являются окончательной ценой и могут быть в любое время изменены.</div>
                    </div>

                    <div class="footer__col footer__col--madeby col-xs-12 col-md-3">
                        <div class="footer__madeby">
							Разработка сайта - <a href="https://www.hcube.ru" class="link-inherit" target="_blank">HCube</a>
                        </div>
                        <div class="footer__madeby">
                            Продвижение сайта - <a href="https://green-promo.ru/" class="link-inherit" target="_blank">Green Promo</a>
                        </div>
                    </div>
                </div>
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
}

</script>