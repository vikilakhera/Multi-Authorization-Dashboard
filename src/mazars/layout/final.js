import '../final.css';
import Sidebar from './sidebar';
import {Switch, Route} from 'react-router-dom';
import {
    Dashboard,
    Queries,
    Proposal,
    Assignment,
    Schedule,
    Feedback
} from '../content/about';


function Final(props) {
    console.log(props);
    return(
        <>
            <div className="container">
                <div className="sidebar">
                <Sidebar {...props}/>
                </div>
                <div className="content">
                <Switch>
                    <Route path="/customer/dashboard"  exact component={Dashboard} />
                    <Route path="/customer/queries" exact component={Queries} />
                    <Route path="/customer/proposal" exact component={Proposal} />
                    <Route path="/customer/assignment" exact component={Assignment} />
                    <Route path="/customer/schedule" exact component={Schedule} />
                    <Route path="/customer/feedback" exact component={Feedback} />
                    <Route path="/admin/dashboard"  exact component={Dashboard} />
                    <Route path="/admin/queries" exact component={Queries} />
                    <Route path="/admin/proposal" exact component={Proposal} />
                    <Route path="/admin/assignment" exact component={Assignment} />
                    <Route path="/tl/dashboard"  exact component={Dashboard} />
                    <Route path="/tl/queries" exact component={Queries} />
                    <Route path="/tl/proposal" exact component={Proposal} />
                    <Route path="/tl/assignment" exact component={Assignment} />
                    <Route path="/tp/dashboard"  exact component={Dashboard} />
                    <Route path="/tp/queries" exact component={Queries} />
                    <Route path="/tp/proposal" exact component={Proposal} />
                    <Route path="/tp/assignment" exact component={Assignment} />
                </Switch>
                </div>
            </div>
        </>
    );
}

export default Final;