import React from 'react';
import './MessageCreation.css';

class MessageCreation extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            message: JSON.stringify({})
        };
    }

    resetMessageAsDrillableItemsFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "drillableItems",
                    data: {
                        identifiers: [],
                        uris: ["/gdc/md/px4o16t9ftwkloa82p4o78zv34lqk4vs/obj/9211"],
                        composedFrom: {
                            identifiers: [],
                            uris: []
                        }
                    }
                }
            }
        }));
    }
    resetMessageAsOpenInsightFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "openInsight",
                    data: {
                        reportId: "84120",
                        projectId: "px4o16t9ftwkloa82p4o78zv34lqk4vs"
                    },
                    contextId: "open_1"
                }
            }
        }));
    }

    resetMessageAsClearFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "clear",
                    contextId: "clear_1"
                }
            }
        }));
    }

    resetMessageAsSaveFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "saveInsight",
                    data: {
                        title: "test save"
                    },
                    contextId: "save_1"
                }
            }
        }));
    }

    resetMessageAsSaveAsFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "saveAsInsight",
                    data: {
                        title: "test save as"
                    },
                    contextId: "saveas_1"
                }
            }
        }));
    }

    resetMessageAsExportFormat = () => {
        this.changeMessage(JSON.stringify({
            gdc: {
                product: "analyticalDesigner",
                event: {
                    name: "exportInsight",
                    data: {
                        config: {
                            title: "test export",
                            format: 'xlsx',
                            mergeHeaders: true,
                            includeFilterContext: true
                        }
                    },
                    contextId: "export_1"
                }
            }
        }));
    }

    pretyJSON = (jsonStr) => {
        let pretyStr = jsonStr;
        try {
            const jsonObj = JSON.parse(jsonStr);
            return JSON.stringify(jsonObj, undefined, 4);
        } catch {
            // skip it
        }

        return pretyStr;
    }

    onMessageChange = (event) => {
        this.changeMessage(event.target.value);
    }

    changeMessage = (value) => {
        const { onMessageChange } = this.props;
        this.setState({
            message: this.pretyJSON(value)
        });
        onMessageChange(value);
    }

    render() {
        return (
          <div className="message-creation">
            <button onClick={this.resetMessageAsDrillableItemsFormat}>drillable Items format</button>
            <button onClick={this.resetMessageAsOpenInsightFormat}>openInsigh format</button>
            <button onClick={this.resetMessageAsClearFormat}>clear format</button>
            <button onClick={this.resetMessageAsSaveFormat}>save format</button>
            <button onClick={this.resetMessageAsSaveAsFormat}>save as format</button>
            <button onClick={this.resetMessageAsExportFormat}>export format</button>
            <br/>
            <span>Message: </span><br/>
            <textarea className="fwMultilineTextbox" value={this.state.message} onChange={this.onMessageChange} cols={120} rows={10} />
          </div>
        );
    }
}

export default MessageCreation;
