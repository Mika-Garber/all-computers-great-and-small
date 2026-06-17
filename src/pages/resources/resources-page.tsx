import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloudIcon from '@mui/icons-material/Cloud';
import ScheduleIcon from '@mui/icons-material/Schedule';
import DownloadIcon from '@mui/icons-material/Download';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  getResourceHref,
  googleDriveFolders,
  hasResourceLink,
  howToSheets,
  presentations,
  resourcesIntro,
  type ResourceFile,
} from '../../content/resources-content';
import { brandColors } from '../../theme/theme';
import { pageSeoByPath } from '../../constants/seo';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { PageSection } from '../home/home-page.styled';
import {
  ContentWrap,
  IconWrap,
  ResourceCard,
  ResourceGrid,
  SectionPanel,
} from './resources-page.styled';

type ResourceBadge = 'PowerPoint' | 'PDF' | 'Google Drive' | 'Coming soon';

const downloadNote =
  'Downloads may open in your browser or save to your device, depending on your phone or computer settings.';

function getResourceBadge(item: ResourceFile): ResourceBadge {
  if (!hasResourceLink(item)) return 'Coming soon';
  if (item.externalUrl) return 'Google Drive';
  if (item.type === 'how-to') return 'PDF';
  return 'PowerPoint';
}

function badgeStyles(badge: ResourceBadge) {
  if (badge === 'Coming soon') {
    return { bgcolor: 'rgba(45, 45, 42, 0.1)', color: brandColors.charcoal };
  }
  if (badge === 'Google Drive') {
    return { bgcolor: 'rgba(5, 89, 181, 0.12)', color: brandColors.blue };
  }
  if (badge === 'PDF') {
    return { bgcolor: 'rgba(5, 89, 181, 0.12)', color: brandColors.blue };
  }
  return { bgcolor: 'rgba(232, 115, 42, 0.14)', color: brandColors.orangeDark };
}

function ResourceIcon({ item }: { item: ResourceFile }) {
  const badge = getResourceBadge(item);
  if (badge === 'PDF') return <PictureAsPdfIcon sx={{ fontSize: 28 }} />;
  if (badge === 'Google Drive') return <CloudIcon sx={{ fontSize: 28 }} />;
  if (badge === 'Coming soon') return <ScheduleIcon sx={{ fontSize: 28 }} />;
  return <SlideshowIcon sx={{ fontSize: 28 }} />;
}

function ResourceCardItem({ item }: { item: ResourceFile }) {
  const href = getResourceHref(item);
  const isAvailable = hasResourceLink(item);
  const badge = getResourceBadge(item);
  const badgeSx = badgeStyles(badge);

  return (
    <ResourceCard
      elevation={0}
      sx={
        isAvailable
          ? undefined
          : {
              bgcolor: 'rgba(45, 45, 42, 0.04)',
              border: '1px dashed rgba(45, 45, 42, 0.22)',
              boxShadow: 'none',
            }
      }
    >
      <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start', mb: isAvailable ? 2 : 1.5 }}>
        <IconWrap
          sx={
            isAvailable
              ? undefined
              : {
                  bgcolor: 'rgba(45, 45, 42, 0.08)',
                  color: 'text.secondary',
                }
          }
        >
          <ResourceIcon item={item} />
        </IconWrap>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            sx={{ alignItems: { sm: 'center' }, flexWrap: 'wrap', mb: 1 }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: '1.125rem',
                lineHeight: 1.4,
                color: isAvailable ? 'text.primary' : 'text.secondary',
              }}
            >
              {item.title}
            </Typography>
            <Chip
              label={badge}
              size="medium"
              sx={{
                fontWeight: 700,
                fontSize: '0.8125rem',
                height: 28,
                ...badgeSx,
              }}
            />
          </Stack>
          {item.description ? (
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: '1.0625rem', lineHeight: 1.65 }}
            >
              {item.description}
            </Typography>
          ) : null}
        </Box>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={1.5}
        sx={{ mt: 'auto', pt: 1 }}
      >
        {isAvailable ? (
          <>
            <CtaButton
              href={href}
              variant={item.externalUrl ? 'secondary' : 'primary'}
              size="small"
              download={!item.externalUrl}
            >
              <Box
                component="span"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
              >
                {item.externalUrl ? (
                  <>
                    <OpenInNewIcon sx={{ fontSize: 18 }} />
                    Open on Google Drive
                  </>
                ) : (
                  <>
                    <DownloadIcon sx={{ fontSize: 18 }} />
                    Download
                  </>
                )}
              </Box>
            </CtaButton>
            {item.type === 'how-to' && !item.externalUrl ? (
              <CtaButton href={href} variant="outline" size="small">
                <Box
                  component="span"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}
                >
                  <OpenInNewIcon sx={{ fontSize: 18 }} />
                  View in browser
                </Box>
              </CtaButton>
            ) : null}
          </>
        ) : (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: '1.0625rem', lineHeight: 1.6 }}
          >
            Not available for download yet. This presentation will be added to Google Drive soon.
          </Typography>
        )}
      </Stack>
    </ResourceCard>
  );
}

function ResourceList({
  items,
  singleColumn = false,
}: {
  items: ResourceFile[];
  singleColumn?: boolean;
}) {
  return (
    <ResourceGrid singleColumn={singleColumn}>
      {items.map((item) => (
        <Box key={item.title} sx={{ display: 'flex' }}>
          <ResourceCardItem item={item} />
        </Box>
      ))}
    </ResourceGrid>
  );
}

function toDriveFolderEmbedUrl(folderUrl: string): string {
  const folderMatch = folderUrl.match(/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch) {
    return `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#grid`;
  }
  return folderUrl;
}

function DriveFolderEmbed({ title, folderUrl }: { title: string; folderUrl: string }) {
  const embedUrl = toDriveFolderEmbedUrl(folderUrl);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 700 }}>
        {title}
      </Typography>
      <Box
        component="iframe"
        src={embedUrl}
        title={title}
        sx={{
          width: '100%',
          height: { xs: 360, md: 420 },
          border: '1px solid rgba(45, 45, 42, 0.12)',
          borderRadius: 2,
        }}
      />
    </Box>
  );
}

export function ResourcesPage() {
  const seo = pageSeoByPath['/resources'];
  const hasDrivePresentations = googleDriveFolders.presentations.length > 0;
  const hasDriveHowTos = googleDriveFolders.howTos.length > 0;

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero
        title="Presentations & How To Sheets"
        subtitle="Slides and printable guides from Theresa’s classes"
        compact
      />

      <PageSection sx={{ pt: { xs: 4, md: 5 }, pb: { xs: 6, md: 8 } }}>
        <ContentWrap>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              textAlign: 'center',
              mb: 2,
              px: { xs: 0, sm: 2 },
            }}
          >
            {resourcesIntro}
          </Typography>

          <Paper
            elevation={0}
            sx={{
              maxWidth: 720,
              mx: 'auto',
              mb: { xs: 4, md: 5 },
              px: 2.5,
              py: 2,
              textAlign: 'center',
              bgcolor: 'rgba(5, 89, 181, 0.06)',
              border: '1px solid rgba(5, 89, 181, 0.14)',
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.0625rem', lineHeight: 1.65 }}>
              {downloadNote}
            </Typography>
          </Paper>

          <Stack spacing={{ xs: 4, md: 5 }}>
            <SectionPanel elevation={0}>
              <SectionHeading
                title="Presentations"
                subtitle="PowerPoint slides from in-person and group sessions."
                align="left"
              />
              <ResourceList items={presentations} />
              {hasDrivePresentations ? (
                <DriveFolderEmbed
                  title="Browse all presentations on Google Drive"
                  folderUrl={googleDriveFolders.presentations}
                />
              ) : null}
            </SectionPanel>

            <SectionPanel
              elevation={0}
              sx={{
                py: { xs: 2.5, md: 3 },
                px: { xs: 2.5, md: 3 },
              }}
            >
              <SectionHeading
                title="How To Sheets"
                subtitle="Printable guides you can keep by your computer."
                align="left"
              />
              <ResourceList items={howToSheets} singleColumn />
              {hasDriveHowTos ? (
                <DriveFolderEmbed
                  title="Browse all how-to sheets on Google Drive"
                  folderUrl={googleDriveFolders.howTos}
                />
              ) : null}
            </SectionPanel>
          </Stack>
        </ContentWrap>
      </PageSection>
    </>
  );
}
