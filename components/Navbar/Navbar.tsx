import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
    IconNotes,
    IconCalendarStats,
    IconGauge,
    IconPresentationAnalytics,
    IconFileAnalytics,
    IconAdjustments,
    IconLock,
} from '@tabler/icons';
import { Userbuttons } from './Userbuttons';
import { LinksGroup } from './NavbarLinkGroup';
import { Logo } from './Logo';

const mockdata = [
    { label: 'Dashboard', icon: IconGauge, link: '/' },
    {
        label: 'Learn',
        icon: IconNotes,
        initiallyOpened: true,
        links: [
            { label: 'Overview', link: '/' },
            { label: 'Khan Academy', link: '/' },
            { label: 'CourseEra', link: '/' },
            { label: 'Canvas', link: '/' },
        ],
    },
    {
        label: 'Inform',
        icon: IconCalendarStats,
        links: [
            { label: 'RSS Feed Group #1', link: '/' },
            { label: 'RSS Feed Group #2', link: '/' },
            { label: 'RSS Feed Group #3', link: '/' },
        ],
    },
    { label: 'Socialize', icon: IconPresentationAnalytics },
    { label: 'Entertain', icon: IconFileAnalytics },
    { label: 'Settings', icon: IconAdjustments },
];

const useStyles = createStyles((theme) => ({
    navbar: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        paddingBottom: 0,
    },

    header: {
        padding: theme.spacing.md,
        paddingTop: 0,
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottom: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },

    links: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
    },

    linksInner: {
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
    },

    footer: {
        marginLeft: -theme.spacing.md,
        marginRight: -theme.spacing.md,
        borderTop: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
        }`,
    },
}));

export function NavbarNested() {
    const { classes } = useStyles();
    const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

    return (
        <Navbar width={{ sm: 300 }} p="md" className={classes.navbar}>
            <Navbar.Section className={classes.header}>
                <Group position="apart">
                    <Logo width={120} />
                    <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
                </Group>
            </Navbar.Section>

            <Navbar.Section grow className={classes.links} component={ScrollArea}>
                <div className={classes.linksInner}>{links}</div>
            </Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Userbuttons
                    image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
                    name="Ann Nullpointer"
                    email="anullpointer@yahoo.com"
                />
            </Navbar.Section>
        </Navbar>
    );
}
