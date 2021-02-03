import React from 'react';
// import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../actions/ActionTypes';
import * as a from '../actions/index';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Header from './Header'
import NeighborList from './NeighborList';
import NeighborDetails from './NeighborDetails';
import NewNeighborForm from './NewNeighborForm';
import EditNeighborForm from './EditNeighborForm';
import DeleteConfirm from './DeleteConfirm';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
// import CardColumns from 'react-bootstrap/CardColumns';
// import Card from 'react-bootstrap/Card';
// import { Cards } from '../components/Cards/Cards';
// import { Card } from '../components/Cards/CardUI';
import MapContainer from './Loc';
// import { MemoryRouter, Switch, Route } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import { Navigation, Main } from './Navigation'
import { NavLink, Switch, Route } from 'react-router-dom'
import { Link } from 'react-scroll'


export class App extends React.Component {

  // functions here...
  handleChangingSelectedNeighbor = (id) => {
    console.log(id);
    const { dispatch } = this.props;
    const action = a.neighborDetails(id);
    dispatch(action);
  }

  returnHome = () => {
    const { dispatch } = this.props;
    const action = a.homeList();
    dispatch(action);
  }

  handleAddingNewNeighbor = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.add({ collection: 'neighbors', doc: id })
    const action = a.homeList();
    dispatch(action);
  }

  handleClickingEdit = (id) => {
    const { dispatch } = this.props;
    const action = a.editForm(id);
    dispatch(action);
  }

  handleClickingDelete = (id) => {
    console.log(id);
    const { dispatch } = this.props;
    const action = a.deleteNeighbor(id);
    dispatch(action);
  }

  handleDeletingNeighbor = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({ collection: 'neighbors', doc: id });
    const action = a.homeList();
    dispatch(action);
  }

  render() {
    // This is code for signing in:
    // const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     <React.Fragment>
    //       <h1>Loading...</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <React.Fragment>
    //       <h1>You must be signed in to volunteer.</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {

    // Handle determing what to display:
    let displayComponent;
    // let buttonText;
    console.log(this.props.displayStateReducer.display);
    console.log(this.props.displayStateReducer.selectedNeighbor);
    if (this.props.displayStateReducer.display === c.NEIGHBOR_LIST) {
      displayComponent = <NeighborList onNeighborSelection={this.handleChangingSelectedNeighbor} />
    } else if (this.props.displayStateReducer.display === c.NEIGHBOR_DETAILS) {
      displayComponent = <NeighborDetails onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete} />
    } else if (this.props.displayStateReducer.display === c.NEW_FORM) {
      displayComponent = <NewNeighborForm onNewNeighborCreation={this.returnHome} />

    } else if (this.props.displayStateReducer.display === c.NEW_NEIGHBOR) {
      displayComponent = <NeighborList onNewNeighborCreation={this.handleAddingNewNeighbor} />
    } else if (this.props.displayStateReducer.display === c.EDIT_FORM) {
      displayComponent = <EditNeighborForm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onEditNeighbor={this.returnHome} />

    } else if (this.props.displayStateReducer.display === c.DELETE_NEIGHBOR) {
      displayComponent = <DeleteConfirm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onDeleteNeighbor={this.returnHome} onDeleteForReals={this.handleDeletingNeighbor} />
    }

    console.log(displayComponent)
    return (
      <React.Fragment>
        <Navigation />
        <CardsNav />
        <Header />
        <Main />
        {/* <CardsDestination /> */}
        <Container >
          {/* <link rel="stylesheet" type="text/css" media="all" href="css/reset.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/text.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/960.css" /> */}
          {/* <MemoryRouter> */}
          <h1 border='danger' className="header" style={{ textAlign: 'center', paddingBottom: '18px' }}>Welcome To Your Neighborhood!</h1>
          <h3 style={{ paddingBottom: '18px' }}>Click on any card to edit/delete.</h3>
          <h2>

            {/* Current Page is{' '} */}
            {/* <Switch >
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/users">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch> */}
          </h2>
          <div id="cards">
            {displayComponent}
          </div>

        </Container>
        <div id='map-space'>
          <MapContainer />
        </div>

        <Footer />
        {/* <Chat client={chatClient} theme={'messaging light'}>
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat> */}
      </React.Fragment>
    );
  }
}

const CardsNav = () => (
  <nav>
    <ul>
      <icon></icon>
      <li><Link exact activeClassName="current" spy={true} smooth={true} to='cards'>Cards</Link></li>
      <li><Link exact activeClassName="current" spy={true} smooth={true} to='map-space'>Map</Link></li>
    </ul>
  </nav>
)

// const CardsDestination = () => (
//   <Switch>
//     <Route path='/' component={Container}></Route>
//   </Switch>
// )

App.propTypes = {
  display: PropTypes.object,
  selectedNeighbor: PropTypes.string,
  buttonText: PropTypes.func
}

const mapStateToProps = state => {
  return {
    displayStateReducer: state.displayStateReducer,
    selectedNeighbor: state.selectedNeighbor,
  }
}

App = connect(mapStateToProps)(App);

export default withFirestore(App);