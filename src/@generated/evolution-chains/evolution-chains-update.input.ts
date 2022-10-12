import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateOneWithoutEvolution_chainsNestedInput } from '../items/items-update-one-without-evolution-chains-nested.input';
import { pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chains-nested.input';

@InputType()
export class evolution_chainsUpdateInput {

    @Field(() => itemsUpdateOneWithoutEvolution_chainsNestedInput, {nullable:true})
    items?: itemsUpdateOneWithoutEvolution_chainsNestedInput;

    @Field(() => pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput;
}
