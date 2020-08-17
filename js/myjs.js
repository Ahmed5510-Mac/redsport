var menuItems =document.getElementById("menuItems");
menuItems.style.maxHeight="0px";
function menuetoggel()
{
    if( menuItems.style.maxHeight=="0px")
    {

        menuItems.style.maxHeight="250px";
    }
    else
    {
        menuItems.style.maxHeight="0px";
    }
}