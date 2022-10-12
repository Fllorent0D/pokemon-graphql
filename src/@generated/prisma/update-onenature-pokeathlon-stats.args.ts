import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsUpdateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsWhereUniqueInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where-unique.input';

@ArgsType()
export class UpdateOnenaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateInput)
    data!: nature_pokeathlon_statsUpdateInput;

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    where!: nature_pokeathlon_statsWhereUniqueInput;
}
