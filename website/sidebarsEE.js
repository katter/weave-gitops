const sidebars = {
  enterprise: [
    {
      type: 'doc',
      id: 'intro-ee',
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'reference',
      label: 'REFERENCE',
    },
    {
      type: 'link',
      label: 'Getting Started',
      href: '/docs/getting-started/intro'
    },
    {
      type: 'link',
      label: 'Installation',
      href: '/docs/installation/weave-gitops-enterprise'
    },
    {
      type: 'category',
      label: 'Cluster Management',
      link: {
        type: 'doc',
        id: 'cluster-management/intro',
      },
      items: [
        'cluster-management/getting-started',
        'cluster-management/cluster-api-providers',
        'cluster-management/managing-existing-clusters',
        'cluster-management/provider-identities',
        'cluster-management/deleting-a-cluster',
        'cluster-management/profiles',
        'cluster-management/add-applications',
        'cluster-management/gitrepo-selection',
        'cluster-management/disable-capi',
      ],
    },
    {
      type: 'category',
      label: 'Pipelines',
      link: {
        type: 'doc',
        id: 'pipelines/intro',
      },
      items: [
        'pipelines/getting-started',
        'pipelines/authorization',
        'pipelines/promoting-applications',
        'pipelines/pipeline-templates',
        'pipelines/pipelines-with-jenkins',
        'pipelines/pipelines-with-tekton',
        {
          type: 'category',
          label: 'Reference',
          items: [
            {
              type: 'category',
              label: 'v1alpha1',
              items: [
                'pipelines/spec/v1alpha1/pipeline',
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Workspaces',
      link: {
        type: 'doc',
        id: 'workspaces/intro',
      },
      items: [
        'workspaces/multi-tenancy',
        'workspaces/view-workspaces',
      ],
    },
    {
      type: 'category',
      label: 'Policy',
      link: {
        type: 'doc',
        id: 'policy/intro',
      },
      items: [
        'policy/getting-started',
        'policy/weave-policy-profile',
        'policy/configuration',
        'policy/policy-set',
        'policy/policy-configuration',
        'policy/releases',
        'policy/commit-time-checks',
      ],
    },
    {
      type: 'category',
      label: 'Templates',
      link: {
        type: 'doc',
        id: 'gitops-templates/intro',
      },
      items: [
        'gitops-templates/quickstart-templates',
        {
          type: 'category',
          label: 'Creating Templates',
          link: {
            type: 'doc',
            id: 'gitops-templates/creating-templates',
          },
          items: [
            'gitops-templates/repo-rendered-paths',
            'gitops-templates/profiles',
            'gitops-templates/annotations',
            'gitops-templates/params',
            'gitops-templates/supported-langs',
            'gitops-templates/create-cluster-example',
            'gitops-templates/capd-example',
          ],
        },
        'gitops-templates/cli',
        'gitops-templates/versions',
      ],
    },
    {
      type: 'category',
      label: 'GitOpsSets',
      items: [
        'gitopssets/intro',
        'gitopssets/features',
        'gitopssets/list-generator',
        'gitopssets/git-generator',
        'gitopssets/matrix-generator',
        'gitopssets/pull-request-generator',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/deploying-capa',
        'guides/using-terraform-templates',
        'guides/delivery',
        'guides/flagger-manual-gating',
      ],
    },
    'releases',
  ],
};

module.exports = sidebars;
