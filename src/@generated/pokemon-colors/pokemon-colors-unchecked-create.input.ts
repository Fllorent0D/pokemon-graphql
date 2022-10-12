import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput } from '../pokemon-color-names/pokemon-color-names-unchecked-create-nested-many-without-pokemon-colors.input';
import { pokemon_speciesUncheckedCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-color.input';

@InputType()
export class pokemon_colorsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutColorInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutColorInput;
}
