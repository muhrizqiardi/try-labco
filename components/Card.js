function Card({ children }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="flex items-center">{children}</div>
    </div>
  );
}
export default Card;
