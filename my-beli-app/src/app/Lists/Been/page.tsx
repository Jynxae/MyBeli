"use client";
import React, { useState } from "react";

const BeenPage = () => {
  const allPlaces = [
    {
      id: 1,
      name: "The Breakfast Klub",
      location: "Houston, TX",
      note: "Great chicken & waffles!",
      rating: 9,
      price: "$$",
    },
    {
      id: 2,
      name: "Uchi",
      location: "Houston, TX",
      note: "Fancy sushi spot – pricey but worth it.",
      rating: 10,
      price: "$$$",
    },
    {
      id: 3,
      name: "Ramen Tatsu-ya",
      location: "Austin, TX",
      note: "Best tonkotsu ramen in Texas.",
      rating: 8,
      price: "$$",
    },
    {
      id: 4,
      name: "Torchy’s Tacos",
      location: "Houston, TX",
      note: "Casual and quick taco fix.",
      rating: 7,
      price: "$",
    },
  ];

  const [locationFilter, setLocationFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");
  const [priceFilter, setPriceFilter] = useState("All");
  const [cuisineFilter, setCusineFilter] = useState("All");

  const filteredPlaces = allPlaces.filter((place) => {
    const matchLocation =
      locationFilter === "All" || place.location === locationFilter;
    const matchRating =
      ratingFilter === "All" || place.rating >= parseInt(ratingFilter);
    const matchPrice = priceFilter === "All" || place.price === priceFilter;
    return matchLocation && matchRating && matchPrice;
  });

  const uniqueLocations = [...new Set(allPlaces.map((p) => p.location))];

  return (
    <main className="min-h-screen bg-green-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-green-800 mb-4">
        🍽️ Restaurants I’ve Been To
      </h1>

      <div className="flex flex-wrap gap-4 mb-8">
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Locations</option>
          {uniqueLocations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Ratings</option>
          {[10, 9, 8, 7, 6].map((r) => (
            <option key={r} value={r}>
              {r}+
            </option>
          ))}
        </select>

        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="All">All Prices</option>
          <option value="$">$ (cheap)</option>
          <option value="$$">$$ (mid)</option>
          <option value="$$$">$$$ (expensive)</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-green-900">
                {place.name}
              </h2>
              <span className="text-sm text-yellow-600 font-bold">
                {place.rating}/10 ⭐
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-1">{place.location}</p>
            <p className="text-gray-500 text-sm mb-2">Price: {place.price}</p>
            <p className="text-gray-700">{place.note}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BeenPage;
