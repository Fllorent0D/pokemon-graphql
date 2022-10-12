import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-update-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-create-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_stat_namesUpsertWithWhereUniqueWithoutPokeathlon_statsInput {

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;

    @Field(() => pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput)
    update!: pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput;

    @Field(() => pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput)
    create!: pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput;
}
