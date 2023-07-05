<template>
    <div class="section" data-component="content-menu">
        <div class="container">
            <ul class="menu row">
                <li class="menu__item col lvl1" v-for="category in categories" :key="category.id">
                    <a  class="menu__link ">{{ category.name }}</a>
                </li>
            </ul>
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
