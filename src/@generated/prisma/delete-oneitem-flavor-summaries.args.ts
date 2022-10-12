import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesWhereUniqueInput } from '../item-flavor-summaries/item-flavor-summaries-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesWhereUniqueInput, {nullable:false})
    @Type(() => item_flavor_summariesWhereUniqueInput)
    where!: item_flavor_summariesWhereUniqueInput;
}
