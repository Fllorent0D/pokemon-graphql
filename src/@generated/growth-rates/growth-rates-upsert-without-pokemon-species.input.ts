import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesUpdateWithoutPokemon_speciesInput } from './growth-rates-update-without-pokemon-species.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutPokemon_speciesInput } from './growth-rates-create-without-pokemon-species.input';

@InputType()
export class growth_ratesUpsertWithoutPokemon_speciesInput {

    @Field(() => growth_ratesUpdateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => growth_ratesUpdateWithoutPokemon_speciesInput)
    update!: growth_ratesUpdateWithoutPokemon_speciesInput;

    @Field(() => growth_ratesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutPokemon_speciesInput)
    create!: growth_ratesCreateWithoutPokemon_speciesInput;
}
