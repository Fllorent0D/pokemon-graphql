import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_stat_namesWhereUniqueInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesCreateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-create.input';
import { pokeathlon_stat_namesUpdateInput } from '../pokeathlon-stat-names/pokeathlon-stat-names-update.input';

@ArgsType()
export class UpsertOnepokeathlonStatNamesArgs {

    @Field(() => pokeathlon_stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    where!: pokeathlon_stat_namesWhereUniqueInput;

    @Field(() => pokeathlon_stat_namesCreateInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesCreateInput)
    create!: pokeathlon_stat_namesCreateInput;

    @Field(() => pokeathlon_stat_namesUpdateInput, {nullable:false})
    @Type(() => pokeathlon_stat_namesUpdateInput)
    update!: pokeathlon_stat_namesUpdateInput;
}
