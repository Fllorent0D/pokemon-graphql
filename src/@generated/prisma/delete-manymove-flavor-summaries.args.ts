import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_summariesWhereInput } from '../move-flavor-summaries/move-flavor-summaries-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveFlavorSummariesArgs {

    @Field(() => move_flavor_summariesWhereInput, {nullable:true})
    @Type(() => move_flavor_summariesWhereInput)
    where?: move_flavor_summariesWhereInput;
}
