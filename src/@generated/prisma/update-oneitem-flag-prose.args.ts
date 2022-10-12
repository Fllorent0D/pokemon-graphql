import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_flag_proseUpdateInput } from '../item-flag-prose/item-flag-prose-update.input';
import { Type } from 'class-transformer';
import { item_flag_proseWhereUniqueInput } from '../item-flag-prose/item-flag-prose-where-unique.input';

@ArgsType()
export class UpdateOneitemFlagProseArgs {

    @Field(() => item_flag_proseUpdateInput, {nullable:false})
    @Type(() => item_flag_proseUpdateInput)
    data!: item_flag_proseUpdateInput;

    @Field(() => item_flag_proseWhereUniqueInput, {nullable:false})
    @Type(() => item_flag_proseWhereUniqueInput)
    where!: item_flag_proseWhereUniqueInput;
}
