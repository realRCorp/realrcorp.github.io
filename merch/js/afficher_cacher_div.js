function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='Voir moins';
		document.getElementById("texte").style.display = "flex";
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='Voir plus';
		document.getElementById("texte").style.display = "none";
    }
    return true;
}

