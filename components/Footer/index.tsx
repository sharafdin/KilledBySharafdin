import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { FC } from "react";

// Import Styled Components
import { FlexWrap, FooterContainer } from "components/Footer/Footer.atoms";
import Link from "next/link";

const SocialLink: FC<{ url: string; imgSrc: string; altText: string }> = ({
  url,
  imgSrc,
  altText,
}) => {
  const style = {
    border: "none",
  };

  return (
    <Link href={url} passHref>
      <a
        css={{
          border: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          css={{
            width: "24px",
            height: "24px",
          }}
          width="24px"
          height="24px"
          src={imgSrc}
          alt={altText}
        />
      </a>
    </Link>
  );
};

const CopyNotice = styled.div(() =>
  css({
    fontSize: "0.75em",
    margin: "30px 0 20px 0",
    textAlign: "center",
  })
);

const Title = styled.div(() =>
  css({
    color: "#fafafa",
    fontSize: "2.5em",
    fontWeight: "lighter",
  })
);

const FooterTitle = styled.div(() =>
  css({
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
  })
);

const SocialWrapper = styled.div(() =>
  css({
    display: "flex",
    justifyContent: "center",
    padding: "15px 0",

    ["a"]: {
      display: "block",
      margin: "0 10px",
    },
  })
);

const Footer = () => (
  <>
    <FooterContainer>
      <FlexWrap>
        <FooterTitle>
          <div
            css={{
              marginRight: "10px",
            }}
          >
            <img
              height="60px"
              width="60px"
              src="https://raw.githubusercontent.com/sharafdin/KilledBySharafdin/3dbe047be82bf047d1c56a53d3ffe1293859d6b4/assets/tombstone-alt.svg"
              alt="Tombstone"
            />
          </div>
          <Title>Killed by Sharafdin</Title>
        </FooterTitle>
        <div>
          <p>
            Killed by Sharafdin is an open-source archive of discontinued
            projects, tools, and ideas by Sharafdin. This list provides a
            factual history of each retired project, preserving its purpose and
            the story behind its development and eventual shutdown.
          </p>
          <p>
            This project is derived from Killed By Google by&nbsp;
            <a
              href="https://codyogden.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cody Ogden
            </a>
            .
          </p>
          <p>
            Curious about a project, want to collaborate, or have some sharp
            feedback?
            <br />
            Reach out at&nbsp;
            <a href="mailto:killedby@sharafdin.com">killedby@sharafdin.com</a>.
          </p>
        </div>
        <CopyNotice>
          <a href="https://github.com/sharafdin/killedbysharafdin/blob/main/LICENSE">
            &copy; {new Date().getFullYear()} Mr Sharafdin.
          </a>
        </CopyNotice>
        <SocialWrapper>
          <SocialLink
            url="https://twitter.com/isasharafdin"
            altText="Twitter"
            imgSrc="https://raw.githubusercontent.com/sharafdin/KilledBySharafdin/3dbe047be82bf047d1c56a53d3ffe1293859d6b4/assets/twitter.svg"
          />
          <SocialLink
            url="https://github.com/sharafdin/killedbysharafdin"
            altText="GitHub"
            imgSrc="https://raw.githubusercontent.com/sharafdin/KilledBySharafdin/3dbe047be82bf047d1c56a53d3ffe1293859d6b4/assets/github.svg"
          />
        </SocialWrapper>
      </FlexWrap>
    </FooterContainer>
  </>
);
export default Footer;
