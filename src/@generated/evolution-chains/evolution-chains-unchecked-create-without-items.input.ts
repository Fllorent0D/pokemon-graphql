import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { pokemon_speciesUncheckedCreateNestedManyWithoutEvolution_chainsInput } from '../pokemon-species/pokemon-species-unchecked-create-nested-many-without-evolution-chains.input';

@InputType()
export class evolution_chainsUncheckedCreateWithoutItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => pokemon_speciesUncheckedCreateNestedManyWithoutEvolution_chainsInput, {nullable:true})
    pokemon_species?: pokemon_speciesUncheckedCreateNestedManyWithoutEvolution_chainsInput;
}
