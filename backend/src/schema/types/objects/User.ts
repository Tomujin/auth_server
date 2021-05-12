import { objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.Tenant()
    t.model.ExternalIdentifiers()
    t.model.Registrations()
    t.model.mobile()
    t.model.username()
    t.model.accountStatusType()
    t.model.email()
    t.model.Groups()
    t.model.Profile()
    t.model.Groups()
    t.model.Devices()
    t.model.createdAt()
    t.model.updatedAt()
  },
})
