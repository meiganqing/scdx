import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'home',
        //     meta: {
        //         title: '首页',
        //         tabBarShow: false,
        //         Login: true,
        //         ThenavShow: true,
        //     },
        //     component: Home
        // },
        {
            path: '/',
            name: 'index',
            meta: {
                title: '首页2',
                tabBarShow: false,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./views/index.vue'),
        },
        //登陆页面
        {
            path: '/Login',
            name: 'login',
            meta: {
                title: '实验预约',
                tabBarShow: false,
                Login: false,
                ThenavShow: false,

            },
            component: () =>
                import ('./views/Login.vue'),

        },
        //中心简介
        {
            path: '/teach',
            name: 'teach',
            meta: {
                title: '中心简介',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./views/Teach.vue')

        }, , {
            path: '/TheColumnTwo',
            name: 'TheColumnTwo',
            meta: {
                title: '实验制度-1-1-1',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./components/TheColumnTwo/TheColumnTwo.vue')
        },
        //建设概况详情
        {
            path: '/Teachdata',
            name: 'Teachdata',
            meta: {
                title: '建设概况详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Teachdata/Teachdata.vue")
        },
        //师资队伍列表
        {
            path: '/teacher',
            name: 'teacher',
            meta: {
                title: '师资队伍列表',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./views/teacher.vue")
        },
        //师资队伍详情
        {
            path: '/Teamdata',
            name: 'Teamdata',
            meta: {
                title: '师资队伍详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Teamdata/Teamdata.vue")
        },
        //通知公告详情
        {
            path: '/Tzdata',
            name: 'Tzdata',
            meta: {
                title: '通知公告详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Tzdata/Tzdata.vue")
        },
        //实验制度详情
        {
            path: '/Testerdata',
            name: 'Testerdata',
            meta: {
                title: '建设概况详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Testerdata/Testerdata.vue")
        },
        //互问互答详情
        {
            path: '/Downdata',
            name: 'Downdata',
            meta: {
                title: '建设概况详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Downdata/Downdata.vue")
        },
        //发表问题
        {
            path: '/addQuestion',
            name: 'addQuestion',
            meta: {
                title: '建设概况详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./views/addQuestion.vue")
        },
        //资料下载详情
        {
            path: '/Askdata',
            name: 'Askdata',
            meta: {
                title: '建设概况详情',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ("./components/Detail/Askdata/Askdata.vue")
        },


        // 虚拟教学
        {
            path: '/Virtal',
            name: 'virtal',
            meta: {
                title: '虚拟教学登陆页',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,

            },
            component: () =>
                import ('./views/Virtal.vue'),
        },
        {
            path: '/process',
            name: 'process',
            // redirect:"TheShiyan",//默认子路由
            meta: {
                title: '虚拟教学',
                tabBarShow: false,
                Login: false,
                ThenavShow: false,
            },
            component: () =>
                import ('./views/process.vue'),
            children: [{
                    path: '/TheShiyan',

                    name: 'TheShiyan',
                    meta: {
                        title: '实验介绍',
                    },
                    component: () =>
                        import ('./components/Main/TheShiyan.vue')
                },
                {
                    path: '/Thebagimg',
                    name: 'Thebagimg',
                    meta: {
                        title: '图片组件路由',
                    },
                    component: () =>
                        import ('./components/Main/Thebagimg.vue')
                },
                {
                    path: '/Thevideo',
                    name: 'Thevideo',
                    title: '视频组件路由',
                    meta: {
                        title: '视频组件路由',
                    },
                    component: () =>
                        import ('./components/Main/TheVideo.vue'),
                },

            ]

        },
        //实验制度
        {
            path: '/tester',
            name: 'tester',
            meta: {
                title: '实验制度',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./views/Tester.vue'),
            children: [{
                    path: '/TheColumn',
                    name: 'TheColumn',
                    meta: {
                        title: '实验制度-1',
                        tabBarShow: true,
                        Login: true,
                        ThenavShow: true,
                    },
                    component: () =>
                        import ('./components/TheColumn/TheColumn.vue')
                }

            ],
        },
        //资料下载
        {
            path: '/data',
            name: 'data',
            meta: {
                title: '资料下载',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./views/Data.vue'),
            children: [{
                path: '/TheColumn',
                name: 'TheColumn',
                meta: {
                    title: '资料下载-1',
                    tabBarShow: true,
                    Login: true,
                    ThenavShow: true,
                },
                component: () =>
                    import ('./components/TheColumn/TheColumn.vue')
            }, {
                path: '/TheColumnTwo',
                name: 'TheColumnTwo',
                meta: {
                    title: '资料下载-1-1-1',
                    tabBarShow: true,
                    Login: true,
                    ThenavShow: true,
                },
                component: () =>
                    import ('./components/TheColumnTwo/TheColumnTwo.vue')
            }]
        },
        //互问互答
        {
            path: '/theask',
            name: 'theask',
            meta: {
                title: '互问互答',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,
            },
            component: () =>
                import ('./views/Theask.vue'),
            children: [{
                path: '/TheColumn',
                name: 'TheColumn',
                meta: {
                    title: '互问互答-1',
                    tabBarShow: true,
                    Login: true,
                    ThenavShow: true,
                },
                component: () =>
                    import ('./components/TheColumn/TheColumn.vue')
            }, {
                path: '/TheColumnTwo',
                name: 'TheColumnTwo',
                meta: {
                    title: '互问互答-1-1-1',
                    tabBarShow: true,
                    Login: true,
                    ThenavShow: true,
                },
                component: () =>
                    import ('./components/TheColumnTwo/TheColumnTwo.vue')
            }],
        },
        //联系我们
        {
            path: '/TheContact',
            name: 'TheContact',
            meta: {
                title: '联系我们',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,

            },
            component: () =>
                import ('./views/TheContact.vue'),

        },

        //实验预约
        {
            path: '/Yuyue',
            name: 'Yuyue',
            meta: {
                title: '实验预约',
                tabBarShow: true,
                Login: true,
                ThenavShow: true,

            },
            component: () =>
                import ('./views/Yuyue.vue'),

        },



    ]
})