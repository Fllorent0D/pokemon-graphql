import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesCreateInput } from '../item-flavor-summaries/item-flavor-summaries-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesCreateInput, {nullable:false})
    @Type(() => item_flavor_summariesCreateInput)
    data!: item_flavor_summariesCreateInput;
}
