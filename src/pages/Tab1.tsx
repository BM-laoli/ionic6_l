import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonButtons, IonMenuButton } from '@ionic/react';
import { RouteComponentProps, } from 'react-router';
import { observer, useLocalObservable } from 'mobx-react';
import './Tab1.css';
import { appStore,  } from '../store';

const Tab1: React.FC<RouteComponentProps> = ({match,history}) => {
  
    const { count, fetchCount } = useLocalObservable(() => appStore.home);
    

    return (
      <IonPage>
        {/* header */}
        <IonHeader>
          <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/* content */}
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
          {/* <ExploreContainer name="Tab 1 page" /> */}
          <IonButton routerLink='/tabs/tab1/view' >Tab Inner Click</IonButton>
          <IonButton routerLink='/stack1'  >Tab top Click</IonButton>
          <h2>This is {count}</h2>
          <h2 onClick={() => {
            console.log(fetchCount);
            fetchCount()
          }} >点击我</h2>
        </IonContent>
      </IonPage>
    );
};

export default observer(Tab1) ;
