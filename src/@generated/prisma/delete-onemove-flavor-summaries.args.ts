import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesWhereUniqueInput } from '../move-flavor-summaries/move-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => move_flavor_summariesWhereUniqueInput)
    where!: move_flavor_summariesWhereUniqueInput;
}
