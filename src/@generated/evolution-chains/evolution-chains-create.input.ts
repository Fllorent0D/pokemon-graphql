import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutEvolution_chainsInput } from '../items/items-create-nested-one-without-evolution-chains.input';
import { pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput } from '../pokemon-species/pokemon-species-create-nested-many-without-evolution-chains.input';

@InputType()
export class evolution_chainsCreateInput {

    @Field(() => itemsCreateNestedOneWithoutEvolution_chainsInput, {nullable:true})
    items?: itemsCreateNestedOneWithoutEvolution_chainsInput;

    @Field(() => pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput, {nullable:true})
    pokemon_species?: pokemon_speciesCreateNestedManyWithoutEvolution_chainsInput;
}
