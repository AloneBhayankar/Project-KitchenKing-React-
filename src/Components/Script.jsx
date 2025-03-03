const Script = (recipe) => {
    let list = recipe.nextElementSibling;
    let isVisible = list.style.display === 'block';
    list.style.display = isVisible ? 'none' : 'block';
    let dropdown = recipe.querySelector(".dropdown");
    dropdown.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(-180deg)';
}

export default Script;
