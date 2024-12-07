import { Link } from "react-router";

const Todos = () => {
  return (
    <div>
      <p>할일 목록 페이지입니다.</p>
      <div>
        <Link to="/todos">
          <button>오늘 할일</button>
        </Link>
        <Link to="/todos/find">
          <button>할일 찾기</button>
        </Link>
        <Link to="/todos/memory">
          <button>기록</button>
        </Link>
      </div>
    </div>
  );
}

export default Todos
