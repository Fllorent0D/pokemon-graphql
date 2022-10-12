import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseWhereUniqueInput } from '../item-flag-prose/item-flag-prose-where-unique.input';
import { Type } from 'class-transformer';
import { item_flag_proseCreateInput } from '../item-flag-prose/item-flag-prose-create.input';
import { item_flag_proseUpdateInput } from '../item-flag-prose/item-flag-prose-update.input';

@ArgsType()
export class UpsertOneitemFlagProseArgs {

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;

    @Field(() => item_flag_proseCreateInput, {nullable:false})
    @Type(() => item_flag_proseCreateInput)
    create!: item_flag_proseCreateInput;

    @Field(() => item_flag_proseUpdateInput, {nullable:false})
    @Type(() => item_flag_proseUpdateInput)
    update!: item_flag_proseUpdateInput;
}
