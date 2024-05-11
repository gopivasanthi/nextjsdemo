// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the EventDetails component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function EventDetails(manifest: Manifest): void {
  manifest.addComponent({
    name: 'EventDetails',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'EventName', type: CommonFieldTypes.SingleLineText },
      { name: 'EventDateandTime', type: CommonFieldTypes.SingleLineText },
      { name: 'EventDuration', type: CommonFieldTypes.SingleLineText },
      { name: 'StudentCoordinator', type: CommonFieldTypes.GeneralLink },
      { name: 'EventBannerImage', type: CommonFieldTypes.Image },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
