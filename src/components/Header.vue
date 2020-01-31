<template>
    <header>
        <h1><small>新型冠状病毒</small><br>物价和谣言记录 · 省市地图</h1>
        <nav>
            <ul>
                <router-link v-for="(item,index) in navList" :key="index" :to="{name:item.link}">{{item.name}}</router-link>
            </ul>
        </nav>
    </header>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Header extends Vue {
    private navList = [{name: '谣言', link: 'yaoyan'}, {name: '急需物资物价变化', link: 'itemPrice'}, {name: '日常用品价格变化', link: 'dayUseItemPrice'}];
}
</script>
<style lang="scss" scoped>

header {
    background-image: url(/images/feiyan.dd8c6eeb.png);
    padding: 1rem;
    background-position: 50%;
    background-size: 100%;
    color: #fff;
    nav{
        ul{
            a{
                display: inline-block;
                padding: 15px;
                color: #fff;
                &.router-link-exact-active{
                    color: #f60;
                }
            }
        }
    }
}
</style>