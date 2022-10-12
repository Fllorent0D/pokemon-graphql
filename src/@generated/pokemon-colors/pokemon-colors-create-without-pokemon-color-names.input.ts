import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedManyWithoutColorInput } from '../pokemon-species/pokemon-species-create-nested-many-without-color.input';

@InputType()
export class pokemon_colorsCreateWithoutPokemon_color_namesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesCreateNestedManyWithoutColorInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutColorInput;
}
