import { InitialAddonInterface, InitialPlanInterface } from "../types/interfaces";

export default function calcPrice(
  addons: InitialPlanInterface[] | InitialAddonInterface[],
  mult: number
) {
  return addons.map((addon) => ({
    ...addon,
    price: addon.price * mult,
  }));
}
