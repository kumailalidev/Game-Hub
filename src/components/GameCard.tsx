import { Game } from "../hooks/useGames";
import { Card, CardFooter, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image src={game.background_image} />
      <CardFooter>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
