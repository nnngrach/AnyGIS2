import React from "react";
import Container from 'react-bootstrap/Container';

export function Selector() {
    return (
        <Container className='d-flex flex-wrap align-items-left pt-4 my-2 border-top'>

            <button id="reset" title="Сброс" className="btn btn-outline-secondary d-inline-flex mx-2 align-items-center shadow" ><b>Сброс</b></button>


            <select id="mapAppSelector" className="dropdown-menu d-block position-static mx-2 border-1 shadow w-220px" data-bs-theme="dark" >
                <option value="All" >(все форматы)</option>
                <option value="Locus">Locus</option>
                <option value="OsmandSqlite">OsmAnd Sqlitedb</option>
                <option value="OsmandMeta">OsmAnd Metainfo</option>
                <option value="GuruIOS">Guru Maps iOS</option>
                <option value="GuruAndroid">Guru Maps Android</option>
                <option value="Alpine">Alpine Quest</option>
                <option value="Desktop">Desktop editors</option>
            </select>


            <select id="mapCountrySelector" className="dropdown-menu d-block position-static mx-2 border-1 shadow w-220px" data-bs-theme="dark" >
                    <option value="All">(все страны)</option>

                <optgroup label="Популярные">
                    <option value="World">🌍 Глобальное покрытие</option>
                    <option value="Russia">🇷🇺 Россия</option>
                    <option value="Ukraine">🇺🇦 Украина</option>
                    <option value="Belarus">🇧🇾 Белорусь</option>
                </optgroup>

                <optgroup label="Европа">
                    <option value="Europe">🇪🇺 Европейский континент</option>
                    <option value="GB">🇬🇧 Великобритания</option>
                    <option value="Denmark">🇩🇰 Дания</option>
                    <option value="Italy">🇮🇹 Италия</option>
                    <option value="Latvia">🇱🇻 Латвия</option>
                    <option value="Lithuania">🇱🇹 Литва</option>
                    <option value="Norway">🇳🇴 Норвегия</option>
                    <option value="Poland">🇵🇱 Польша</option>
                    <option value="Finland">🇫🇮 Финляндия</option>
                    <option value="France">🇫🇷 Франция</option>
                    <option value="Montenegro">🇲🇪 Черногория</option>
                    <option value="Czech">🇨🇿 Чехия</option>
                    <option value="Switzerland">🇨🇭 Швейцария</option>
                    <option value="Sweden">🇸🇪 Швеция</option>
                    <option value="Estonia">🇪🇪 Эстония</option>
                </optgroup>

                <optgroup label="Азия">
                    <option value="Azerbaijan">🇦🇿 Азербайджан</option>
                    <option value="Armenia">🇦🇲 Армения</option>
                    <option value="Georgia">🇬🇪 Грузия</option>
                    <option value="India">🇮🇳 Индия</option>
                    <option value="Cyprus">🇨🇾 Кипр</option>
                    <option value="Kazakhstan">🇰🇿 Казахстан</option>
                    <option value="Kyrgyzstan">🇰🇬 Киргизия</option>
                    <option value="Mongolia">🇲🇳 Монголия</option>
                    <option value="Nepal">🇳🇵 Непал</option>
                    <option value="Tajikistan">🇹🇯 Таджикистан</option>
                    <option value="Turkmenistan">🇹🇲 Туркменистан</option>
                    <option value="Turkey">🇹🇷 Турция</option>
                    <option value="Uzbekistan">🇧🇾 Узбекистан</option>
                </optgroup>

                <optgroup label="Остальные страны">
                    <option value="USA">🇺🇸 США</option>
                    <option value="UAE">🇦🇪 ОАЭ</option>
                    <option value="Chilie">🇨🇱 Чили</option>
                    <option value="NZ">🇳🇿 Новая Зеландия</option>
                </optgroup>
            </select>

            <select id="mapCategorySelector" className="dropdown-menu d-block position-static mx-2 border-1 shadow w-220px" data-bs-theme="dark">
                <option value="All">(все категории)</option>
                <option value="Satellites">🛰 Спутниковые</option>
                <option value="City">🏠 Городские</option>
                <option value="Road">🚗 Автомобильные</option>
                <option value="Bike">🚲 Велосипедные</option>
                <option value="Hike">⛺ Туристические</option>
                <option value="Topo">🌐 Топокарты</option>
                <option value="Winter">❄️ Зимние</option>
                <option value="Mountain">🏔️ Горные</option>
                <option value="Water">⚓️ Водные</option>
                <option value="Aviation">✈️ Авиационные</option>
                <option value="Info">📖 Справочные</option>
                <option value="Infrastructure">🚥 Инфраструктура</option>
                <option value="Hystoric">🏛 Исторические</option>
                <option value="Geology">⛏ Геологические</option>
                <option value="Print">🖨 Для печати</option>
                <option value="Other">📦 Разное</option>
                <option value="Overlay - Relief">⏹️ 🏔️ Слои - Рельеф</option>
                <option value="Overlay - Labels">⏹️ 🏷 Слои - Подписи</option>
                <option value="Overlay - Mobile coverage">⏹️ 📞 Слои - Покрытие связи</option>
            </select>

        </Container>
        
    )
}