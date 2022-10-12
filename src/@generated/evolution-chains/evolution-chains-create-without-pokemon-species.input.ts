import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateNestedOneWithoutEvolution_chainsInput } from '../items/items-create-nested-one-without-evolution-chains.input';

@InputType()
export class evolution_chainsCreateWithoutPokemon_speciesInput {

    @Field(() => itemsCreateNestedOneWithoutEvolution_chainsInput, {nullable:true})
    items?: itemsCreateNestedOneWithoutEvolution_chainsInput;
}
