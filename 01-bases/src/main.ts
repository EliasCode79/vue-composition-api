import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
// import './bases/01.const-lets';
// import './bases/02-object';
// import './bases/03-arrays';
// import './bases/04-funtions';
// import './bases/05-deses-obj';
// import './bases/07-im-exp';
// import './bases/08-promesas';
import './bases/09-fecth-api';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;
