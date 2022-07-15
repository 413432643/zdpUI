<template>
    <div :class="zClass" ref="col" :style='getColGutterStyle'>
        <slot>
        </slot>
    </div>
</template>

<script>
export default {
    name: "ZCol",
};
</script>

<script setup >
import { computed, inject } from 'vue';


const props = defineProps({
    span: {
        type: [Number, String],
        default: 24
    },
    offault: {
        type: [Number, String],
        default: 0
    },
    xs: {
        type: [Number, String],
        default: 0
    },
    sm: {
        type: [Number, String],
        default: 0
    },
    md: {
        type: [Number, String],
        default: 0
    },
    lg: {
        type: [Number, String],
        default: 0
    },
    xl: {
        type: [Number, String],
        default: 0
    },
    push: {
        type: [Number, String],
        default: 0
    },
    pull: {
        type: [Number, String],
        default: 0
    },

})
const zClass = computed(() => {
    return [
        "z-col",
        `z-col-${props.span}`,
        props.offault != 0 ? `z-col-offault-${props.offault}` : '',
        props.push != 0 ? `z-col-push-${props.push}` : '',
        props.pull != 0 ? `z-col-pull-${props.pull}` : '',
        props.xs != 0 ? `z-col-xs-${props.xs}` : '',
        props.sm != 0 ? `z-col-sm-${props.sm}` : '',
        props.md != 0 ? `z-col-md-${props.md}` : '',
        props.lg != 0 ? `z-col-lg-${props.lg}` : '',
        props.xl != 0 ? `z-col-xl-${props.xl}` : '',
    ]
});
const getColGutterStyle = computed(() => {
    const gutter = inject('gutter')
    if (gutter == 0) {
        return
    }
    const value = gutter / 2 + 'px'
    return {
        paddingLeft: value,
        paddingRight: value
    }
});


</script>

<style lang="scss" scoped>
.z-col {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 4px;

}
[class*=z-col-push],[class*=z-col-pull]{
    position: relative;
}

.z-col::after{
    content: '';
    clear: both;
    display: block;
}

@for $i from 0 through 24 {
    .z-col-#{$i} {
        width: calc(100%/24*$i);
    }

    .z-col-offault-#{$i} {
        margin-left: calc(100%/24*$i);
    }
    .z-col-push-#{$i} {
        left: calc(100%/24*$i);
    }
    .z-col-pull-#{$i} {
        right: calc(100%/24*$i);
    }

    @media only screen and(max-width:767px) {
        .z-col-xs-#{$i} {
            width: calc(100%/24*$i);
        }
    }

    @media only screen and(min-width:768px) {
        .z-col-sm-#{$i} {
            width: calc(100%/24*$i);
        }
    }

    @media only screen and(min-width:992px) {
        .z-col-md-#{$i} {
            width: calc(100%/24*$i);
        }
    }

    @media only screen and(min-width:1200px) {
        .z-col-lg-#{$i} {
            width: calc(100%/24*$i);
        }
    }

    @media only screen and(min-width:1920px) {
        .z-col-xl-#{$i} {
            width: calc(100%/24*$i);
        }
    }
}
</style>