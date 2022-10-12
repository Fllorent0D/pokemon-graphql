import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_proseWhereUniqueInput } from '../item-prose/item-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_proseCreateInput } from '../item-prose/item-prose-create.input';
import { item_proseUpdateInput } from '../item-prose/item-prose-update.input';

@ArgsType()
export class UpsertOneitemProseArgs {

    @Field(() => item_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_proseWhereUniqueInput)
    where!: item_proseWhereUniqueInput;

    @Field(() => item_proseCreateInput, {nullable:false})
    @Type(() => item_proseCreateInput)
    create!: item_proseCreateInput;

    @Field(() => item_proseUpdateInput, {nullable:false})
    @Type(() => item_proseUpdateInput)
    update!: item_proseUpdateInput;
}
