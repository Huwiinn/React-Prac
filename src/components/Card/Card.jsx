    function Card({name}) {

        return (
        <div className='card-container'>
            <div>
            {name}
            {/* {name}으로 부모에 있는 현재 컴포넌트의 name값을 가져옴. << Obj로 값이 표현되기 때문에 가능.   */}
            </div>
        </div>
        )
    }
    // {name} = {name : 'Max', age : 28} console.log(name) // Max ⭐️ 객체 구조분해 할당 예시 ⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️⭐️ 
export default Card