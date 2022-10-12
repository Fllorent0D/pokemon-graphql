import { registerEnumType } from '@nestjs/graphql';

export enum Encounter_slotsScalarFieldEnum {
    id = "id",
    version_group_id = "version_group_id",
    encounter_method_id = "encounter_method_id",
    slot = "slot",
    rarity = "rarity"
}


registerEnumType(Encounter_slotsScalarFieldEnum, { name: 'Encounter_slotsScalarFieldEnum', description: undefined })
