import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokeathlon_statsUpdateManyMutationInput } from '../pokeathlon-stats/pokeathlon-stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokeathlon_statsWhereInput } from '../pokeathlon-stats/pokeathlon-stats-where.input';

@ArgsType()
export class UpdateManypokeathlonStatsArgs {

    @Field(() => pokeathlon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokeathlon_statsUpdateManyMutationInput)
    data!: pokeathlon_statsUpdateManyMutationInput;

    @Field(() => pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => pokeathlon_statsWhereInput)
    where?: pokeathlon_statsWhereInput;
}
