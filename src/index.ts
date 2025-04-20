import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the alchemycanvas extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'alchemycanvas:plugin',
  description: 'AlchemyCanvas is a JupyterLab extension for building AI/ML workflows through a magical node-based interface.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension alchemycanvas is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('alchemycanvas settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for alchemycanvas.', reason);
        });
    }
  }
};

export default plugin;
