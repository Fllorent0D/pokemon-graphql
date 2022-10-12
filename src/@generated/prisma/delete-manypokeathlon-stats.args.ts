import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsWhereInput } from '../pokeathlon-stats/pokeathlon-stats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokeathlonStatsArgs {

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereInput)
    where?: pokeathlon_statsWhereInput;
}
