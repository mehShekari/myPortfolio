import styled from "styled-components";
import hameMenuImg from "../../assets/img/hamburgers-4k.jpeg";
import img_1 from "../../assets/img/img-1.jpeg"

export const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;

  .home_bg_holder {
    width: 100%;
    height: 100vh;
    background-image: url("${img_1}");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;

    .home_img--blur {
      width: 100%;
      height: 100%;  
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0 , 0 , .6)
    }

    .home_img--content {
      position: absolute;
      top: 0; 
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      color: white;
    }
  }
  
`