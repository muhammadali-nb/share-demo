import React from "react";
import Container from "@/components/ui/container";
import Wallet from "@/components/ui/wallet";
import UserOperationsCard from "@/components/ui/user-operations-card";
import Support from "@/components/ui/support";

const UserOperations = () => {
	return (
		<div className="py-4">
			<Container>
				<Wallet />
				<div className="grid grid-cols-2 my-2 gap-2">
					<UserOperationsCard image="/icons/history.svg" title="History" />
					<UserOperationsCard image="/icons/order.svg" title="Orders" />
					<UserOperationsCard image="/icons/sale.svg" title="Promo code" />
					<UserOperationsCard image="/icons/settings.svg" title="Settings" />
				</div>
				{/* <Support/> */}
			</Container>
		</div>
	);
};

export default UserOperations;
