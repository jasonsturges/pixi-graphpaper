/**
 * Parse value to find integer color
 *
 * Supports:
 *   - Integer, either radix 10 or 16
 *   - CSS #abc123 hexadecimal strings
 *   - CSS rgba() strings
 */
export function parseColor(value: number | string | undefined): number {
  // Undefined
  if (!value) return 0xff00ff;

  // Integer with radix 10 or 16
  if (Number.isInteger(value)) return <number>value;

  // CSS Hexadecimal String
  if (value && (<string>value).charAt(0) === "#") {
    return parseInt((<string>value).substring(1), 16);
  }

  // CSS rgba()
  if ((<string>value).startsWith("rgba")) {
    let re = /^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;

    if (re.test(<string>value)) {
      const m = (<string>value).match(re);
      return (
        ((parseInt(<string>m?.[1]) & 0xff) << 16) | //
        ((parseInt(<string>m?.[2]) & 0xff) << 8) | //
        (parseInt(<string>m?.[3]) & 0xff)
      );
    }
  }

  // TODO: hsla()
  if ((<string>value).startsWith("hsla")) {
    console.warn("HSLA color not supported (yet)");
  }

  // Failover
  return 0xff00ff;
}
