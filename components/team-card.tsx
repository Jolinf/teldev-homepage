import { ImagePlaceholder } from './ui/image-placeholder';
import { Icon } from './ui/icon';

export function TeamCard({ name, role, bio, linkedin }: { name: string; role: string; bio: string; linkedin?: string }) {
  return (
    <div className="ds-teamcard">
      <div className="ds-media" style={{ maxWidth: '220px' }}>
        <ImagePlaceholder ratio="1x1" label="Portrait" />
      </div>
      <h4 className="h5">{name}</h4>
      <span className="small text-text-muted">{role}</span>
      <p className="small">{bio}</p>
      <a href={linkedin ?? '#'} aria-label={`${name} on LinkedIn`} className="ds-social" style={{ width: 36, height: 36 }}>
        <Icon name="linkedin" size={16} />
      </a>
    </div>
  );
}
