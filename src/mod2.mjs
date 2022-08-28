const a =5;
const b= "Mradul";

export default a;
// if any variable in other module is requested to be imported from here and npt having any variable name declared in this module then this module by default will export this .

export{b};
// this will only export the info to othermodules only if those modules will request with same variable name as here. 
