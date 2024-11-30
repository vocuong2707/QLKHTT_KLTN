<<<<<<< HEAD
import React from 'react'
import DashboardHeader from "./DashboardHeader"


type Props = {}

const DashboarHero = (props: Props) => {

    return ( 
        <DashboardHeader />
    )
=======
import React, { useState } from 'react'
import DashboardHeader from "./DashboardHeader"
import DashboarWidgtes from "../../components/Admin/Widgets/DashboarWidgtes"


type Props = {
    isDashboard?: boolean;
}

const DashboarHero = ({isDashboard}: Props) => {
    const[open, setOpen] = useState(false);

    return ( 
        <div>
             <DashboardHeader open={open} setOpen={setOpen} />
              {
            isDashboard && (
                <DashboarWidgtes open={open} />
            )
        }
        </div>
    );
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
}

export default DashboarHero