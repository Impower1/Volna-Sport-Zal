import ChartExample from "../../components/ChartExample";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Table from "../../components/Table";
import './SchedulePage.scss'

function SchedulePage() {
    return ( <>
        <Header/>
        <div className="wrapper">
            <div className="s1">
                <h1 className="schedule-h">Расписание занятий</h1>
                <p className="schedule-p">В сетке расписания ниже представлены одновременно все виды занятий, проходящих в Дворце спорта Волна (и детские и взрослые).</p>
                <div className="table">
                    <Table/>
                </div>
            </div>
        </div>
        <div className="wrapper wrapper-s2">
            <div className="s2">
                <h1>Описание занятий</h1>
                <h2>Фитнес</h2>
                <div className="for-line">
                    <h3>Аэробно-силовой</h3>
                    <h4>Body-sculpt</h4>
                    <p>иловая разновидность аэробики, выполняется в активном режиме и направлена на формирование красивого и привлекательного рельефа. На уроке используются гантели, бодибары и резиновые амортизаторы.</p>
                    <h3>Специальные классы</h3>
                    <h4>Body-form</h4>
                    <p>Оздоровительно-тренировочный комплекс, включающий в себя дыхательные упражнения, вытяжение позвоночника, комплекс специальных упражнений на основные группы мышц, в конце занятий – релаксация. Комплекс предназначен для всех уровней подготовленности. Для занятий нужна простая спортивная форма и чешки (или носочки)</p>
                    <h4>Fit-Ball</h4>
                    <p>Урок на больших мячах. Способствует устранению дисбаланса мышечного тонуса, созданию сильного мышечного корсета, формированию правильной осанки, снижению напряжения с позвоночника за счет его выравнивания, вытягивания и укрепления окружающих позвоночных мышц</p>
                    <h4>Pilates</h4>
                    <p>Полный комплексный подход, обеспечивающий баланс всего тела. Данный урок заключается в осознанном выполнении упражнений в сочетании с правильным дыханием. Формирует мышечный корсет: глубокие мышцы спины, мышцы брюшного пресса и малого таза, улучшает осанку и общее состояние позвоночника. Развивает чувство равновесия, делает движения более гармоничными, а фигуру стройной</p>
                    <h4>Stretch</h4>
                    <p>Это гимнастика растяжения мышц, связок, сухожилий и суставов. Благодаря несложным упражнениям, Вы всегда будете в хорошей физической форме. Ваша осанка улучшится, а мышцы станут гибкими, суставы подвижными.</p>
                    <h4>Step-n-sculpt</h4>
                    <p>Степ-аэробика и силовые упражнения, темп и зажигательная музыка, если Вы хотите получить хорошую кардио и силовую нагрузку на одном занятии, тогда этот класс именно для Вас. Сочетание степ-аэробики и силовых упражнений на все группы мышц помогут Вам в формировании красивой спортивной фигуры в любом возрасте</p>
                </div>
                <h2>Школа плавания (взрослые)</h2>
                <div className="for-line">
                    <h4>Aqua-Boot camp (Занятие только в воде)</h4>
                    <p>Aqua boot camp - это методика не просто упражнений, которые рекомендуют новичкам для похудения, а интенсивная, интервальная нагрузка. Основная цель заключается в укреплении всех групп мышц и постепенном снижении лишнего веса.Формат урока: 1. В расписании указано время прохода 2. Через 30 минут после прохода начинается урок4. Длительность урока 45 минут</p>
                    <h4>Школа плавания (Взрослые), Водное поло, Общий уровень</h4>
                    <p>Обучение элементам игры в водное поло. Изучение техники владения мячом. Ознакомление с тактикой игры. Игра в любительское водное поло.Формат урока:1. В расписании указано время прохода2. Выход на воду через 25 минут после прохода3. Длительность урока 1 час</p>
                    <h4>Школа плавания (Взрослые), Начальный уровень</h4>
                    <p>Последовательное изучение техники дыхания, скольжения, всех спортивных способов плавания (баттерфляй, кроль на спине, брасс, кроль на груди) Формат урока:1. В расписании указано время прохода2. Через 30 минут после прохода начинается урок4. Длительность урока 45 минут</p>
                    <h4>Школа плавания (взрослые), Общий уровень</h4>
                    <p>Последовательное изучение техники дыхания, скольжения, всех спортивных способов плавания (баттерфляй, кроль на спине, брасс, кроль на груди) Формат урока:1. В расписании указано время прохода2. Через 30 минут после прохода начинается урок4. Длительность урока 45 минут</p>
                    <h4>Школа плавания (взрослые), Спортивная тренировка</h4>
                    <p>Тренировка направлена на развитие скоростной выносливости в бассейне.Формат урока:1. В расписании указано время прохода2. Через 30 минут после прохода начинается урок4. Длительность урока 45 минут</p>
                    <h4>Школа плавания (Взрослые), Техника совершенствования</h4>
                    <p>Последовательное изучение техники дыхания, скольжения, стартов и поворотов, всех спортивных способов плавания (баттерфляй, кроль на спине, брасс, кроль на груди). Формат урока:1. В расписании указано время прохода2. Через 30 минут после прохода начинается урок4. Длительность урока 45 минут</p>
                    <h4>Школа плавания (Взрослые), Техника совершенствования (+занятие в разминочном зале)</h4>
                    <p>Тренировка направлена на развитие скоростной выносливости в бассейне.Формат урока:1. В расписании указано время прохода2. Через 30 минут после прохода начинается урок3. Занятие в зале 45 минут4. Длительность занятия в воде 45 минут</p>
                </div>
            </div>
        </div>
        <div className="wrapper">
            <div className="s3">
                <h1>Комфортное время для посещения</h1>
                <p>Мы заботимся о каждом посетителе нашего центра, поэтому подготовили для вас график, исходя из которого Вы можете выбрать для себя комфортное время посещения как в будни, так и в выходные</p>
                <div className="graphics">
                    <ChartExample/>
                </div>
            </div>
        </div>
    <Footer/>
    </> );
}

export default SchedulePage;