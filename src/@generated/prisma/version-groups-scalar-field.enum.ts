import { registerEnumType } from '@nestjs/graphql';

export enum Version_groupsScalarFieldEnum {
    id = "id",
    generation_id = "generation_id",
    pokedex_id = "pokedex_id"
}


registerEnumType(Version_groupsScalarFieldEnum, { name: 'Version_groupsScalarFieldEnum', description: undefined })
