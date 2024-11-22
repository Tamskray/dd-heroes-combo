import type { FC } from "react";

interface HeroPortraitProps {
  portrait: string;
  onClick?: () => void;
}

const HeroPortrait: FC<HeroPortraitProps> = ({ portrait, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className="hero-portrait" src={portrait} alt="hero-portrait" />
    </div>
  );
};

export default HeroPortrait;
