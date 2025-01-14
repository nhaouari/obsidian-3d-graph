// Helper to access the current theme in TS
export default class ObsidianTheme {
	backgroundPrimary: string;
	backgroundPrimaryAlt: string;
	backgroundSecondary: string;
	backgroundSecondaryAlt: string;

	backgroundModifierBorder: string;
	backgroundModifierSuccess: string;
	backgroundModifierError: string;

	textAccent: string;
	textAccentHover: string;

	textNormal: string;
	textMuted: string;
	textFaint: string;

	interactiveAccent: string;
	interactiveAccentHover: string;

	// some others missing, but not needed currently

	constructor(root: HTMLElement) {
		this.backgroundPrimary = getComputedStyle(root)
			.getPropertyValue("--background-primary")
			.trim();
		this.backgroundPrimaryAlt = getComputedStyle(root)
			.getPropertyValue("--background-primary-alt")
			.trim();
		this.backgroundSecondary = getComputedStyle(root)
			.getPropertyValue("--background-secondary")
			.trim();
		this.backgroundSecondaryAlt = getComputedStyle(root)
			.getPropertyValue("--background-secondary-alt")
			.trim();

		this.backgroundModifierBorder = getComputedStyle(root)
			.getPropertyValue("--background-modifier-border")
			.trim();
		this.backgroundModifierSuccess = getComputedStyle(root)
			.getPropertyValue("--background-modifier-success")
			.trim();
		this.backgroundModifierError = getComputedStyle(root)
			.getPropertyValue("--background-modifier-error")
			.trim();

		this.textAccent = getComputedStyle(root)
			.getPropertyValue("--text-accent")
			.trim();
		this.textAccentHover = getComputedStyle(root)
			.getPropertyValue("--text-accent-hover")
			.trim();

		this.textNormal = getComputedStyle(root)
			.getPropertyValue("--text-normal")
			.trim();
		this.textMuted = getComputedStyle(root)
			.getPropertyValue("--text-muted")
			.trim();
		this.textFaint = getComputedStyle(root)
			.getPropertyValue("--text-faint")
			.trim();

		this.interactiveAccent = getComputedStyle(root)
			.getPropertyValue("--interactive-accent")
			.trim();
		this.interactiveAccentHover = getComputedStyle(root)
			.getPropertyValue("--interactive-accent-hover")
			.trim();
	}
}
