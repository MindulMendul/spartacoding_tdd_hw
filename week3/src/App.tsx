import { SearchForm } from './components/search-form';

function App() {
  return (
    <div>
      <h1>3주 차 - 실무 상황을 가정해보기</h1>
      <p>입력값을 받으면, 그로부터 결과값을 반환하는 페이지를 가정.</p>
      <p>근데 이제 1, 2주 차 결과를 곁들인 ww</p>
      <p>
        즉, 1주 차에 만든 search form 을 조금 개량해서, 2주 차 함수의 결과값을
        보는 것으로 결정!
      </p>
      <SearchForm />
    </div>
  );
}
// event: MouseEvent<Element, MouseEvent>
export default App;
