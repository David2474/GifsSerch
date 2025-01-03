
export default function InputKeyword({handleKeyword}) {

  return (
    <div className="flex justify-center my-4">
      <div className="w-2/6">
        <h1 className="text-[#efe9e9] font-semibold text-2xl">GifGenerate</h1>
      </div>
      <div className="w-2/6">
        <input
          type="text"
          placeholder="Buscar gif"
          onChange={handleKeyword}
          className="text-black border border-black p-1 rounded-sm"
        />
      </div>
    </div>
  );
}
