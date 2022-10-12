import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { nature_pokeathlon_statsCreateInput } from '../nature-pokeathlon-stats/nature-pokeathlon-stats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnenaturePokeathlonStatsArgs {

    @Field(() => nature_pokeathlon_statsCreateInput, {nullable:false})
    @Type(() => nature_pokeathlon_statsCreateInput)
    data!: nature_pokeathlon_statsCreateInput;
}
