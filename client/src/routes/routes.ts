/**
 * @desc Routes
 * @todo 最好的情况是，后端录入200+个国家地区，从而在前端渲染出来
 *
 * */
// import {countryRoutes} from "./countryRoutes";
// import {cityRoutes} from "./cityRoutes";
// import {aboutRoutes} from "./aboutRoutes";
// import {argueRoutes} from "./argueRoutes";
// import {ecologyRoutes} from "./ecologyRoutes";
// import {globalRoutes} from "./globalRoutes";
// import {heroRoutes} from "./heroRoutes";
// import {jobRoutes} from "./jobRoutes";
// import {lossRoutes} from "./lossRoutes";
// import {loveRoutes} from "./loveRoutes";
// import {rescueRoutes} from "./rescueRoutes";
// import {travelRoutes} from "./travelRoutes";
// import {whoRoutes} from "./whoRoutes";

export const routes: any[] = [
    {
        path: '',
        meta: {
            title: "Home"
        },
        component: () => import('../layout/Home.vue'),
        children: [
            {
                path: '/a',
                component: () => import('../components/A.vue'),
            },
            {
                path: 'b',
                component: () => import('../components/B.vue'),
            }
        ]
    },
    {
        path: '/country',
        component: () => import('../components/Country.vue'),
        children: [
            {
                path: 'china',
                component: () => import('../components/China.vue'),
            }
        ]
    }
    // ...countryRoutes
    // ...aboutRoutes,
    // ...argueRoutes,
    // ...cityRoutes,
    // // ...countryRoutes,
    // ...ecologyRoutes,
    // ...globalRoutes,
    // ...heroRoutes,
    // ...jobRoutes,
    // ...lossRoutes,
    // ...loveRoutes,
    // ...rescueRoutes,
    // ...travelRoutes,
    // ...whoRoutes,
    // {
    //     path: '/admin',
    //     meta: {
    //         title: 'System Administrator'
    //     }
    // }
];
