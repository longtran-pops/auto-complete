import React from "react";
export default (props) => {
    const regExpHighLightKeyword = () => {
        const regTerm = props.terms.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // Replace special character
        return {__html: props.children.replace(new RegExp('(' + regTerm + ')', 'i'), '<span class="marked">$1</span>')};
    }
    return (
        <p onClick={(e) => props.onPress && props.onPress(e)} dangerouslySetInnerHTML={regExpHighLightKeyword()}></p>
    );
};
