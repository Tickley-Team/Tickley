const AddTodoSubButton = () => {
    const clickAddTodo = () => {
        alert('할 일 추가 바텀시트 오픈')
    }

    const clickAddLink = () => {
        alert('볼 것 추가 기능 준비 중')
    }
    return (
        <div>
            <button onClick={clickAddTodo}>할 일 추가</button>
            <button onClick={clickAddLink}>볼 것(URL) 추가</button>
        </div>
    )
}

export default AddTodoSubButton