import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput } from '../pokemon-species/pokemon-species-create-nested-many-without-evolution-chains.input';

@InputType()
export class evolution_chainsCreateWithoutItemsInput {

    @Field(() => pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput;
}
