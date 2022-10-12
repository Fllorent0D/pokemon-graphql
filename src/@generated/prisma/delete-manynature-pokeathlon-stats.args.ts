import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsWhereInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManynaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsWhereInput, {nullable:true})
    @Type(() => nature_pokeathlon_statsWhereInput)
    where?: nature_pokeathlon_statsWhereInput;
}
