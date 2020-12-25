    $('.gnb li').hover(function(){
        $(this).find('.subGnb').stop().fadeToggle(300);
    })

    $('.all__menu').click(function(){
        if($('.menuView').hasClass('.active')){
            $('.menuView').stop().slideUp();
            $('.menuView').removeClass('.active');
        }else{
            $('.menuView').stop().slideDown();
            $('.menuView').addClass('.active');
        }
    });

    const noticeBtn = $('.notice__btn');
    const galleryBtn = $('.gallery__btn');
    const galleryList = $('.gallery__list');
    const noticeList = $('.notice__list');

    $(noticeBtn).click(function(){
        let noticeIndex = $(noticeBtn).index(this);
        $(noticeList).hide();
        if($(this).hasClass('active')){

        }else{
            $(this).addClass('active');
            $(noticeBtn).not(this).removeClass('active');
            $(noticeList).eq(noticeIndex).show();
        }

    });

    $(galleryBtn).click(function(){
        let galleryIndex = $(galleryBtn).index(this);
        $(galleryList).hide();
        if($(this).hasClass('active')){

        }else{
            $(this).addClass('active');
            $(galleryBtn).not(this).removeClass('active');
            $(galleryList).eq(galleryIndex).show();
        }
    });


    let date = new Date();

    const renderCalendar = () => {
      const viewYear = date.getFullYear();
      const viewMonth = date.getMonth();
    
      // year-month 채우기
      document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;
    
      // 지난 달 마지막 Date, 이번 달 마지막 Date
      const prevLast = new Date(viewYear, viewMonth, 0);
      const thisLast = new Date(viewYear, viewMonth + 1, 0);
    
      const PLDate = prevLast.getDate();
      const PLDay = prevLast.getDay();
    
      const TLDate = thisLast.getDate();
      const TLDay = thisLast.getDay();
    
      // Dates 기본 배열들
      const prevDates = [];
      const thisDates = [...Array(TLDate + 1).keys()].slice(1);
      const nextDates = [];
    
      // prevDates 계산
      if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
          prevDates.unshift(PLDate - i);
        }
      }
    
      // nextDates 계산
      for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i)
      }
    
      // Dates 합치기
      const dates = prevDates.concat(thisDates, nextDates);
    
        // Dates 정리
        const firstDateIndex = dates.indexOf(1);
        const lastDateIndex = dates.lastIndexOf(TLDate);
        dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1
                            ? 'this'
                            : 'other';

        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
        })
    
      // Dates 그리기
      document.querySelector('.dates').innerHTML = dates.join('');

    // 오늘 날짜 그리기
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
        if (+date.innerText === today.getDate()) {
            date.classList.add('today');
            break;
            }
        }
    }
    }
    
    renderCalendar();


const slide = $('.slide');
const slider = $('.slider');

$(function(){
    let clone = $(slide).eq(0).clone();
    $(slider).append(clone);
    let i = 0;
    setInterval(function(){
        var w = $(slide).width();
        
        if(i == 4){
            i=0;
            $(slider).css("margin-left",0);
        }
        i++;
        
        $(slider).stop().animate({"margin-left":-i*w},600);
    },3000);
});