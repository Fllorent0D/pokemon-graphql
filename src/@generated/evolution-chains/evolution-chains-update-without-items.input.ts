import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput } from '../pokemon-species/pokemon-species-update-many-without-evolution-chains-nested.input';

@InputType()
export class evolution_chainsUpdateWithoutItemsInput {

    @Field(() => pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput, {nullable:true})
    pokemon_species?: pokemon_speciesUpdateManyWithoutEvolution_chainsNestedInput;
}
