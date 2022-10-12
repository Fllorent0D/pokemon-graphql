import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_statsWhereUniqueInput } from './pokemon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_statsUpdateWithoutStatsInput } from './pokemon-stats-update-without-stats.input';
import { pokemon_statsCreateWithoutStatsInput } from './pokemon-stats-create-without-stats.input';

@InputType()
export class pokemon_statsUpsertWithWhereUniqueWithoutStatsInput {

    @Field(() => pokemon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_statsWhereUniqueInput)
    where!: pokemon_statsWhereUniqueInput;

    @Field(() => pokemon_statsUpdateWithoutStatsInput, {nullable:false})
    @Type(() => pokemon_statsUpdateWithoutStatsInput)
    update!: pokemon_statsUpdateWithoutStatsInput;

    @Field(() => pokemon_statsCreateWithoutStatsInput, {nullable:false})
    @Type(() => pokemon_statsCreateWithoutStatsInput)
    create!: pokemon_statsCreateWithoutStatsInput;
}
