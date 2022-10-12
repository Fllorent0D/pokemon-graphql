import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsUpdateInput } from '../pokeathlon-stats/pokeathlon-stats-update.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsWhereUniqueInput } from '../pokeathlon-stats/pokeathlon-stats-where-unique.input';

@ArgsType()
export class UpdateOnepokeathlonStatsArgs {

    @Field(() => pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateInput)
    data!: pokeathlon_statsUpdateInput;

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    where!: pokeathlon_statsWhereUniqueInput;
}
