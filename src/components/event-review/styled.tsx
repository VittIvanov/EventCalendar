import styled from "styled-components";
import colors from "../../consts/colors";

export const EventReviewWrapper = styled.div`
  min-width: 423px;
  min-height: 116px;
  padding: 120px ;
  padding-right: 0px;
  margin: 0 ;
time{
  font-weight: 700;
}

.event-review__completed {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 24px;
}

.event-review__completed img {
  width: 18px;
  height: 18px;
  margin-right: 8px; 
}

.event-review__title {
  font-size: 36px;
  margin-bottom: 40px;
}

.event-review__info{
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: left;
}

.event-review__info-sidebar{
  background-color: ${colors.background_secondary};
  border-radius: 20px;
  margin-right: 16px;
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 20%;
  min-width: 200px;
  font-size: 18px;
}

.event-review__location{
  font-style: normal;
}

.event-review__text{
  padding-right: 120px;
}

.event-review__participants-gallery{
  text-align: left;
}

.event-review__participants-list {
  display: flex;
}

.event-review__participants-item{
  display: flex;
  margin-right: 48px;
  align-items: center;
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 12px;
  }
}

.event-review__participants-organizer{
  display: block;
  p{
    font-size: 18px;
  }
  span{
    line-height: 17px;
    font-size: 14px;
    color: ${colors.violet};
    padding: 4px;
    background-color: ${colors.lilac};
    border-radius: 10px;
  }
}

.event-review__gallery-list {
  display: flex;
}

.event-review__gallery-item{
  margin-right: 16px;
  width: 267px;
  height: 160px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}
`