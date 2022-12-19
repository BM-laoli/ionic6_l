import {  Redirect, Route, RouteComponentProps } from 'react-router-dom';
import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const Stack1: React.FC = () => {
  return  (
    <IonPage>
      <IonHeader>
        <IonToolbar >
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          <IonTitle>Page One</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <h1>22</h1>
        <IonButton routerLink='/stack1'  >Tab Top Click</IonButton>

      </IonContent>
  </IonPage>
  )
}

const MainMenu = (props:any) => {
  return (
    <>
      <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu Content</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h2>This is the menu content.</h2>
            {/* <IonButton routerLink='/stack1'  >Tab top Click</IonButton> */}
            </IonContent>
        </IonMenu>  
        <IonPage id='main-content'>
          <IonHeader>
            {/* <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonTitle>Menu</IonTitle>
            </IonToolbar> */}
          </IonHeader>
          <IonContent className="ion-padding">
            {/* Tap the button in the toolbar to open the menu. */}
            <Main></Main>
          </IonContent>
        </IonPage>
    </>
  )
}

const Main = (props: any) => {
  return (
    <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/tabs" to="/tabs/tab1" />

          <Route exact path="/tabs/tab1">
            {/* an */}
            <Tab1 {...props} />
          </Route>
          <Route exact path="/tabs/tab2">
            <Tab2 />
          </Route>
          <Route path="/tabs/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tabs">
            <Redirect to="/tabs/tab1" />
          </Route>

          {/* 新增一个同级别的router */}
          <Route exact path="/tabs/tab1/view">
            <Stack1 />
          </Route>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>

    </IonTabs>
  );
}

// PageX
const PageX: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton />
      </IonButtons>
        <IonTitle>Page Tow</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <h1>22</h1>
      <IonButton onClick={(e) => {
        e.preventDefault();
         props.history.push('/stack1/2');
      }}  >CLIL</IonButton>  

    </IonContent>
    
  </IonPage>
  )
}

const PageX2: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
      <IonButtons slot="start">
        <IonBackButton />
      </IonButtons>
        <IonTitle>❤️</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <h1>22</h1>
    </IonContent>
  </IonPage>
  )
}
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/tabs" render={props => <MainMenu {...props} />} />
        {/* 单page覆盖必须用这种方式 不能采用潜逃的做法 */}
        <Route exact path="/stack1" render={ props => <PageX {...props} /> } />
        <Route  exact path="/stack1/2" render={ props => <PageX2 {...props} /> } />
        <Route exact path="/" render={() => <Redirect to="/tabs" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

