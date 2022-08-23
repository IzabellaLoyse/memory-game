export interface ICardProps {
  id: string;
  flipped?: boolean;
  cardBack: string;
  handleClick?: (id: string) => void;
}
