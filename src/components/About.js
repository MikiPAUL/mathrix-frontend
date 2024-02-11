import React from 'react'
import colors from '../constants/colors'
import "./About.css"
export default function About() {
    return (
        <div style={{ flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col">
                        <div style={{ textAlign: "start" }}>
                            <h1 style={{ color: "white" }}>About Mathrix</h1>
                            <h5 style={{ color: "#7E30E1" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis debitis optio illum sunt labore illo temporibus </h5>
                        </div>
                        <div style={{ textAlign: "start" }}>
                            <p style={{ color: colors.grey }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio eveniet quidem omnis, obcaecati aperiam, veniam, laborum quae vero officia pariatur nam? Reprehenderit cum dolor eos consequuntur voluptatem eligendi odio voluptates.
                                Sint animi reiciendis iste, temporibus excepturi quas repellendus numquam tenetur? Cum excepturi, aut atque ipsa itaque amet deserunt ex error facere odit laudantium voluptates nostrum in natus dignissimos rem voluptatum!</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card' style={{ backgroundColor: "#212134",borderWidth:5,borderColor:"#7e36c7" }}>
                            <div className="row">
                                <div className="col-sm-8" style={{marginRight:20}}>
                                    <div style={{ padding: 15 }}>
                                        <p style={{ color: "#A366FF", textAlign: "justify", fontWeight: "900" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit, sed quas ab eveniet itaque veritatis inventore libero delectus vitae! Ratione sapiente, beatae veniam esse itaque optio facilis incidunt animi?
                                            Voluptatem debitis soluta nobis. Maiores sed</p>
                                    </div>
                                </div>
                                <div className="col-sm-4" style={{display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
                                    <div className="col" style={{color:"white",fontWeight:"bold",textAlign:"center",flex:1}}>
                                        <h1 className="row">M</h1>
                                        <h1 className="row">C</h1>
                                        <h1 className="row">S</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
