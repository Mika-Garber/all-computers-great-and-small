import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { columnPublications, columnsIntro, sortArticlesByDateDesc } from '../../content/columns-content';
import { pageSeoByPath } from '../../constants/seo';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { PageSection } from '../home/home-page.styled';
import {
  ArticleCard,
  ArticleGrid,
  ContentWrap,
  PublicationPanel,
} from './columns-page.styled';

export function ColumnsPage() {
  const seo = pageSeoByPath['/columns'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero title="My Columns" subtitle="Technology writing for the North Shore" compact />

      <PageSection sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 6, md: 8 } }}>
        <ContentWrap>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              textAlign: 'center',
              mb: { xs: 4, md: 5 },
              px: { xs: 0, sm: 2 },
            }}
          >
            {columnsIntro}
          </Typography>

          <Stack spacing={{ xs: 4, md: 5 }}>
            {columnPublications.map((publication) => (
              <PublicationPanel key={publication.name} elevation={0}>
                <SectionHeading
                  title={publication.name}
                  subtitle={publication.description}
                  align="left"
                />

                <Box sx={{ mb: 2.5 }}>
                  <CtaButton
                    href={publication.authorUrl}
                    variant="outline"
                    size="small"
                  >
                    <Box
                      component="span"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
                    >
                      View all on {publication.name}
                      <OpenInNewIcon sx={{ fontSize: 18 }} />
                    </Box>
                  </CtaButton>
                </Box>

                <ArticleGrid>
                  {sortArticlesByDateDesc(publication.articles).map((article) => (
                    <ArticleCard key={article.url} elevation={0}>
                      {article.date ? (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ fontWeight: 600, mb: 0.75 }}
                        >
                          {article.date}
                        </Typography>
                      ) : null}
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 700,
                          fontSize: '1.0625rem',
                          lineHeight: 1.4,
                          flex: 1,
                          mb: 1.5,
                        }}
                      >
                        {article.title}
                      </Typography>
                      <Box sx={{ mt: 'auto' }}>
                        <CtaButton href={article.url} variant="outline" size="small">
                          <Box
                            component="span"
                            sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5 }}
                          >
                            Read article
                            <OpenInNewIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </CtaButton>
                      </Box>
                    </ArticleCard>
                  ))}
                </ArticleGrid>
              </PublicationPanel>
            ))}
          </Stack>
        </ContentWrap>
      </PageSection>
    </>
  );
}
