import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import flowchartImg from "../assets/img/flow-chart.svg";

export default function FlowChart() {
  return (
    <>
      <section
        className="flow_chart_panle def-e content-section"
        id="flow_chart"
      >
        <div className="container">
          <div className="blog_he">
            <h1>Flow Chart</h1>
          </div>
          <div className="flow_chart_text">
            <p>
              This flowchart is an example on how our system can be utilized. In
              this example we only show four imagined users, and how other
              industries can connect to our technology. This can be scaled to
              millions of users in the future.
            </p>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="pinch-zoom-container">
          <TransformWrapper style={{border:"2px solid black"}}>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <React.Fragment>
                <div className="btn_tri_h">
                  <button onClick={() => zoomIn()}> <i class="fa fa-plus" aria-hidden="true"></i></button>                  
                  <button onClick={() => resetTransform()}>Reset</button>
                  <button onClick={() => zoomOut()}> <i class="fa fa-minus" aria-hidden="true"></i></button>
                </div>
                <div style={{width:"100%"}}>
                  <TransformComponent>
                    <img id="pinch-zoom-image-id" class="pinch-zoom-image" src={flowchartImg} alt="test" />
                  </TransformComponent>
                </div>
              </React.Fragment>
            )}
          </TransformWrapper>
        </div>
      </div>
    </>
  );
}
