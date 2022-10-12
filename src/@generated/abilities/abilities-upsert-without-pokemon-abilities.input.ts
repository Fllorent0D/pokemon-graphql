import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { abilitiesUpdateWithoutPokemon_abilitiesInput } from './abilities-update-without-pokemon-abilities.input';
import { Type } from 'class-transformer';
import { abilitiesCreateWithoutPokemon_abilitiesInput } from './abilities-create-without-pokemon-abilities.input';

@InputType()
export class abilitiesUpsertWithoutPokemon_abilitiesInput {

    @Field(() => abilitiesUpdateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => abilitiesUpdateWithoutPokemon_abilitiesInput)
    update!: abilitiesUpdateWithoutPokemon_abilitiesInput;

    @Field(() => abilitiesCreateWithoutPokemon_abilitiesInput, {nullable:false})
    @Type(() => abilitiesCreateWithoutPokemon_abilitiesInput)
    create!: abilitiesCreateWithoutPokemon_abilitiesInput;
}
