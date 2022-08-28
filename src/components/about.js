    import React from 'react'
    import PropTypes from 'prop-types'


    export default function About(props) {

    //  let [btnText,setBtnText] = useState('Enable Dark Mode');
     
    //  let[mycss,setmycss] = useState({
    //   color : 'black',
    //   backgroundColor : 'white'})

    //  const toggleMode = ()=>
    //  {
    //    if(mycss.color==='black'){
    //    setmycss(
    //     {
    //       color : 'white',
    //       backgroundColor : 'black'
    //     }
    //    )
    //    setBtnText('Enable Light Mode');
    //   }
    //    else if(mycss.color==='white'){
    //    setmycss(
    //     {
    //       color : 'black',
    //       backgroundColor : 'white'
    //     }
    //    )
    //    setBtnText('Enable Dark Mode');
    //   }
    //  }

      return (
        <div  style={{ height:'100vh', backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
          <div className="container" style={{height:'100 vh',backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="accordion" id="accordionExample" >
      <div className="accordion-item"style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}} >
        <h2 className="accordion-header" id="headingOne" >
          <button className="accordion-button" type="button"  style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"  data-bs-parent="#accordionExample">
          <div className="accordion-body" style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" >
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
          <div className="accordion-body" style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body"style={{backgroundColor: props.mode==='dark' ? 'black':'white',color:props.mode==='dark'?'white':'black'}}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
          </div>

          {/* <div className="container">
            <button className='mx-2 my-3'  onClick={toggleMode}></button>
          </div> */}
        </div>
      )
    }

    About.propTypes = {
      heading : PropTypes.string
    }

    About.defaultProps = {
      heading : 'default heading'
    }