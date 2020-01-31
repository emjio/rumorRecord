<template>
    <footer>
        <p class="copyright">
         Copyright © 2019 emjio All Rights Reserved.
        </p>
    </footer>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Footer extends Vue {

}
</script>
<style lang="scss" scoped>
footer{
        background: #2e3033;
        .copyright{
            font-size: 12px;
            color: #999;
            text-align: center;
        }
}
</style>