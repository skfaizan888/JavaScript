const NumberofTiles= (L, B, tl , tb ,ntb , /*nofloors*//*nobuilding*/)=>{
    const NumberofTiles /*perfloor*/=(L*B )/ (tl* tb);
   /* const NumberofTiles = NumberofTilesperfloor *nofloors;*/
   /*const NumberofTiles = NumberofTilesperBuilding *nobuilding;*/
    const NumberofBoxes=NumberofTiles / ntb;
    return NumberofBoxes;
};

console.log(Math.ceil(NumberofTiles(30 , 40 ,2 ,2 ,10)));