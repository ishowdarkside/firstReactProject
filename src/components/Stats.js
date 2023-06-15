export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  const numItems = items.length;
  const packed = items.filter((el) => el.packed);
  const percantage = parseInt((packed.length / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percantage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed
          ${packed.length} (${percantage}%)`}
      </em>
    </footer>
  );
}
