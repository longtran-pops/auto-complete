import React from "react";
import FakeSearchAPI from "./fake-api/search";
import { PAutoComplete } from "./components/widgets";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: "",
            results: [],
            setTime: null,
            loading: false,
            lastTime: 0
        };
    }
    updateKeyword(keyword) {
        return new Promise((resolve) => {
            this.setState(
                {
                    keyword,
                },
                () => resolve(keyword)
            );
        });
    }
    updateResult(results) {
        return new Promise((resolve) => {
            this.setState(
                {
                    results,
                },
                () => resolve()
            );
        });
    }
    search(keyword) {
        try {
            if (this.setTime) clearTimeout(this.setTime)
            this.updateResult([]);
            // Update keyword input
            this.updateKeyword(keyword);
            if(!keyword) return false;
            this.setTime = setTimeout(async () => {
                const time = new Date().getTime()
                this.setState({
                    lastTime: time,
                    loading: true
                })
                // Get all the items which start with `keyword`
                const results = await FakeSearchAPI.search(keyword)
                if(time !== this.state.lastTime) return false
                this.setState({ loading: false })
                // Update suggestion list
                this.updateResult(results)
            }, 500);
        } catch (err) {
            console.error(err);
        }
    }
    componentWillUnmount(){
        if (this.setTime) clearTimeout(this.setTime);
    }
    render() {
        return (
            <PAutoComplete
                value={this.state.keyword}
                loading={this.state.loading}
                suggestions={this.state.results}
                onChange={(val) => this.search(val)}
                onSelect={(item) =>
                    this.updateKeyword(item) && this.updateResult([])
                }
            />
        );
    }
}

export default App;
