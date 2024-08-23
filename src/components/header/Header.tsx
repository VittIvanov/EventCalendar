import React from "react";
import { Button } from "../../wrappers/button/Button";
import { Navigation } from "react-calendar";
import { HeaderWrapper } from "./styled";

interface HeaderProps {
  date: Date;
  setDate: (date: Date) => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ date, setDate, onLoginClick }) => {
  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const formatCurrentMonth = (date: Date) => {
    const formattedDate = date.toLocaleString("default", { month: "long", year: "numeric" });
    return capitalizeFirstLetter(formattedDate);
  };

  return (
    <HeaderWrapper>
      <div className="main-header_title-wrapper">
        <img className="main-header_logo" src={process.env.PUBLIC_URL + "/assets/svg/subheader.svg"} aria-label="логотип компании Red Collar" />
        <img className="main-header_title" src={process.env.PUBLIC_URL + "/assets/svg/planner event.svg"} aria-label="логотип приложения «планировщик событий»" />
      </div>

      <Navigation
        activeStartDate={date}
        drillUp={() => { }}
        setActiveStartDate={setDate}
        view="month"
        views={["month", "year", "decade", "century"]}
        formatMonthYear={(locale, date) => formatCurrentMonth(date)}
      />

      <Button className="header-button" onClick={onLoginClick}>Войти</Button>
    </HeaderWrapper>
  )
}

export default Header;
