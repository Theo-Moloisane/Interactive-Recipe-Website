const search = () => 
{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("recipe-list");
    const cards = storeitems.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) 
    {
        let h3 = cards[i].getElementsByTagName('h3')[0];
        if (h3) 
        {
            let textValue = h3.textContent || h3.innerText;
            if (textValue.toUpperCase().indexOf(searchbox) > -1)
            {
                cards[i].style.display = "";
            }
            else 
            {
                cards[i].style.display = "none";
            }
        }
    }
};