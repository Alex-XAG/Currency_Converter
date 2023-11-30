const HomePage = () => {
  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            autoComplete="off"
            placeholder="1"
            value=""
            // onChange={handleInput}
          />
          <select
          // value={selectedBrand} onChange={handleChangeBrand}
          >
            <option>Currency</option>
            {/* {brands.map(brand => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })} */}
          </select>
        </label>

        <label>
          <input
            type="text"
            autoComplete="off"
            placeholder="1"
            value=""
            // onChange={handleInput}
          />
          <select
          // value={selectedBrand} onChange={handleChangeBrand}
          >
            <option>Currency</option>
            {/* {brands.map(brand => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })} */}
          </select>
        </label>
      </form>
    </div>
  );
};

export default HomePage;
