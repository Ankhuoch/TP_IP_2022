<template>
    <div class="wrapper">
        <div class="input-wrapper">
            <div class="input-form-wrapper">
                <div>
                    <ul>
                        <li>📱 Phone
                            <ul>
                                <li>iPhone</li>
                                <li>Samsung</li>
                                <li>LG</li>
                            </ul>
                        </li>
                        <li>💻 Computer
                            <ul>
                                <li>Apple</li>
                                <li>Asus</li>
                                <li>Dell</li>
                                <li>Toshiba</li>
                                <li>Acer</li>
                            </ul>
                        </li>
                        <li>🖥 Monitor
                            <ul>
                                <li>Apple</li>
                                <li>Asus</li>
                                <li>Dell</li>
                                <li>Toshiba</li>
                                <li>Acer</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="list-wrapper">
            <div id="grid">
                <div class="box" method="POST">
                    <div class="book-icon-wrapper">
                        <img src="../assets/phone.jpg" alt="#">
                    </div>
                    <div class="book-info-wrapper">
                        <span>Shop1:</span><br/>
                        <span>Shop2:</span><br/>
                        <span>Shop3:</span><br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.wrapper {
    background-color: rgb(99, 100, 100);
}
.input-wrapper {
    height: 97%;
    width: 300px;
    background-color: rgb(249, 250, 250);
    position: fixed;
    padding: 10px;
}

.input-form-wrapper input[type=text] {
    width: 100%;
    border: 1px solid rgb(204, 204, 207);
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
}

.list-wrapper {
    height: auto;
    width: 800px;
    top: 0px;
    margin-left: 350px;
    border-radius: 5px;
    background-color: #a5a1a1;
}
.list-wrapper .grid {
    display: grid;
    grid-template-columns: auto auto auto;
}
.box {
    display: inline-grid;
    margin: 2px;
    margin-left: 1px;
    width: 20%;
    background-color: white;
    padding: 10px;
    box-shadow: 3px 3px 2px 0px rgba(50, 50, 50, 0.5);
    border: 1px solid rgba(212, 211, 211, 0.8);
}
img {
    width: 120px;
    margin: 10px 20px;
}
.book-infor-wrapper {
    padding: 5px;
}
</style>

