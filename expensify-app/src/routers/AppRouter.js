import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard';
import AddExpensePage from '../components/Add';
import EditExpensePage from '../components/Edit';
import HelpExpensePage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;