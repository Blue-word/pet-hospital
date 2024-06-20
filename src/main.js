import { createApp } from "vue";
import Vant from "vant";
import { Popup } from "vant";
import { Search } from "vant";
import { Col, Row } from "vant";
import { Swipe, SwipeItem } from "vant";
import { Divider } from "vant";
import { Grid, GridItem } from "vant";
import { Tabbar, TabbarItem } from "vant";

import App from "./App.vue";

import router from "./router";

const app = createApp(App);
app.use(router).mount("#app");

// 全量引入组件
app.use(Vant);
// 引入组件
// app.use(Popup);
// app.use(Search);
// app.use(Col);
// app.use(Row);
// app.use(Swipe);
// app.use(SwipeItem);
// app.use(Divider);
// app.use(Grid);
// app.use(GridItem);
// app.use(Tabbar);
// app.use(TabbarItem);
