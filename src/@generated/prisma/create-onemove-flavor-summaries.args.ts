import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesCreateInput } from '../move-flavor-summaries/move-flavor-summaries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesCreateInput, {nullable:false})
    @Type(() => move_flavor_summariesCreateInput)
    data!: move_flavor_summariesCreateInput;
}
