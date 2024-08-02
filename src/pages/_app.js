import "@/styles/globals.css";
import "@/styles/bootstrap.css";
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store'
export default function App({ Component, pageProps,  ...rest }) {

  const { store, props } = wrapper.useWrappedStore(rest)

  return(

    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  ) 
}
