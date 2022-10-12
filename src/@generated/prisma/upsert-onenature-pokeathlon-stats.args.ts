import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereUniqueInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';
import { nature_pokeathlon_statsCreateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-create.input';
import { nature_pokeathlon_statsUpdateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-update.input';

@ArgsType()
export class UpsertOnenaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    where!: nature_pokeathlon_statsWhereUniqueInput;

    @Field(() => nature_pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsCreateInput)
    create!: nature_pokeathlon_statsCreateInput;

    @Field(() => nature_pokeathlon_statsUpdateInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsUpdateInput)
    update!: nature_pokeathlon_statsUpdateInput;
}
