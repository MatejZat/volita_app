<template>
    <div class="wave-wrapper">
        <i>
            <svg width="160" height="24" viewBox="0 0 160 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_370_4480)">
                    <path
                        d="M160 24H0C22.5933 23.772 44.7568 12.48 52.888 7.872C52.981 7.812 53.0739 7.752 53.1785 7.692C54.7118 6.72 56.3148 5.832 57.9759 5.028C60.636 3.744 63.4587 2.688 66.3976 1.872C67.141 1.668 67.8844 1.488 68.6279 1.308C69.7546 1.056 70.893 0.84 72.0546 0.648C72.4379 0.588 72.8329 0.528 73.2162 0.48C73.5995 0.432 73.9945 0.384 74.3894 0.336C76.3525 0.108 78.3389 0 80.3717 0C80.9293 0 81.4752 0.012 82.0212 0.024C82.5788 0.036 83.1247 0.072 83.6591 0.096C84.751 0.168 85.8313 0.264 86.9 0.396C87.957 0.528 89.0141 0.696 90.0595 0.888C90.5706 0.984 91.0934 1.092 91.6045 1.2C92.1156 1.308 92.6267 1.428 93.1378 1.56C93.161 1.56 93.1843 1.56 93.2075 1.572C94.1949 1.824 95.1822 2.112 96.1464 2.412C97.1337 2.724 98.0979 3.06 99.062 3.432C99.5383 3.612 100.015 3.804 100.479 4.008C100.944 4.2 101.408 4.404 101.873 4.62C102.338 4.824 102.791 5.04 103.244 5.268C103.604 5.448 103.964 5.628 104.312 5.82C104.998 6.18 105.672 6.552 106.322 6.948C106.833 7.248 107.333 7.56 107.832 7.884C107.902 7.92 107.983 7.968 108.053 8.004C116.265 12.636 137.86 23.556 160 24Z"
                        fill="white" fill-opacity="0.6"/>
                </g>
                <defs>
                    <filter id="filter0_b_370_4480" x="-14" y="-14" width="188" height="52" filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImage" stdDeviation="7"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_370_4480"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_370_4480" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </i>
    </div>
</template>

<style lang="scss" scoped>
.wave-wrapper {
    width: 160px;
    position: absolute;
    top: -23px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
}

i {
    color: red;
    background: red;
}
</style>