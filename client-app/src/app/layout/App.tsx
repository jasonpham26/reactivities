import React, { useEffect, Fragment, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './LoadingComponent';
import ActivityStore from '../store/activityStore';
import { observer } from 'mobx-react-lite';

const App = () => {
    const activityStore = useContext(ActivityStore);

    useEffect(() => {
        activityStore.loadActivities();
    }, [activityStore]); // Second parameters to ensure this function does not get stuck in a loop - dependencies array

    if (activityStore.loadingInitial)
        return <LoadingComponent content="Loading activities..." />;

    return (
        <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
                <ActivityDashboard />
            </Container>
        </Fragment>
    );
};

export default observer(App);
