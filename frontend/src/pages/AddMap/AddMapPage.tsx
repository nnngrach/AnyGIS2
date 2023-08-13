import React from 'react'
import Container from 'react-bootstrap/Container';

export function AddMapPage() {
    return (
        <Container className="col-md-8">
        <div className="container-xxl bd-gutter pt-md-1 pb-md-4 text-bg-dark">
            <h1>Мастер по добавлению новых карт</h1>

            Чтобы добавить интересующую вас онлайн карту, включите в браузере режим разработчика. Перейдите во вкладку Sources и надите там любой тайл. Кликните правой кнопкой мыши и нажмите Copy CURL. Вставьте результат в это поле.
            
            <Container className="col-md-10 py-4">    

                <form className="needs-validation">

                    <div className="col-sm-10 py-2">
                        <label className="form-label">Curl</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Вставьте Curl в это поле" value="" />
                    </div>

                    <div className="col-sm-10 py-3">
                        <label className="form-label">Название</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Введите название новой карты" value="" />
                    </div>

                        {/* btn-outline-secondary */}
                    <button className="btn btn-secondary d-inline-flex my-3 align-items-center shadow">Скачать</button>
                
                </form>

                
            </Container>


            {/* <input 
                type="text"
                placeholder="Enter text"
                // value={ value }
                // onChange={ changeHandler }
            /> */}
           
        </div>
        </Container>
    )
}