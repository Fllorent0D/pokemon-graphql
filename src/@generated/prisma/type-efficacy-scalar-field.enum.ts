import { registerEnumType } from '@nestjs/graphql';

export enum Type_efficacyScalarFieldEnum {
    damage_type_id = "damage_type_id",
    target_type_id = "target_type_id",
    damage_factor = "damage_factor"
}


registerEnumType(Type_efficacyScalarFieldEnum, { name: 'Type_efficacyScalarFieldEnum', description: undefined })
