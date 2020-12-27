import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// 如果想要评估应用的性能, 可以传递一个函数来记录结果
// 例如: reportWebVitals(console.log)
reportWebVitals();
