import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-update-without-pokeathlon-stats.input';

@InputType()
export class pokeathlon_stat_namesUpdateWithWhereUniqueWithoutPokeathlon_statsInput {

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;

    @Field(() => pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput)
    data!: pokeathlon_stat_namesUpdateWithoutPokeathlon_statsInput;
}
