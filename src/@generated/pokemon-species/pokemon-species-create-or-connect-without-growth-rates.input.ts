import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_speciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_speciesCreateWithoutGrowth_ratesInput } from './pokemon-species-create-without-growth-rates.input';

@InputType()
export class pokemon_speciesCreateOrConnectWithoutGrowth_ratesInput {

    @Field(() => pokemon_speciesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_speciesWhereUniqueInput)
    where!: pokemon_speciesWhereUniqueInput;

    @Field(() => pokemon_speciesCreateWithoutGrowth_ratesInput, {nullable:false})
    @Type(() => pokemon_speciesCreateWithoutGrowth_ratesInput)
    create!: pokemon_speciesCreateWithoutGrowth_ratesInput;
}
