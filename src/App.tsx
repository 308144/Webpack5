import React from 'react';
import '@/app.less';
import smallImg from '@/assets/imgs/5kb.png';
import bigImg from '@/assets/imgs/22kb.png';

function App() {
  return (
    <>
    <h2>带飞</h2>
      <img src={smallImg} alt="小于10kb的图片" />
      <img src={bigImg} alt="大于于10kb的图片" />

      <div className='smallImg'></div> {/* 小图片背景容器 */}
      <div className='bigImg'></div> {/* 大图片背景容器 */}
    </>
  );
}
export default App;

// import React, { useState } from 'react'

// function App() {
//   const [ count, setCounts ] = useState('')
//   const onChange = (e: any) => {
//     setCounts(e.target.value)
//   }
//   return (
//     <>
//       <h2>aaaa</h2>
//       <p>受控组件</p>
//       <input type="text" value={count} onChange={onChange} />
//       <br />
//       <p>非受控组件</p>
//       <input type="text" />
//     </>
//   )
// }
// export default App

