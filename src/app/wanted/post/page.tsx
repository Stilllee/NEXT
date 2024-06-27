export default function Post() {
  return (
    <div>
      <form action="">
        <ul>
          <li>
            이름 <input type="text" />
          </li>
          <li>
            희망연봉 <input type="number" />
          </li>
        </ul>
        <button className="bg-blue-300 text-white font-semibold p-3 rounded-md">
          전송
        </button>
      </form>
    </div>
  );
}
