# planning_gantt_disable_cut/__manifest__.py

{
    'name': 'Planning Gantt Disable Cut',
    'version': '18.0.1.0.0',
    'summary': 'Disables the shift cut/split function in the Planning Gantt View.',
    'category': 'Services/Planning',
    'author': 'Humanytek',
    'license': 'AGPL-3',
    'depends': [
        'planning',
        'web_gantt', # Required since the Gantt view logic is here
    ],
    'assets': {
        'web.assets_backend_lazy': [
            'planning_gantt_disable_cut/static/src/js/planning_gantt_override.js',
        ],
    },
    'installable': True,
    'auto_install': False,
    'application': False,
}