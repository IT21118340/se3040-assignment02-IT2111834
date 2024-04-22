import React from "react";
import "./AsteroidCard.css";

const AsteroidCard = ({ asteroid }) => {
	return (
		<div className="asteroid-card">
			<h2 className="text-white font-bold text-2xl"> 🌠{asteroid.name}</h2>
			<hr className="my-4" />
			<table className="text-white" cellPadding="8px">
				<tr>
					<td>Approach Date</td>
					<td>
						:{"  "}
						{asteroid.close_approach_data[0].close_approach_date}
					</td>
				</tr>
				<tr>
					<td>Speed</td>
					<td>
						:{" "}
						{
							asteroid.close_approach_data[0].relative_velocity
								.kilometers_per_hour
						}
					</td>
				</tr>
				<tr>
					<td>Max Diameter</td>
					<td>
						:{" "}
						{
							asteroid.estimated_diameter.kilometers
								.estimated_diameter_max
						}{" "}
						km
					</td>
				</tr>
				<tr>
					<td>Min Diameter</td>
					<td>
						:{" "}
						{
							asteroid.estimated_diameter.kilometers
								.estimated_diameter_min
						}{" "}
						km
					</td>
				</tr>
			</table>
			<hr className="my-4" />
			<a
				href={asteroid.nasa_jpl_url}
				target="_blank"
				rel="noopener noreferrer"
			>
				👉 More Info
			</a>
		</div>
	);
};

export default AsteroidCard;
