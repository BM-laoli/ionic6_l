# 说明

> 这个工程最主要的作用就是，演示一个ionic 项目 ，构建一个ionic + react的App, Ionic 和RN类似，它们的定位不一样，RN如果说说一级市场的恶话，Ionic就是一个二级市场的恶蛟蛟者，从 []() 给出的数据我们也能够窥见一二

这个工程Demo 实现了那些东西？

1. router管理
2. Mob状态管理
3. 路由控制
4. 开发规范
5. http （直接使用axios 封装 就完全够用了，这里我不详细的做了）

**一定要注意的事情，由于Ionic的存web view ，所以你应该了解其性能，在你决定使用它之前**
**还有一点，它的工程全部都是Web的工程，绝大多熟的情况下，你可以直接用它开发 +Vue + react + Angular 都很OKO**

## router 管理

> Ionic的router管理说实话 非常的迷幻,

目前实现所有的都洗都在代码里面写好了，主要坑就是两个

1. 如果希望实现back 效果 必须使路由连续 /a/b 才有 /a  + /b 不行的

2. render 参数必须加要不然拿不到porps ，当然了也可以使用 useHistory 来解决

3. menu 侧边 一定不要使用 page 路由哦链接🔗，可以使用modal ，Ionic 提供了很多 modal的非常漂亮

## Mobx状态管理

> 直接按照官方文档集成就好了，比较的easy  

```tsx
// defined

export class HomeStore  {
  count = 0;

  constructor() {
    makeAutoObservable(this)
  }

  fetchCount = () => {
    this.count = this.count + 1
  };

}


export class AppStore {
  home: HomeStore;

  about: AboutStore;

  constructor() {
    this.home = new HomeStore();
    this.about = new AboutStore();
  }
};


const appStore = new AppStore();

export const createStore = () => appStore;
export const RootContext = createContext<AppStore>(appStore);
export const useStore = <T extends keyof AppStore>(key: T): AppStore[T] => {
  const root = useContext(RootContext);

  return root[key];
};

// provider
<React.StrictMode>
    <RootContext.Provider value={appStore}>
      <App />
    </RootContext.Provider>
  </React.StrictMode>

// used
const Tab1:React.FC = () => {
  // ......
    const { count, fetchCount } = useLocalObservable(() => appStore.home);

}
observer(Tab1) 

```

## 开发规范

> 请把 逻辑 和UI 分开，在构建的时候一定要这样做！

## 疑难杂症

1. Ionic_6 android 的编译cli 需要 jdk11 请升级一下
2. 如果遇到es6 等一些库的兼容性问题，请重启项目
试一下，因为ionic上有cache 会有些问题，识别不到你的 li b

## 总结

> 此 demo 仅做 Ionic6-react 学习使用，至于选择什么样的 ' 跨端’ 框架还是得看你需要的场景，没有最好的，只有最合适自己的，**拒接踩一捧一，合适自己的才是最好的**
