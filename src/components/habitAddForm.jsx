// import React, { PureComponent } from 'react';

// class HabitAddForm extends PureComponent {
    // inputRef = React.createRef();
    // // 바로 돔요소에 접근하지않고 필요할때는 createRef 함수를 이용하여 
    // // inputRef라는 멤버변수를 만들고, 그 멤버변수를 ref 에 연결하여 사용한다.
    // formRef = React.createRef();
    // onSubmit = (event) => {
    //     event.preventDefault();
    //     const name = this.inputRef.current.value;
    //     name && this.props.onAdd(name); // && 연산자 name이 null 이면 왼쪽, name이 null이 아니면, 오른쪽 
    //     //this.inputRef.current.value = "";
    //     this.formRef.current.reset();
    // }
//     render() {
        // return (
        //     <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        //         <input ref={this.inputRef} type="text" className='add-input' placeholder="Habit"></input>
        //         <button className="add-button">Add</button>
        //     </form>
        // );
//     }
// }

// export default HabitAddForm;

import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className='add-input' placeholder="Habit"></input>
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;