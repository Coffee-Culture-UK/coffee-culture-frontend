import React from "react";

export default function RegisterNav({step}:{step: string}) {
    return(
        <div className="flex gap-x-20">
          {navItems.map((item: NavItem, ref) => {
            return (
              <div key={ref} className="flex items-start justify-center w-10">
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <div
                    className={` relative w-10 h-10 rounded-full flex items-center justify-center text-[var(--backgroundColour)] text-base font-medium ${
                      step == (ref + 2).toString()
                        ? "bg-[var(--mainBrown)]"
                        : "bg-[var(--darkBrown15)]"
                    }`}
                  >
                    {ref + 1}
                    <div
                      className={`w-20 h-1 bg-[var(--darkBrown10)] absolute -right-20 ${
                        ref == 3 ? "hidden" : "block"
                      }`}
                    ></div>
                  </div>
                  <div
                    className={`font-light text-xs w-20 text-center ${
                      step == (ref + 2).toString()
                        ? "text-[var(--darkBrown)]"
                        : "text-[var(--darkBrown50)]"
                    }`}
                  >
                    {item.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
    )
}

const navItems = [
    {
      name: "Choose plan",
    },
    {
      name: "Customise shop profile",
    },
    {
      name: "Customise offers",
    },
    {
      name: "Enter card details",
    },
  ];
  
  type NavItem = {
    name: string;
  };