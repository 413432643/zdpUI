<template>

    <!-- 图片预览 -->

    <!-- 浏览器遮罩 -->
    <div :class="{ 'mask': globalShade }">
        <div v-if="globalShade" class="previewPic">
            <i class="iconfont icon-close closeShade" @click="closeShade"></i>
            <img :src="windowURL.createObjectURL(showPic)" alt="">
        </div>
    </div>



    <input type="file" class="file-input" ref="inpRef" @change="inpChange" :multiple="multiple">

    <!-- 托拽 -->
    <div v-if="drag" :class="['area-box', { 'activeArea': activeArea }]" @click="fileChange" ref="areaRef">
        <i class="iconfont icon-upload"></i>
        <div>{{ activeArea ? '松开鼠标完成' : '将文件拖拽到此处或点击选择文件' }}</div>
    </div>


    <!-- 图墙 -->
    <div v-else-if="pic" class="file-pic">
        <div v-for="(item, index) in fileList" :key="index" @mouseenter="enterPic(index)" @mouseleave='leavePic(index)'>
            <div v-if="shadeIndex == index" class='file-pic-shade'>
                <i class="iconfont icon-search" @click="previewImg(item)"></i>
                <i class="iconfont icon-ashbin" @click="clearImg(index)"></i>
            </div>
            <img :src="windowURL.createObjectURL(item)" />

        </div>
        <div class="pic-box" @click="fileChange">
            <i class="iconfont icon-add-select"></i>
        </div>
    </div>


    <!-- 默认 -->
    <button v-else class="file-btn" @click="fileChange">
        <i class="iconfont icon-add-select"></i>
        {{ name }}
    </button>

    <!-- 文件显示 -->
    <div v-if="!pic && !picture">
        <div v-for="(item, index) in fileList" :key="index" class="fileList" @mouseenter="enterFile(index)"
            @mouseleave='leaveFile(index)'>
            {{ item.name }}
            <i :class="['iconfont', clearIndex == index ? 'icon-shanchu' : 'icon-wc']" @click="del(index)"></i>
        </div>
    </div>

    <!-- 图片列表 -->

    <div v-if="picture">
        <div v-for="(item, index) in fileList" :key="index" class="imgList" @mouseenter="enterFile(index)"
            @mouseleave='leaveFile(index)'>
            <img :src="windowURL.createObjectURL(item)" />
            <i :class="['iconfont', clearIndex == index ? 'icon-shanchu' : 'icon-wc']" @click="del(index)"></i>
        </div>
    </div>


</template>


<script>
export default {
    name: 'ZUpload',
};

</script>   

<script setup>
import { ref, computed, reactive, onMounted } from 'vue';
const emit = defineEmits(['update:files', 'change'])
const props = defineProps({
    multiple: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: '选择文件'
    },
    drag: {
        type: Boolean,
        default: false
    },
    pic: {
        type: Boolean,
        default: false
    },
    picture: {
        type: Boolean,
        default: false
    }
})
const windowURL = typeof window !== 'undefined' ? window.URL || window.webkitURL : '';

const fileList = reactive([])

const inpRef = ref(null)

const areaRef = ref(null)

const activeArea = ref(false)
// 删除照片
const clearIndex = ref(-1)
// 局部遮罩
const shadeIndex = ref(-1)
// 全局遮罩
const globalShade = ref(false)
// 滚动条位置
const pageLocation = ref('');

const showPic = ref('')

const fileChange = () => {
    inpRef.value.click()
}

const inpChange = (e) => {
    console.log(e)
    fileList.unshift(...e.target.files)
    emit('change', fileList)
}
const del = (index) => {
    fileList.splice(index, 1)
}
const enterFile = (index) => {
    clearIndex.value = index
}
const leaveFile = (index) => {
    clearIndex.value = -1
}
const enterPic = (index) => {
    shadeIndex.value = index
}
const leavePic = (index) => {
    shadeIndex.value = -1
}
// 打开遮罩记录高度
const previewImg = (item) => {
    showPic.value = item
    let scrollTop = window.scrollY;//滚动的高度；
    pageLocation.value = scrollTop;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollTop + 'px';
    globalShade.value = true
}

const clearImg = (index) => {
    fileList.splice(index, 1)
}
// 关闭遮罩
const closeShade = () => {
    document.body.style.position = 'static';
    window.scrollTo(0, pageLocation.value);
    globalShade.value = false
}


onMounted(() => {
    if (!props.drag) return
    let dropArea = areaRef.value
    dropArea.addEventListener('drop', (e) => {
        e.stopPropagation();
        e.preventDefault();//阻止默认事件
        fileList.unshift(...e.dataTransfer.files)
        emit('change', fileList)
        activeArea.value = false
    }, false)
    // 经过指定区域触发
    dropArea.addEventListener('dragleave', (e) => {
        e.stopPropagation();
        e.preventDefault();
        activeArea.value = false
    })
    // 进入指定区域触发
    dropArea.addEventListener('dragenter', (e) => {
        e.stopPropagation();
        e.preventDefault();
        activeArea.value = true
    })
    // 鼠标松开触发
    dropArea.addEventListener('dragover', (e) => {
        e.stopPropagation();
        e.preventDefault();
        activeArea.value = true
    })
})

</script>


<style lang="scss" scoped>
.file-input {
    display: none;
}

.file-btn {
    margin-bottom: 10px;
    border: 0;
    padding: 8px 15px;
    outline: none;
    background: #409EFF;
    line-height: 1;
    font-size: 14px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    color: #fff;

    &:hover,
    &:focus {
        opacity: .8;
    }
}

.pic-box,
.area-box {
    border: 1px dashed #cdd0d6;
    cursor: pointer;
    border-radius: 10px;
    color: #8c939d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 9;

    &:hover {
        border: 1px dashed #409EFF;
    }
}

.area-box {
    margin-bottom: 10px;
    width: 100%;
    height: 200px;

    i {
        font-size: 50px;
    }
}

.pic-box {
    margin: 10px;
    width: 100px;
    height: 100px;

    i {
        font-size: 30px;
    }
}


.activeArea {
    border: 1px dashed #409EFF;
}

.icon-wc {
    color: #67c23a;
}

.icon-shanchu {
    color: #8c939d;
}

.fileList {
    padding: 5px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background: #eeeeee;
    }
}

.file-pic {
    display: flex;
    flex-wrap: wrap;

    img,
    .file-pic-shade {
        width: 100px;
        height: 100px;
        margin: 10px;
        border-radius: 10px;
        object-fit: contain;
    }

    .file-pic-shade {
        position: absolute;
        background: rgba($color: #000, $alpha: .6);
        text-align: center;
        line-height: 100px;

        i {
            z-index: 99;
            font-size: 20px;
            color: rgba($color: #fff, $alpha: .9);
        }

        .icon-ashbin {
            padding-left: 5px;
        }
    }
}

.mask {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 99;
    display: flex;

    .previewPic {
        margin: auto;
        width: 50%;
        background: #fff;
        position: relative;
        display: flex;
        justify-content: center;

        img {
            padding: 30px;
            width: 200%;
            object-fit: cover;
        }

        .closeShade {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
}

.imgList {
    margin-bottom: 10px;
    border: 1px solid #eee;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;

    img {
        padding: 10px;
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
    i{
        padding-right: 10px;
    }

}
</style>