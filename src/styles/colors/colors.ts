export enum Colors {
    DarkPink = "DarkPink",
    LinkWaterWhite = "LinkWaterWhite",
    SanJuanBlue = "SanJuanBlue",
    MirageBlue = "MirageBlue",
    CharmPink = "CharmPink",
    LightSanJuanBlue = "LightSanJuanBlue",
  }
  
  export type ColorsTypes = {
  [key in Colors] : string
  }
  
  
  export const colors: ColorsTypes = {
    [Colors.DarkPink]: "#ba4270",
    [Colors.LinkWaterWhite]: "#fbfcfe",
    [Colors.SanJuanBlue]: "#36536b",
    [Colors.MirageBlue]: "#1b262f",
    [Colors.CharmPink]: "#da6d97",
    [Colors.LightSanJuanBlue]: "#6c8294",
  };
  
  export const colorRoles = {
    Primary: { DarkPink: colors.DarkPink, LinkWaterWhite: colors.LinkWaterWhite },
    Secondary: {
      SanJuanBlue: colors.SanJuanBlue,
      MirageBlue: colors.MirageBlue,
      CharmPink: colors.CharmPink,
      LightSanJuanBlue: colors.LightSanJuanBlue,
    },
  };