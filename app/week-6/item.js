export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-3 mb-2 bg-white rounded-lg shadow-md hover:bg-gray-50">
      <span className="font-semibold text-gray-800">{name}</span>
      <span className="text-gray-600">Qty: {quantity}</span>
      <span className="text-sm text-gray-500 italic">{category}</span>
    </li>
  );
}
