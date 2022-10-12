import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_ratesWhereUniqueInput } from './growth-rates-where-unique.input';
import { Type } from 'class-transformer';
import { growth_ratesCreateWithoutPokemon_speciesInput } from './growth-rates-create-without-pokemon-species.input';

@InputType()
export class growth_ratesCreateOrConnectWithoutPokemon_speciesInput {

    @Field(() => growth_ratesWhereUniqueInput, {nullable:false})
    @Type(() => growth_ratesWhereUniqueInput)
    where!: growth_ratesWhereUniqueInput;

    @Field(() => growth_ratesCreateWithoutPokemon_speciesInput, {nullable:false})
    @Type(() => growth_ratesCreateWithoutPokemon_speciesInput)
    create!: growth_ratesCreateWithoutPokemon_speciesInput;
}
