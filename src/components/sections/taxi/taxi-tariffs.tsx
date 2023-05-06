import React, { FC, useState } from "react";
import TaxiTariffCard from "@/components/ui/taxi/taxi-tariff-card";
import cn from "classnames";
import { ITariff, tariffs } from "@/service/tariffs";

interface ITaxiTariffs {
	className?: string;
	setPrice: (e: number) => void;
}

const TaxiTariffs: FC<ITaxiTariffs> = (props) => {
	const { className, setPrice } = props;
	const [activeTariff, setActiveTarriff] = useState("Start");

	const handleClick = (tariff: string, deposit: number) => {
		setActiveTarriff(tariff);
		setPrice(deposit);
	};

	return (
		<div className={cn("py-4", className)}>
			<h1 className="text-2xl leading-5 mb-2 font-medium">Tariffs</h1>
			<div className="grid gap-x-2 grid-cols-3">
				{tariffs.map((_item: ITariff) => (
					<TaxiTariffCard
						key={_item.id}
						active={activeTariff}
						name={_item.name}
						image={_item.image}
						onClick={() => handleClick(_item.name, _item.deposite)}
					/>
				))}
			</div>
		</div>
	);
};

export default TaxiTariffs;
