<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <Menu active-name="1" theme="dark" width="auto">
                <div class="layout-logo-left"></div>
    
                <Menu-item name="1">
                    <router-link to="/main/home" class="a-link">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">home</span>
                    </router-link>
                </Menu-item>
    
                <Menu-item name="2">
                    <router-link to="/main/profile" class="a-link">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">profile</span>
                    </router-link>
                </Menu-item>
    
                <Menu-item name="3">
                    <router-link to="/main/posts" class="a-link">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">posts</span>
                    </router-link>
                </Menu-item>
    
            </Menu>
            </Col>
            <Col :span="spanRight">
            <div class="layout-header">
                <i-button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </i-button>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item href="#">首页</Breadcrumb-item>
                    <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                    <Breadcrumb-item>某应用</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <router-view></router-view>
                </div>
            </div>
            <div class="layout-copy">
                2011-2016 &copy; TalkingData
            </div>
            </Col>
        </Row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spanLeft: 5,
            spanRight: 19
        };
    },
    computed: {
        iconSize() {
            return this.spanLeft === 5 ? 14 : 24;
        }
    },
    methods: {
        toggleClick() {
            if (this.spanLeft === 5) {
                this.spanLeft = 2;
                this.spanRight = 22;
            } else {
                this.spanLeft = 5;
                this.spanRight = 19;
            }
        }
    }
};
</script>
<style lang="less"  scoped>
.layout {
    width: 100%;
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.ivu-row-flex {
    height: 100%;
}

.layout-breadcrumb {
    padding: 10px 15px 0;
}

.a-link {
    color: hsla(0,0%,100%,.7);
    position: relative;
    display: block;
    &:before {
        content: '';
        position: absolute;
        top: -10px;
        left: -20px;
        right: -20px;
        bottom: -10px;
    }
}

.ivu-menu-item-active , .ivu-menu-submenu-title-active {
    .a-link {
        color: #2d8cf0 !important;
        background: 0 0 !important;
    }
}

.ivu-menu-item:hover, .ivu-menu-submenu-title:hover {
    .a-link {
        color: #fff;
        background: #495060;
    }
}

.layout-content {
    height: 100%;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}

.layout-content-main {
    padding: 10px;
}

.layout-copy {
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}

.layout-menu-left {
    background: #464c5b;
}

.layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.ivu-col {
    transition: width .2s ease-in-out;
}
</style>


