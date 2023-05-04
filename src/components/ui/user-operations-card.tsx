import React, { FC } from "react";
import Image from "next/image";
import { ITypeCard } from "@/components/ui/service-type-card";

const UserOperationsCard: FC<ITypeCard> = ({ title, image }) => {
	return (
		<div className="bg-zinc-100 rounded-xl py-3 flex flex-col items-center ">
			<div>
				<Image src={image} alt={title} width={28} height={28} />
			</div>
			<h3 className="mt-1 font-medium text-medium first-letter:text-blue-400">
				{title}
			</h3>
		</div>
	);
};

export default UserOperationsCard;
