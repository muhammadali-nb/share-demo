import React from "react";
import Image from "next/image";

const Wallet = () => {
	return (
		<div className="flex justify-between items-center p-6 bg-zinc-100 rounded-xl">
			<div className="flex items-center">
				<Image src="/icons/wallet.svg" alt="Wallet" width={26} height={28} />
				<h3 className="text-2xl font-medium ml-2 first-letter:text-blue-400">
					Wallet
				</h3>
			</div>
			<p className="text-md font-medium">13.0231 USD</p>
		</div>
	);
};

export default Wallet;
