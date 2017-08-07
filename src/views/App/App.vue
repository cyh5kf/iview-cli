<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <Menu :active-name="setActive" theme="dark" width="auto" @on-select="routeTo">
                <div class="layout-logo-left">
                    <h3>后台管理</h3>
                </div>
    
                <Menu-item name="home">
                    <Icon type="ios-navigate" :size="iconSize"></Icon>
                    <span class="layout-text">home</span>
                </Menu-item>
    
                <Menu-item name="profile">
                    <Icon type="ios-keypad" :size="iconSize"></Icon>
                    <span class="layout-text">profile</span>
                </Menu-item>
    
                <Menu-item name="posts">
                    <Icon type="ios-analytics" :size="iconSize"></Icon>
                    <span class="layout-text">posts</span>
                </Menu-item>
    
            </Menu>
            </Col>
            <Col :span="spanRight">
            <div class="layout-header">
                <i-button type="text" @click="toggleClick">
                    <Icon type="navicon" size="32"></Icon>
                </i-button>
                <i-button type="text" @click="logOutClick" class="logOut">
                    <Icon type="power" size="20"></Icon>
                    <span>Logout</span>
                </i-button>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <Breadcrumb-item>首页</Breadcrumb-item>
                    <Breadcrumb-item>{{this.$route.path.replace('/main/','')}}</Breadcrumb-item>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">
                    <router-view></router-view>
                </div>
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
        },
        setActive() {
            return this.$route.path.replace('/main/','');
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
        },
        routeTo(e) {
            // console.log(e);
            this.$router.push(e);
        },
        logOutClick() {
            this.$Modal.confirm({
                title: 'Log out ?',
                content: 'Are you sure you want to log out of the system?',
                onOk: () => {
                    this.$router.push('/login');
                },
                onCancel: () => {
                }
            });
        }
    }
};
</script>
<style lang="less"  scoped>
.layout {
    min-width: 1000px;
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

.layout-content {
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.logOut {
    font-size: 16px;
    margin-right: 15px;
}

.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    color: #fff;
    text-align: center;
}

.layout-ceiling-main a {
    color: #9ba7b5;
}

.layout-hide-text .layout-text {
    display: none;
}

.layout-hide-text {
    .layout-logo-left {
        h3 {
            display: none;
        }
    }
}

.ivu-col {
    transition: width .2s ease-in-out;
}
</style>


