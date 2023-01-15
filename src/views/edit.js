export default () => `
    <header class="header">
        <h1 class="header__logo"><a href="#">HPNY 2023</a></h1>
        <button class="header__button">
            <img src="./images/icon_arrow-back.svg" alt="" />
        </button>
    </header>
    <main class="main edit">
        <figure class="edit__img">
            <img src="" alt="" />
        </figure>
        <div class="edit__content">
            <input class="edit__input" value="" />
            <textarea class="edit__textarea" value="" rows="8"></textarea>
        </div>
        <button class="edit__submit-button">글 수정하기</button>
    </main>
`;

export const editScript = () => {};
