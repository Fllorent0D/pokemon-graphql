import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsWhereUniqueInput } from '../pokeathlon-stats/pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokeathlonStatsArgs {

    @Field(() => pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => pokeathlon_statsWhereUniqueInput)
    where!: pokeathlon_statsWhereUniqueInput;
}
