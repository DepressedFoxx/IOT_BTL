import React from 'react';
import Header from './layout/header';
import Content from './layout/content';
import Footer from './layout/footer';

function App() {

  return (
    <div className="w-screen bg-[#F2F5FA] h-screen overflow-y-scroll p-4">
      <Header />
      <Content />
      {/* <Footer /> */}
    </div>
  )
}

export default App
