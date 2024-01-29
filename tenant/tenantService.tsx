
  
  export enum TenantEnum {
    princeGeorge = 'princeGeorge',
    mackenzie = 'mackenzie',
    // Add more tenants as needed
  }
  
  export class TenantService {
  private static tenantConfig = {
    princeGeorge: {
      theme: {
        primaryColor: '#0e1c39',
        secondaryColor: '#2794d0',
        headerTextColor: 'white',
        fontFamily: 'Arial', 
        fontWeight: 'bold', 
      },
      mapDetails: {
        startingLong: '-122.1234',
        startingLat: '54.1234'
      },
      appBarTitle: 'Prince George Trails',
      apiEndpoint: 'https://api.default-tenant.com',
    },
    //
    //
    //
    mackenzie: {
      theme: {
        primaryColor: '#788e37',
        secondaryColor: '#a9bf5f',
        headerTextColor: 'white'
      },
      mapDetails: {
        startingLong: '-122.1234',
        startingLat: '54.1234'
      },
      appBarTitle: 'Mackenzie Trails',
      apiEndpoint: 'https://api.another-tenant.com',
    },
    // Add more tenants as needed
  };

  static getThemeForTenant(tenant: TenantEnum) {
    return this.tenantConfig[tenant]?.theme
  }

  static getTitleForTenant(tenant: TenantEnum) {
    return this.tenantConfig[tenant]?.appBarTitle
  }

  static getApiEndpointForTenant(tenant: TenantEnum) {
    return this.tenantConfig[tenant]?.apiEndpoint
  }
}
