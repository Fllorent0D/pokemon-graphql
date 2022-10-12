import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsUpdateWithoutStatsInput } from './pokemon-stats-update-without-stats.input';

@InputType()
export class pokemon_statsUpdateWithWhereUniqueWithoutStatsInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsUpdateWithoutStatsInput, {nullable:false})
    @Type(() => pokemon_statsUpdateWithoutStatsInput)
    data!: pokemon_statsUpdateWithoutStatsInput;
}
