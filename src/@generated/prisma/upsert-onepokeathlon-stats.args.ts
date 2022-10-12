import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsWhereUniqueInput } from '../pokeathlon-stats/pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsCreateInput } from '../pokeathlon-stats/pokeathlon-stats-create.input';
import { pokeathlon_statsUpdateInput } from '../pokeathlon-stats/pokeathlon-stats-update.input';

@ArgsType()
export class UpsertOnepokeathlonStatsArgs {

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    where!: pokeathlon_statsWhereUniqueInput;

    @Field(() => pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateInput)
    create!: pokeathlon_statsCreateInput;

    @Field(() => pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateInput)
    update!: pokeathlon_statsUpdateInput;
}
