import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput } from '../pokemon-color-names/pokemon-color-names-unchecked-create-nested-many-without-pokemon-colors.input';

@InputType()
export class pokemon_colorsUncheckedCreateWithoutPokemon_speciesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput, {nullable:true})
    pokemon_color_names?: pokemon_color_namesUncheckedCreateNestedManyWithoutPokemon_colorsInput;
}
