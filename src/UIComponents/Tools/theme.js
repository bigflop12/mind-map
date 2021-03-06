function Theme(props) {
    return (
        <>
            <div className="themeHeader">Тема</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("black")}
                style={{
                    background: "black",
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("green")}
                style={{
                    background: "#3EC70B",
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("orange")}
                style={{
                    background: "#FF9F29",
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("purple")}
                style={{
                    background: "#541690"
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("gradBlack")}
                style={{
                    background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("gradBlue")}
                style={{
                    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("gradRed")}
                style={{
                    background: "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
                }}
            >Aa</div>
            <div className="customizationFont theme"
                onClick={() => props.setTheme("gradPurple")}
                style={{
                    background: "linear-gradient(to right, #fc00ff, #00dbde)"
                }}
            >Aa</div>
        </>
    );
}

export default Theme;