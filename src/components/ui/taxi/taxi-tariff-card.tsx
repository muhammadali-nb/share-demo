import React, { FC, useState } from "react";
import Image from "next/image";
import cn from "classnames";

interface ITaxiTariffCard {
	image: string;
	id?: number;
	name: string;
	active: string;
	onClick?: () => void;
}

const TaxiTariffCard: FC<ITaxiTariffCard> = (props) => {

	const { name, image, active, onClick } = props;

	return (
		<div
			onClick={onClick}
			className={cn(
				"flex flex-col items-center py-3 px-2 rounded-xl transition duration-500",
				{ "bg-zinc-300 ": name === active },
				{ "bg-zinc-100 ": name !== active }
			)}>
			<div className="h-7 w-20 rounded overflow-hidden">
				<Image
					src={image}
					className="h-full w-full"
					alt={name}
					height={40}
					width={150}
				/>
			</div>
			<p className="font-medium mt-1">{name}</p>
		</div>
	);
};

export default TaxiTariffCard;
