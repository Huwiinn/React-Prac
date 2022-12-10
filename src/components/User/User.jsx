import CustomButton from "../CustomButton/CustomButton";

function User(props) {
        return (
        <div>
            <div className="card-container">
            {props.user.age}살 - {props.user.name}
            <CustomButton color="pink" onClick={() => {props.handleDelete(props.user.id)}}>삭제하기</CustomButton>
            </div>
        </div>
        );
    }
export default User