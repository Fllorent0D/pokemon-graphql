import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateOneWithoutEvolution_chainsNestedInput } from '../items/items-update-one-without-evolution-chains-nested.input';

@InputType()
export class evolution_chainsUpdateWithoutPokemon_speciesInput {

    @Field(() => itemsUpdateOneWithoutEvolution_chainsNestedInput, {nullable:true})
    items?: itemsUpdateOneWithoutEvolution_chainsNestedInput;
}
