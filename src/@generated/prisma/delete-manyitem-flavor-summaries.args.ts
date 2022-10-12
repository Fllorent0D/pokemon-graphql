import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flavor_summariesWhereInput } from '../item-flavor-summaries/item-flavor-summaries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyitemFlavorSummariesArgs {

    @Field(() => item_flavor_summariesWhereInput, {nullable:true})
    @Type(() => item_flavor_summariesWhereInput)
    where?: item_flavor_summariesWhereInput;
}
