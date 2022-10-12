import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_formsScalarFieldEnum {
    id = "id",
    form_identifier = "form_identifier",
    pokemon_id = "pokemon_id",
    introduced_in_version_group_id = "introduced_in_version_group_id",
    is_default = "is_default",
    is_battle_only = "is_battle_only",
    order = "order"
}


registerEnumType(Pokemon_formsScalarFieldEnum, { name: 'Pokemon_formsScalarFieldEnum', description: undefined })
