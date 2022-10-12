import { registerEnumType } from '@nestjs/graphql';

export enum Pokemon_form_namesScalarFieldEnum {
    pokemon_form_id = "pokemon_form_id",
    local_language_id = "local_language_id",
    form_name = "form_name",
    pokemon_name = "pokemon_name"
}


registerEnumType(Pokemon_form_namesScalarFieldEnum, { name: 'Pokemon_form_namesScalarFieldEnum', description: undefined })
