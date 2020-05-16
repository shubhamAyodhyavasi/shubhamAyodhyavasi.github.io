import React from 'react' ;
import classNames from 'classnames'
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

const option = {
  items: 1,
  dots: false,
}
class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.owl = React.createRef();
    this.owlWrapper = React.createRef();
    this.owlMain = React.createRef();
    this.pos = 0
  }
 
  componentDidMount(){
    console.log({
      res: this.owl.current
    })
    this.owlWrapper.current.addEventListener("wheel", this.onWheel)
  }
  onWheel = (e) => {
    e.preventDefault();
    const {
      deltaY
    } = e
    if (deltaY>0) {
      this.owl.current.next()
    } else {
      this.owl.current.prev()
    }
  }
  onChange = (e) => {
    const {
      property
    } = e
    if(this.owl.current && typeof property.value === "number" && property.value !== this.pos ){
      this.owl.current.to(property.value, 250)
    }
  }
  onNavChange = (e) => {
    const {
      property
    } = e
    if(this.owlMain.current && property.value !== e.item.index){
      this.pos = property.value
      this.owlMain.current.to(this.pos, 250)
    }
    if(this.owl.current){
      setTimeout(() => {
        const list = $(this.owl.current.container)
        list.find(".active-next").removeClass("active-next");
        list.find(".active-prev").removeClass("active-prev");
        list.find(".active").prev().addClass("active-prev");
        list.find(".active").next().addClass("active-next");
      }, 10);
    }
  }
  render(){
    const items = Array(20).fill("")
    const data = items.map((item, i)=> <div key={i}>
      <img  alt="owl-item" src="//via.placeholder.com/500x300"/>
    </div>)
    return (
      <div className="c-carousel">
        <div className="c-carousel__main">
          <div className="c-carousel__main-inner">
            <OwlCarousel {...option} onChange={this.onChange} ref={this.owlMain}>
              {data}
            </OwlCarousel>
          </div>
        </div>
        <div ref={this.owlWrapper} className="c-carousel__bottom">
          <div style={{
            width: 100,
            margin: "auto"
          }}>
            <OwlCarousel {...option} onChange={this.onNavChange} ref={this.owl}>
              {data}
            </OwlCarousel>
          </div>
        </div>
      </div>
    )
  }
}
export default Carousel 