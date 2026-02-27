function CountryCard({ country }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden 
                    hover:shadow-xl hover:scale-105 
                    transition duration-300 cursor-pointer">

      <img
        src={country.flags.png}
        alt="flag"
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">
          {country.name.common}
        </h3>

        <p className="text-sm text-gray-600">
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Population:</strong>{" "}
          {country.population.toLocaleString()}
        </p>

        <p className="text-sm text-gray-600">
          <strong>Region:</strong> {country.region}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;