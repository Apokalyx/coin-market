import { useState } from "react";
import { moneyFormat } from "./helpers";

function Header({ total, money }) {
    return(
    <>
            {total > 0 && money - total !==0 && (
                <div className="header">
                    {moneyFormat(money - total)} $ paranız kaldı
                </div>
            )}
            {total === 0 && (
                <div className="header">
                    {moneyFormat(money)} $ paranız var
                </div>
            )}
            {money - total === 0 && (
                <div className="header">
                    Paran bitti, battın mı?
                </div>
            )}
    </>
    );
}

export default Header;