import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsCreateWithoutStatsInput } from './pokemon-stats-create-without-stats.input';

@InputType()
export class pokemon_statsCreateOrConnectWithoutStatsInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsCreateWithoutStatsInput, {nullable:false})
    @Type(() => pokemon_statsCreateWithoutStatsInput)
    create!: pokemon_statsCreateWithoutStatsInput;
}
