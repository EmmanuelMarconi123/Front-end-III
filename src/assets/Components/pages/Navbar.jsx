import Cards from "../common/Cards";

const Navbar = ()=>{

    const salario = 150000;

   return(
        <>
        <ul>
            <li>Contacto</li>
            <li>Nosotros</li>
            <li>Información adicional</li>
        </ul>
 
        <Cards salario={salario} />
        </>
    )

}

export default Navbar;

