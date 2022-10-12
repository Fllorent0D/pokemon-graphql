import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseUpdateInput } from '../item-prose/item-prose-update.input';
import { Type } from 'class-transformer';
import { item_proseWhereUniqueInput } from '../item-prose/item-prose-where-unique.input';

@ArgsType()
export class UpdateOneitemProseArgs {

    @Field(() => item_proseUpdateInput, {nullable:false})
    @Type(() => item_proseUpdateInput)
    data!: item_proseUpdateInput;

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;
}
