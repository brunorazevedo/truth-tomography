import {
  AccordionSection,
  Container,
  Wrap,
  Dropdown,
  View,
  WrapperView,
  ViewInfo
} from "./styles";
import { Data } from "./Data";
import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiMovieLine,
  RiStickyNoteLine,
} from "react-icons/ri";

import { Dialog } from 'primereact/dialog';
import { useCallback } from "react";

import Controls from "../Controls";

const Accordion = () => {
  const [clicked, setClicked] = useState(null);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState({})

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const showContentModal = useCallback((content) => {
    setVisible(true)
    setContent(content)
  }, [])

  const header = <h3> {content.reference} </h3>

  return (
    <AccordionSection>
      <Container>
        <>
          <Dialog 
            header={header} 
            visible={visible} 
            style={{ maxWidth: '940px', width: "100%", margin: "0 10px" }} 
            onHide={() => setVisible(false)}
          >
            <Controls content={content} />
          </Dialog>

          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.title}</h1>
                  <span>
                    {clicked === index ? (
                          <RiArrowDownSLine />
                    ) : (
                      <RiArrowUpSLine />
                    )}
                  </span>
                </Wrap>
                {clicked == index ? (
                  <Dropdown>
                    <p>{item.textInfo}</p>
                    <WrapperView>
                      <View onClick={() => showContentModal({ control: 'video', file: item.file, reference: item.title })}>
                        <ViewInfo>
                          <RiMovieLine fontSize={32} />
                          <span>DINÂMICA</span>
                          <p>em video</p>
                        </ViewInfo>
                      </View>

                      <View onClick={() => showContentModal({ control: 'pdf', file: item.file, reference: item.title })}>
                        <ViewInfo>
                          <RiStickyNoteLine fontSize={32} />
                          <span>ESTÁTICA</span>
                          <p>em texto</p>
                        </ViewInfo>
                      </View>
                    </WrapperView>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </>
      </Container>
    </AccordionSection>
  );
};

export default Accordion;
