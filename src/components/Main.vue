<template>
    <body>
        <div class="main__title">
            Welcome.
        </div>
        <div class="main__container-image">
        </div>
        <div class="main__container-hover">
        </div>
        <div class="main__container-hover--2">
        </div>
    </body>
</template>
<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Encode+Sans+Semi+Expanded:500');

    .main {
        &__title {
            left: 0;
            line-height: 200px;
            margin-top: -100px;
            position: absolute;
            text-align: center;
            top: 50%;
            width: 100%;
            font-size: 5rem;
            font-family: 'Encode Sans Semi Expanded', sans-serif;
            z-index: 20;
            pointer-events: none;
            color: #fff;
        }

        &__container-image {
            background-image: url("../../bg.jpg");
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            z-index: 2;
        }

        &__container-hover {
            position: absolute;
            width: 50%;
            height: 100%;
            // background-color: hotpink;
            opacity: .5;
            z-index: 12;
            cursor: pointer;
            background-color: black;
            transition-duration: 500ms;

            &:hover {
                opacity: 0;
                transition-duration: 500ms;
            }
        }

        &__container-hover--2 {
            position: absolute;
            width: 50%;
            height: 100%;
            background-color: black;
            opacity: .5;
            z-index: 12;
            right: 0;
            cursor: pointer;
            transition-duration: 500ms;

            &:hover {
                opacity: 0;
                transition-duration: 500ms;
            }
        }
    }
</style>
