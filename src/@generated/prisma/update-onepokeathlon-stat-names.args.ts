import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesUpdateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesWhereUniqueInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where-unique.input';

@ArgsType()
export class UpdateOnepokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesUpdateInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateInput)
    data!: pokeathlon_stat_namesUpdateInput;

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;
}
