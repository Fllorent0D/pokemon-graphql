import { registerEnumType } from '@nestjs/graphql';

export enum StatsScalarFieldEnum {
    id = "id",
    damage_class_id = "damage_class_id",
    identifier = "identifier",
    is_battle_only = "is_battle_only"
}


registerEnumType(StatsScalarFieldEnum, { name: 'StatsScalarFieldEnum', description: undefined })
