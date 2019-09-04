export class myweather{
  AdministrativeArea: {
    ID: string;
    LocalizedName: string;
  };
  Temperature: {
    Imperial:{
      Unit: string;
      UnitType: number;
      Value: number;
    }
    Metric:{
      Unit: string;
      UnitType: number;
      Value: number;
    }
  };
  DailyForecasts:{
    Day:{
      Icon: string;
      IconPhrase: string;
    },
    Night:{
      Icon: string;
      IconPhrase: string;
    },
    Temperature:{
      Maximum:{
        Unit: string,
        Value: number
      }
      Minimum:{
        Unit: string,
        Value: number
      }
    }
  }
  LocalizedName: string;
  WeatherText: string;
  Value: number;
  name: string;
  Key: string;
  WeatherIcon: number;

};