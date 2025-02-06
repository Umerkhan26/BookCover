import { 
  Container, 
  Example, 
  ExampleSection, 
  ImageLabel, 
  ImageSection, 
  ImageWrapper, 
  ListItem, 
  PointsList, 
  StyledImage, 
  TextSection 
} from './RedesignExamples.styles';

import { Heading } from './RedesignForm.styles';

// Define the expected structure for the example data
interface ExampleItem {
  before: string;
  after?: string;
  points: string[];
}

// Define props for the reusable component
interface RedesignExamplesProps {
  heading: string;
  examples: ExampleItem[];
}

const RedesignExamples: React.FC<RedesignExamplesProps> = ({ heading, examples }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <ExampleSection>
        {examples.map((example, index) => (
          <Example key={index} reverse={index % 2 !== 0}>
            <TextSection>
              <PointsList>
                {example.points.map((point, i) => (
                  <ListItem key={i}>{point}</ListItem>
                ))}
              </PointsList>
            </TextSection>
            <ImageSection>
              <ImageWrapper>
                <StyledImage src={example.before} alt="Before" />
                <ImageLabel>Before</ImageLabel>
              </ImageWrapper>
              {example.after && (
                <ImageWrapper>
                  {/* <StyledImage src={example.after} alt="After" /> */}
                  {/* <ImageLabel>After</ImageLabel> */}
                </ImageWrapper>
              )}
            </ImageSection>
          </Example>
        ))}
      </ExampleSection>
    </Container>
  );
};

export default RedesignExamples;
