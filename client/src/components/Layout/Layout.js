import React from 'react';
import Header from './Header';
import Footer from './Footer';
import{Helmet} from "react-helmet"
import  { Toaster } from 'react-hot-toast';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


  const Layout = ({children,description,keywords,author,title}) => {
    return (
      <div>
       <Helmet>
 <meta charSet="utf-8" />             
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="author" content={author} />
 <title>{title}</title>    
            </Helmet> 
    <Header />  
   <main style={{minHeight:"70vh"}}>{children}
   <Toaster />
   {/* <ToastContainer /> */}
   </main> 
    <Footer />
    </div>
  );
};
Layout.defaultProps={
  title:"E commerce",
  description:"mern stack Project",
  keywords:"react,node,mongodb,express,bootstrap",
  author:"Ravi kumar singh"
}

export default Layout