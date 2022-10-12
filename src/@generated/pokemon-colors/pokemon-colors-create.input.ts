import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesCreateNestedManyWithoutPokemon_colorsInput } from '../pokemon-color-names/pokemon-color-names-create-nested-many-without-pokemon-colors.input';
import { pokemon_speciesCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-create-nested-many-without-color.input';

@InputType()
export class pokemon_colorsCreateInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_color_namesCreateNestedManyWithoutPokemon_colorsInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesCreateNestedManyWithoutPokemon_colorsInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutColorInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutColorInput;
}
