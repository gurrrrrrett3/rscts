
// These types are FUCKED because of the lib.dom declarations.

/**
 * Library for crpytographic functions.
 */
declare module "crypto" {
  let exports: {
    /**
     * Get the MD5 hash of a string of bytes.
     * @param input The data to hash.
     * @returns The hashed data.
     */
    md5: (input: string) => string;

    /**
     * Get the SHA-256 hash of a string of bytes.
     * @param input The data to hash.
     * @returns The hashed data.
     */
    sha256: (input: string) => string;
  };
}
