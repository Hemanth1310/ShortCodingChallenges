import React, { useState } from 'react'
import './Accordion.css'

const Accordion = () => {
    const [flag,setFlag] = useState(true)

    const TextCss = flag?{overflow:'hidden',height:'100px'}:null
  return (
    <div className='Accordion-container'>
        <h1>Accordion</h1>
        <div className='accordion-text-component'>
            <p style={TextCss} className=''>The intersection of physical and human geography gives rise to Environmental Geography, a critically important field that 
                examines the spatial aspects of interactions between humans and the natural world. 
                Environmental geographers understand that human societies are dominant agents of change in nature, and conversely, 
                environmental factors profoundly affect human populations. This field is essential for assessing the impact of human 
                presence on the environment, measuring the results of human activity on natural landforms and cycles, and developing sustainable
                 solutions to environmental problems like climate change, resource depletion, and pollution. They contribute to policy development,
                  conservation efforts, and environmental justice initiatives, playing a vital role in promoting environmental awareness and action.
                The importance of geography extends far beyond academic curiosity; it is fundamental to understanding our interconnected world 
                and addressing its most pressing challenges. Geography provides a framework for comprehending globalization, revealing how regions, 
                economies, and cultures are intertwined. It fosters spatial awareness, enabling individuals to navigate complex environments 
                and interpret global events in context. By studying geography, we gain insights into the historical development of societies, 
                recognizing how physical landscapes have shaped human migration, settlement patterns, and economic activities throughout history. 
                The availability of natural resources, climate, and topography directly influence resource availability, settlement patterns, 
                and cultural exchange, highlighting geography's crucial role in shaping human societies. Looking to the future, geographical 
                studies are becoming increasingly relevant. With advancements in technology such as GIS, remote sensing, and big data analytics, 
                geographers are equipped with powerful tools to analyze complex spatial data and model future scenarios. The discipline is increasingly 
                focusing on "geographies of the future," explicitly addressing how forward-looking choices and human agency affect spatial phenomena 
                like infrastructure, mobility, and urban development. This involves critical examination of how institutions and actors construct 
                futures to make the present controllable through "anticipatory action," such as planning and preparing for environmental changes or social transformations.</p>
            {/* <div className='accordion-text-padding'>

            </div> */}
            
        </div>
        <button className='accordion-button' onClick={()=>setFlag(!flag)}>{flag?'ShowMore':'Hide'}</button>
  </div>
  )
}

export default Accordion