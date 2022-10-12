import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-shape.input';

@InputType()
export class pokemon_shapesUncheckedCreateWithoutPokemon_shape_proseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutShapeInput;
}
