function afficher_cacher(id)
{
    if(document.getElementById(id).style.visibility=="hidden")
    {
        document.getElementById(id).style.visibility="visible";
        document.getElementById('bouton_'+id).innerHTML='Caractéristiques techniques';
        document.getElementById('iconbouton').classList.remove('bx-chevron-right');
        document.getElementById('iconbouton').classList.add('bx-chevron-down');
		document.getElementById("texte").style.display = "flex";
    }
    else
    {
        document.getElementById(id).style.visibility="hidden";
        document.getElementById('bouton_'+id).innerHTML='Caractéristiques techniques';
        document.getElementById('iconbouton').classList.remove('bx-chevron-down');
        document.getElementById('iconbouton').classList.add('bx-chevron-right');
		document.getElementById("texte").style.display = "none";
    }
    return true;
}