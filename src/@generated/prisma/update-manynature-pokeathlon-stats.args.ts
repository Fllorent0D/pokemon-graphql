import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsUpdateManyMutationInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsWhereInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where.input';

@ArgsType()
export class UpdateManynaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsUpdateManyMutationInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateManyMutationInput)
    data!: nature_pokeathlon_statsUpdateManyMutationInput;

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereInput)
    where?: nature_pokeathlon_statsWhereInput;
}
