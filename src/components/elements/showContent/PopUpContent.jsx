import { useContext } from "react";
import { MainContext } from '../../Main';
import './style.css';

function PopUpContent() {

    const { setCreateContent, nameContent, setNameContent, contentAbout, setContentAbout, displayContent } = useContext(MainContext);
    

    function removeContent(e) {

        if (e && e.target.className !=='show__content' && e.target.className !=='show__content_btn-remove') return;
        setCreateContent(false);
        setNameContent('');
        setContentAbout('');
    }

    function ShowContent() {
        if (!nameContent && !contentAbout) return;
        let  whichContent, content, contentSrc, contentTitle, contentAlt, src;
        if (nameContent === 'video') {
            whichContent = displayContent.find(item => item.video);
            whichContent = whichContent.video;
            content = whichContent.filter(elem => {
                return elem.name === contentAbout;
            })[0];
            contentSrc = content.src;
            contentTitle = content.title;
            src = contentSrc.split('/').pop();
            if (!whichContent || !content || !contentSrc) return;
            return  (<><iframe className='show__content__elem' width="100%" height="auto" src={`https://www.youtube.com/embed/${src}`} title={contentTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowFullScreen></iframe></>);
        } else if (nameContent === 'pictureEvent1') {

            whichContent = displayContent.find(item => item.pictureEvent1);
            if (!whichContent) return;
            console.log(whichContent)
            whichContent = whichContent.pictureEvent1;
            content = whichContent.filter(elem => {
                return elem.name === contentAbout;
            })[0];
            contentSrc = content.href;
            contentAlt = content.alt;
            if (!whichContent || !content || !contentSrc) return;

            return  (<><img className='show__content__elem'src={contentSrc} alt={contentAlt}/></>);
        } else if (nameContent === 'pictureEvent2') {

            whichContent = displayContent.find(item => item.pictureEvent2);
            if (!whichContent) return;
            console.log(whichContent)
            whichContent = whichContent.pictureEvent2;
            content = whichContent.filter(elem => {
                return elem.name === contentAbout;
            })[0];
            contentSrc = content.href;
            contentAlt = content.alt;
            if (!whichContent || !content || !contentSrc) return;

            return  (<><img className='show__content__elem'src={contentSrc} alt={contentAlt}/></>);
        }
    }

	return (
			<div className="show__content" onClick={removeContent}>
                <div className="show__content__wrapper">
                    <ShowContent  />
                    <button className="show__content_btn-remove" onClick={removeContent} >x</button>

                </div>
            </div>

	);
}

export default PopUpContent;