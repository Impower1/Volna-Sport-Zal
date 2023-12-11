import React, { useState } from 'react';
import CoachesCard from '../../components/CoachesCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import InfiniteScroll from 'react-infinite-scroll-component';
import { coachList } from '../../data';
import './CoachesPage.scss';

function CoachesPage() {
  const [visibleCards, setVisibleCards] = useState(8); // Начальное количество видимых карточек

  const fetchMoreData = () => {
    // Загрузите больше данных (например, следующие 4 карточки)
    // Увеличьте visibleCards на количество карточек, которые вы хотите загрузить
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
    setTimeout(()=>{
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
    }, 300)
    setTimeout(()=>{
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
    }, 600)
    setTimeout(()=>{
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 1);
    }, 900)
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="s1 coach-s1">
          <p>
          Самое главное, у людей, работающих в Волне - требования, которые они предъявляют своей профессии. Эти требования полностью совпадают с теми внутренними требованиями, которые каждый человек предъявляет самому себе. Тогда каждое достижение клиента, каждый шаг к желаемому результату, приносит удовольствие и радость не только клиенту, но и тренеру. Волна не работает со случайными людьми, наши тренеры - это и наше лицо и наша гордость.
          </p>
          <InfiniteScroll
            dataLength={visibleCards}
            next={fetchMoreData}
            hasMore={visibleCards < coachList.length} // Проверьте, есть ли еще карточки для загрузки
          >
            <div className="coaches-cards">
              {coachList.slice(0, visibleCards).map((obj, index) => (
                <CoachesCard key={index} img={obj.img} name={obj.name} direction={obj.direction} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CoachesPage;
