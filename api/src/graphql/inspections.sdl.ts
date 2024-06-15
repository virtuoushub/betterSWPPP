export const schema = gql`
  type Inspection {
    id: Int!
    site: Site!
    siteId: Int!
    inspector: User!
    inspectorId: Int!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
    permitOnSite: Boolean!
    swpppOnSite: Boolean!
    bmpsInstalledPerSwppp: Boolean!
    siteInspectionReports: Boolean!
    inspectionType: String!
    title: String!
    description: String!
    severity: String!
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean!
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String!
    temperature: Float
    previousDischarge: Boolean!
    newDischarges: Boolean!
    dischargeAtThisTime: Boolean!
    currentDischarges: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    bmpData: [BmpData]!
    media: [Media]!
  }

  type Query {
    inspections: [Inspection!]! @requireAuth
    inspection(id: Int!): Inspection @requireAuth
  }

  input CreateInspectionInput {
<<<<<<< HEAD
  siteId: Int!
  inspectorId: Int!
  date: DateTime!
  startTime: DateTime!
  endTime: DateTime!
  permitOnSite: Boolean!
  swpppOnSite: Boolean!
  bmpsInstalledPerSwppp: Boolean!
  siteInspectionReports: Boolean!
  inspectionType: String!
  title: String!
  description: String!
  severity: String!
  violationsNotes: String
  whomToContact: String
  newStormEvent: Boolean!
  stormDateTime: DateTime
  stormDuration: String
  approximatePrecipitation: Float
  weatherAtTime: String!
  temperature: Float
  previousDischarge: Boolean!
  newDischarges: Boolean!
  dischargeAtThisTime: Boolean!
  currentDischarges: Boolean!
  bmpData: [CreateBmpDataInput!]  # Include BMP data in the input
}

=======
    siteId: Int!
    inspectorId: Int!
    date: DateTime!
    startTime: DateTime!
    endTime: DateTime!
    weather: String!
    permitOnSite: Boolean!
    swpppOnSite: Boolean!
    bmpsInstalledPerSwppp: Boolean!
    siteInspectionReports: Boolean!
    inspectionType: String!
    title: String!
    description: String!
    severity: String!
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean!
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String!
    temperature: Float
    previousDischarge: Boolean!
    newDischarges: Boolean!
    dischargeAtThisTime: Boolean!
    currentDischarges: Boolean!
    bmpData: [CreateBmpDataInput!] # Include BMP data in the input
  }
>>>>>>> 899a984ca2de8666a3ca4b3f91d954ef2dfcb5e5

  input UpdateInspectionInput {
    siteId: Int
    inspectorId: Int
    date: DateTime
    startTime: DateTime
    endTime: DateTime
    permitOnSite: Boolean
    swpppOnSite: Boolean
    bmpsInstalledPerSwppp: Boolean
    siteInspectionReports: Boolean
    inspectionType: String
    title: String
    description: String
    severity: String
    violationsNotes: String
    whomToContact: String
    newStormEvent: Boolean
    stormDateTime: DateTime
    stormDuration: String
    approximatePrecipitation: Float
    weatherAtTime: String
    temperature: Float
    previousDischarge: Boolean
    newDischarges: Boolean
    dischargeAtThisTime: Boolean
    currentDischarges: Boolean
    bmpData: [CreateBmpDataInput!] # Include BMP data in the input
  }

  type Mutation {
    createInspection(input: CreateInspectionInput!): Inspection! @requireAuth
    updateInspection(id: Int!, input: UpdateInspectionInput!): Inspection!
      @requireAuth
    deleteInspection(id: Int!): Inspection! @requireAuth
  }
`
