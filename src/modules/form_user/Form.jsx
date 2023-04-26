import React, { Component } from 'react';
import './form.css';
import { connect } from 'react-redux'
class Form extends Component {
    render() {
        let cartSeat = this.props.seatChoosedList.cartSeat;
        let priceArr = this.props.seatChoosedList.priceArr;
        let nameOfUser = this.props.userNameReducer;
        let totalSum = priceArr.reduce((rs,price)=>{return rs + price},0)
        const handleDelete = (payload)=>{
            const action = {
                type:'delete',
                payload,
            }
            this.props.dispatch(action);
        };
        const handeOnInput = (eventListen)=>{
            const action = {
                type:'get_name',
                payload: eventListen,
            }
            this.props.dispatch(action);
        }
        const handleCancel = ()=>{
            const action ={
                type:'cacel',
            }
            this.props.dispatch(action);
        }
        const handlePayment =(userName,listSeat)=>{
            let isValid = true;
            if(!userName){
                alert('Bạn hãy nhập tên!');
                isValid = false;
            }else if(listSeat.length == 0){
                alert('Bạn hãy chọn ghế!')
                isValid = false;
            }else if(isValid){
                confirm(`Khách hàng: ${nameOfUser} đã mua ghế: ${cartSeat.join(',')} với tổng tiền cần thanh toán là: ${totalSum.toLocaleString()} vnd.`);
                alert('Cảm ơn quý khách đã sử dụng dịch vụ, Chúc quý khách một ngày tốt lành.');
                handleCancel();
            }
        }
       
        return (
            <div className='myForm'>
                <h2 className='textInForm'>Thông tin chi tiết</h2>
                <div className="statusSeat">
                    <div className="status">
                        <div className="seatBox"></div>
                        <p>Ghế đã được đặt</p>
                    </div>
                    <div className="status">
                        <div className="seatBox seatBox2"></div>
                        <p>Ghế đang chọn</p>
                    </div>
                    <div className="status">
                        <div className="seatBox seatBox3"></div>
                        <p>Ghế còn trống</p>
                    </div>
                    <div className="status">
                        <div className="seatBox seatBox4">box</div>
                        <p>Ghế đôi</p>
                    </div>
                </div>
                <div className="formInput">
                    <div className="formGroup">
                        <input 
                        value={nameOfUser}
                        type="text" 
                        name="name" 
                        placeholder='Nhập tên' 
                        onChange={(e)=>{
                            handeOnInput(e.target.value)
                        }} />
                    </div>
                </div>
                <table className='infoTable'>
                    <tbody>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                        </tr>
                        {cartSeat.map((item,index)=>{
                            return(
                                <tr key={index}>
                            <td>{item}</td>
                            <td>{priceArr[index]}</td>
                            <td><button className='btn btn-danger' onClick={()=>{handleDelete(index)}}>X</button></td>
                        </tr>
                            )
                        })}
                        

                    </tbody>
                </table>
                <div className="customerInfo">
                    <h4>Tên: <span className='customerName'>{nameOfUser}</span></h4>
                    <h4>Số ghế đã chọn: <span className='amountSeat'>{priceArr.length}</span></h4>
                    <h4>Tổng tiền: <span className='total'>{`${(priceArr.reduce((rs,price)=>{return rs + price},0)).toLocaleString()} VND`}</span></h4>
                </div>
                <div className="action">
                    <button className='btn btn-info' onClick={()=>{handlePayment(nameOfUser,cartSeat)}}>Thanh toán</button>
                    <button className='btn btn-warning' onClick={()=>{handleCancel()}}>Hủy</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    return {
        seatChoosedList: rootReducer.chooseReducer,
        userNameReducer: rootReducer.userNameReducer,
    }
}
export default connect(mapStateToProps)(Form)