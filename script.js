document.addEventListener('DOMContentLoaded', function() 
{
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const onlyButton = document.getElementById('only');
    const container = document.querySelector('.container');

    noButton.addEventListener('click', function() 
    {
        noButton.style.display = 'none';
        yesButton.style.display = 'none';
        onlyButton.style.display = 'block';
    });
    
    yesButton.addEventListener('click', function() 
    {
        container.innerHTML = 
        `
            <h1 class="p2">YaY!! Let's Stay Together From Now On.</h1>
            <img src="Loveyou.gif">
            <button id="back">Back</button>
        `;
        addBackButtonListener();
    });

    onlyButton.addEventListener('click', function() 
    {
        container.innerHTML = 
        `
            <h1 class="p2">YaY!! Let's Stay Together From Now On.</h1>
            <img src="Loveyou.gif">
            <button id="back">Back</button>
        `;
        addBackButtonListener();
    });

    function addBackButtonListener() {
        const backButton = document.getElementById('back');
        backButton.addEventListener('click', function() {
            location.reload();
        });
    }
});
