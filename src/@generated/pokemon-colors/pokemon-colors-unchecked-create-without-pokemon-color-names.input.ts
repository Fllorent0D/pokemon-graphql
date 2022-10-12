import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesUncheckedCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-color.input';

@InputType()
export class pokemon_colorsUncheckedCreateWithoutPokemon_color_namesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutColorInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutColorInput;
}
