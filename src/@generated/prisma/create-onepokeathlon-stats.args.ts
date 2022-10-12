import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsCreateInput } from '../pokeathlon-stats/pokeathlon-stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokeathlonStatsArgs {

    @Field(() => pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => pokeathlon_statsCreateInput)
    data!: pokeathlon_statsCreateInput;
}
