import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import type { TutoringTopic } from '../../content/site-content';
import { TopicGridRoot, TopicPaper } from './topic-grid.styled';

interface TopicGridProps {
  topics: TutoringTopic[];
}

export function TopicGrid({ topics }: TopicGridProps) {
  return (
    <TopicGridRoot>
      {topics.map((topic) => (
        <TopicPaper key={topic.title} elevation={0}>
          <Stack spacing={1}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
              {topic.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {topic.description}
            </Typography>
          </Stack>
        </TopicPaper>
      ))}
    </TopicGridRoot>
  );
}
