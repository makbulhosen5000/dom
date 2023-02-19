document.getElementById('btn-post').addEventListener('click',function(){
    const takeComments = document.getElementById('new-comments');
    const takeValue = takeComments.value;
    const createElement = document.createElement('p');
    createElement.innerText = takeValue;
    const commentContainer = document.getElementById('comment-container');
    commentContainer.appendChild(createElement);
    takeComments.value = '';
})