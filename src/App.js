import './styles/main.css'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Homepage from './pages/Homepage'
import ProductPage from './pages/ProductPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CartModal from './components/CartModal'
import CategoryPage from './pages/CategoryPage'
import {displayStore, displayConfirmation} from './store'
import Checkout from './pages/Checkout'
import ConfirmModal from './components/ConfirmModal'


const queryClient = new QueryClient();

function App() {
  const {displayCart} = displayStore();
  const {displayConfirm} = displayConfirmation();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Router>
      <ScrollToTop />
      {displayCart && <CartModal />}
      {displayConfirm && <ConfirmModal />}
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/headphones' exact render={(props) => (<CategoryPage {...props} categoryName={"headphones"}/>)}/>
        <Route path='/earphones' exact render={(props) => (<CategoryPage {...props} categoryName={"earphones"}/>)}/>
        <Route path='/speakers' exact render={(props) => (<CategoryPage {...props} categoryName={"speakers"}/>)}/>
        <Route path='/:category/:slug'>
          <ProductPage />
        </Route>
        <Route path='/checkout' exact>
          <Checkout />
        </Route>
      </Switch>
      <Footer />
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
