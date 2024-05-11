// eslint-disable-next-line no-unused-vars
import { CommonFieldTypes, SitecoreIcon, Manifest } from '@sitecore-jss/sitecore-jss-dev-tools';

/**
 * Adds the StudentProfile component to the disconnected manifest.
 * This function is invoked by convention (*.sitecore.ts) when 'jss manifest' is run.
 * @param {Manifest} manifest Manifest instance to add components to
 */
export default function StudentProfile(manifest: Manifest): void {
  manifest.addComponent({
    name: 'StudentProfile',
    icon: SitecoreIcon.DocumentTag,
    fields: [
      { name: 'StudentId', type: CommonFieldTypes.SingleLineText },
      { name: 'StudentName', type: CommonFieldTypes.SingleLineText },
      { name: 'StudentProfilePic', type: CommonFieldTypes.Image },
      { name: 'StudentDob', type: CommonFieldTypes.Date },
    ],
    /*
    If the component implementation uses <Placeholder> or withPlaceholder to expose a placeholder,
    register it here, or components added to that placeholder will not be returned by Sitecore:
    placeholders: ['exposed-placeholder-name']
    */
  });
}
