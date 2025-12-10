import { Link } from '@tanstack/react-router';

const cards = [
  { id: '1', title: 'test', label: 'label' },
  { id: '2', title: 'test1', label: 'label1' },
  { id: '3', title: 'test2', label: 'label2' },
];

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
      {cards.map((card) => (
        <Link to={'/detail/$productId'} params={{ productId: card.id }} key={card.id}>
          {card.title}
          <h3>{card.label}</h3>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
