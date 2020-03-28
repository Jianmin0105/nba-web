import React, {Component} from 'react';
import ShotChart from "./ShotChart";
import CounterSlider from "./CounterSlider";
import lodash from "lodash"
import {Col, Row, Radio, Switch} from "antd";

class DataViewContainer extends Component {
    state = {
        minCount: 2,
        charType: 'hexbin',
        displayTooltip: true,
    }
    onCountSliderChange = (count) => {
        this.setState({minCount: count})
    }
    onCharTypeChange = (e) => {
        //console.log(e);
        this.setState({
            charType : e.target.value,
        })
    }
    onTooltipChange = (e) => {
        this.setState({
            displayTooltip: e,
        })
    }
    render() {
        return (
            <div className="data-view">
                <ShotChart minCount={this.state.minCount} playerId={this.props.playerId} chartType={this.state.charType} displayTooltip={this.state.displayTooltip}/>
                <div className="filters">
                <CounterSlider value={this.state.minCount} onCountSliderChange={lodash.debounce(this.onCountSliderChange, 500)}/>
                <br/>
                    <Row>
                        <Col span={9}>
                            <Radio.Group onChange={this.onCharTypeChange} value={this.state.charType}>
                                <Radio value='hexbin'>hexbin</Radio>
                                <Radio value='scatter'>scatter</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={4}>
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={this.onTooltipChange}
                                defaultChecked />
                        </Col>
                    </Row>
                </div>
            </div>

        );
    }
}

export default DataViewContainer;