import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereUniqueInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquenaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsWhereUniqueInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsWhereUniqueInput)
    where!: nature_pokeathlon_statsWhereUniqueInput;
}
