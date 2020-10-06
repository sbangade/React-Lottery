import React, {Component} from 'react';
import './Lottery.css';
import Boll from './Ball';

class Lottery extends Component{
    static defaultProps = {
        title: 'Lotto',
        Maxnum: 40,
        MaxBalls: 6

    };
    constructor(props){
        super(props)
        this.state = {nums: Array.from({length: this.props.MaxBalls})};
        this.Generate = this.Generate.bind(this);
    }
    handclick(){
        this.setState(curState =>({
            nums: curState.nums.map( n => Math.floor(Math.random() * this.props.Maxnum) + 1)
        }));
        
    }
    Generate(){
        this.handclick();
    }

    render(){
        return(
            <section className = 'Lottery'>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map( n => (
                        <Boll num={n}/>
                    ))}
                </div>
                <button onClick={this.Generate}>Generate</button>
            </section>
        )
    }
}
export default Lottery;