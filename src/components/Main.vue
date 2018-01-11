<template>
    <body>
        <div class="main__container">
            <div class="main__container-left">
                test
            </div>
            <div class="main__container-right">
                test
            </div>
        </div>
        <div class="main-title">
            Welcome.
        </div>
    </body>
</template>
<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Expanded:500');

    body {
        background: #fff;
        background-image:
            linear-gradient(
            to right,
                #fff 50%,
                #ccc 50%
            );
    }

    .main__container {
        display: flex;

        &-left {
            width: 50%;
        }

        &-right {
            width: 50%;
        }
    }

    .main-title {
        left: 0;
        line-height: 200px;
        margin-top: -100px;
        position: absolute;
        text-align: center;
        top: 50%;
        width: 100%;
        font-size: 5rem;
        font-family: 'Encode Sans Semi Expanded', sans-serif;
    }
</style>
