import { ImagePlaceholder } from './ui/image-placeholder';
import { Icon } from './ui/icon';
import type { TeamMember } from '@/content/team';

export function TeamCard({ name, role, linkedin, avatar }: TeamMember) {
  return (
    <div className="ds-teamcard">
      <div className="ds-media" style={{ maxWidth: '220px' }}>
        <ImagePlaceholder
          ratio="1x1"
          label="Portrait"
          src={avatar}
          alt={avatar ? `Illustrated avatar of ${name}, ${role}` : undefined}
          sizes="220px"
        />
      </div>
      <h3 className="h5">{name}</h3>
      <span className="small text-text-muted">{role}</span>
      {/* Shown only once a real profile URL is set in content/team.ts. */}
      {linkedin && (
        <a
          href={linkedin}
          aria-label={`${name} on LinkedIn`}
          className="ds-social"
          style={{ width: 44, height: 44 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" size={16} />
        </a>
      )}
    </div>
  );
}
