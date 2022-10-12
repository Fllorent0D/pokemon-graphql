import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { evolution_chainsUpdateWithoutPokemon_speciesInput } from './evolution-chains-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { evolution_chainsCreateWithoutPokemon_speciesInput } from './evolution-chains-create-without-pokemon-species.input';

@InputType()
export class evolution_chainsUpsertWithoutPokemon_speciesInput {

    @Field(() => evolution_chainsUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => evolution_chainsUpdateWithoutPokemon_speciesInput)
    update!: evolution_chainsUpdateWithoutPokemon_speciesInput;

    @Field(() => evolution_chainsCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => evolution_chainsCreateWithoutPokemon_speciesInput)
    create!: evolution_chainsCreateWithoutPokemon_speciesInput;
}
